const data = {
  NHigh: `<p>The N value of soil is high and might give rise to weeds.</p>
          <br/>Please consider the following suggestions:
          <br/><br/>
          <ol>
            <li><i>Manure</i> – adding manure is one of the simplest ways to amend your soil with nitrogen. Be careful as there are various types of manures with varying degrees of nitrogen.</li>
            <li><i>Coffee grinds</i> – use your morning addiction to feed your gardening habit! Coffee grinds are considered a green compost material which is rich in nitrogen. Once the grounds break down, your soil will be fed with delicious, delicious nitrogen. An added benefit to including coffee grounds to your soil is while it will compost, it will also help provide increased drainage to your soil.</li>
            <li><i>Plant nitrogen fixing plants</i> – planting vegetables that are in Fabaceae family like peas, beans, and soybeans have the ability to increase nitrogen in your soil.</li>
            <li>Plant ‘green manure’ crops like cabbage, corn, and broccoli.</li>
            <li><i>Use mulch (wet grass) while growing crops</i> - Mulch can also include sawdust and scrap softwoods.</li>
          </ol>`,
  Nlow: `<p>The N value of your soil is low.</p>
          <br/>Please consider the following suggestions:
          <br/><br/>
          <ol>
            <li><i>Add sawdust or fine woodchips to your soil</i> – the carbon in the sawdust/woodchips loves nitrogen and will help absorb and soak up any excess nitrogen.</li>
            <li><i>Plant heavy nitrogen feeding plants</i> – tomatoes, corn, broccoli, cabbage, and spinach are examples of plants that thrive off nitrogen and will utilize the available nitrogen.</li>
            <li><i>Water</i> – soaking your soil with water will help leach the nitrogen deeper into your soil, effectively leaving less for your plants to use.</li>
            <li><i>Sugar</i> – In limited studies, it was shown that adding sugar to your soil can help potentially reduce the amount of nitrogen in your soil. Sugar is partially composed of carbon, an element that attracts and soaks up nitrogen in the soil.</li>
            <li>Add composted manure to the soil.</li>
            <li>Plant nitrogen fixing plants like peas or beans.</li>
            <li><i>Use NPK fertilizers with high N value.</li>
            <li><i>Do nothing</i> – It may seem counter-intuitive, but if you already have plants that are producing lots of foliage, it may be best to let them continue to absorb all the nitrogen to amend the soil for your next crops.</li>
          </ol>`,
  PHigh: `<p>The P value of your soil is high.</p>
          <br/>Please consider the following suggestions:
          <br/><br/>
          <ol>
            <li><i>Avoid adding manure</i> – manure contains many key nutrients for your soil but typically includes high levels of phosphorous. Limiting the addition of manure will help reduce phosphorus being added.</li>
            <li><i>Use only phosphorus-free fertilizer</i> – if you can limit the amount of phosphorous added to your soil, you can let the plants use the existing phosphorus while still providing other key nutrients such as Nitrogen and Potassium. Find a fertilizer with numbers such as 10-0-10, where the zero represents no phosphorous.</li>
            <li><i>Water your soil</i> – soaking your soil liberally will aid in driving phosphorous out of the soil. This is recommended as a last-ditch effort.</li>
            <li>Plant nitrogen-fixing vegetables to increase nitrogen without increasing phosphorus (like beans and peas).</li>
            <li>Use crop rotations to decrease high phosphorous levels.</li>
          </ol>`,
  Plow: `<p>The P value of your soil is low.</p>
          <br/>Please consider the following suggestions:
          <br/><br/>
          <ol>
            <li><i>Bone meal</i> – a fast-acting source that is made from ground animal bones which is rich in phosphorous.</li>
            <li><i>Rock phosphate</i> – a slower-acting source where the soil needs to convert the rock phosphate into phosphorous that the plants can use.</li>
            <li><i>Phosphorus Fertilizers</i> – applying a fertilizer with a high phosphorous content in the NPK ratio (example: 10-20-10, 20 being the phosphorous percentage).</li>
            <li><i>Organic compost</i> – adding quality organic compost to your soil will help increase phosphorous content.</li>
            <li><i>Manure</i> – as with compost, manure can be an excellent source of phosphorous for your plants.</li>
            <li><i>Clay soil</i> – introducing clay particles into your soil can help retain and fix phosphorus deficiencies.</li>
            <li><i>Ensure proper soil pH</i> – having a pH in the 6.0 to 7.0 range has been scientifically proven to have the optimal phosphorus uptake in plants.</li>
            <li>If soil pH is low, add lime or potassium carbonate to the soil as fertilizers. Pure calcium carbonate is very effective in increasing the pH value of the soil.</li>
            <li>If pH is high, the addition of appreciable amounts of organic matter will help acidify the soil. Application of acidifying fertilizers, such as ammonium sulfate, can help lower soil pH.</li>
          </ol>`,
  KHigh: `<p>The K value of your soil is high.</p>
          <br/>Please consider the following suggestions:
          <br/><br/>
          <ol>
            <li><i>Loosen the soil</i> deeply with a shovel, and water thoroughly to dissolve water-soluble potassium. Allow the soil to fully dry, and repeat digging and watering the soil two or three more times.</li>
            <li><i>Sift through the soil</i> and remove as many rocks as possible, using a soil sifter. Minerals occurring naturally in rocks can contribute to high potassium levels.</li>
            <li><i>Avoid potassium-rich fertilizers</i> – limit the use of fertilizers with high potassium content to prevent further increase in potassium levels.</li>
            <li><i>Use nitrogen-rich fertilizers</i> – nitrogen can help balance out high potassium levels in the soil. Look for fertilizers with a higher nitrogen (N) content.</li>
            <li><i>Grow potassium-accumulating plants</i> – certain plants, such as potatoes, tomatoes, and peppers, have a higher affinity for potassium. Planting these crops can help deplete excess potassium from the soil.</li>
            <li><i>Consider leaching</i> – excessive watering can help flush out potassium from the soil. However, this should only be done when necessary, as excessive leaching can also remove other essential nutrients.</li>
          </ol>`,
  KLow: `<p>The K value of your soil is low.</p>
          <br/>Please consider the following suggestions:
          <br/><br/>
          <ol>
            <li><i>Add potassium-rich fertilizers</i> – look for fertilizers with a higher potassium (K) content, such as those labeled with a higher third number in the NPK ratio.</li>
            <li><i>Use wood ash</i> – wood ash is a natural source of potassium and can be added to the soil in moderation to increase potassium levels.</li>
            <li><i>Apply compost or manure</i> – organic matter, such as compost or well-rotted manure, can help increase potassium levels in the soil over time.</li>
            <li><i>Plant cover crops</i> – certain cover crops, such as clover and alfalfa, have the ability to accumulate potassium and make it available for other plants when they are incorporated into the soil.</li>
            <li><i>Use potassium sulfate</i> – if potassium deficiency is severe, potassium sulfate can be applied as a quick-release source of potassium.</li>
            <li><i>Monitor soil pH</i> – maintaining the proper pH level (usually around neutral) can help improve potassium availability to plants.</li>
          </ol>`,
};

module.exports = data