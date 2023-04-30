const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require('fs');
const MindsDB = require("mindsdb-js-sdk");
const data = require("./data")

const csv = require('csv-parser');

const results = [];
// Dotenv setup
dotenv.config({ path: "./.env" });

const user = {
	user: process.env.MINDSDB_USER,
	password: process.env.MINDSDB_PASS,
};

const connectToMindsDB = async (user) => {
	await MindsDB.default.connect(user);
};

const getCropPrediction = async (text) => {
	const model = await MindsDB.default.Models.getModel(
		"crop_predic",
		"mindsdb"
	);

	const queryOptions = {
		where: [`text_long = "${text}"`],
	};

	const prediction = await model.query(queryOptions);
	return prediction;
};


const getFertilizerRecommendation = ()=>{
    let result = []
    fs.createReadStream('./fertilizer.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      // Process the data
      result = results
    });
    return result
}

// Express API setup
const app = express();
app.use(cors(({
    origin: "*"
})));

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Origin: *",
        "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization"
    );
    next();
});

app.get("/", function (req, res) {
	return res.json("Hello world!");
});

app.post("/crop-recommendation", async function (req, res) {
	let text = req.body.text;
	try {
		await connectToMindsDB(user);
		let cropPrediction = await getCropPrediction(text);
        console.log(cropPrediction.value)
		let retValue = cropPrediction.value;
		res.json({ crop: retValue });
	} catch (error) {
		console.log(error);
		res.json(error);
	}
});

app.post("/fertilizer-recommendation", async function (req, res) {
    try{
        let crops = getFertilizerRecommendation()
        let nr = 0, pr=0, kr=0
        crops.forEach((crop)=>{
            if(req.body.crop===crop.Crop){
                nr = crop.N
                pr = crop.P
                kr = crop.K
            }
        })

        let n = nr - req.body.N
        let p = pr - req.body.P
        let k = kr - req.body.K

        let temp = { "N": Math.abs(n), "P": Math.abs(p), "K": Math.abs(k)}
        let max_value = temp[Math.max(Object.values(temp))]

        let key=""

        if(max_value == "N"){
            if(n < 0)
                key = 'NHigh'
            else
                key = "Nlow"
        }else if(max_value == "P"){
            if(p < 0)
                key = 'PHigh'
            else
                key = "Plow"
        }else{
            if(k < 0)
                key = 'KHigh'
            else
                key = "Klow"
        }

        res.send(data[key])

    }catch(err){
        console.log(err)
        res.json(err)
    }
})

// Run the API
const port = 9000;
app.listen(port, () => {
	console.log(`Listening at Port http://localhost:${port}`);
});

module.exports = app;