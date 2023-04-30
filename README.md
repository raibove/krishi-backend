# Krishi Backend

This API provides endpoints for crop recommendation and fertilizer recommendation based on user input. It uses the MindsDB library for crop prediction and reads fertilizer data from a CSV file.

Project for MindsDB Hackathon

## Getting Started

To get started with this API, follow the steps below:

### Prerequisites

- Node.js (v12 or higher) and npm (Node Package Manager) installed on your machine.
- A MindsDB account and API credentials. Sign up for an account at MindsDB and obtain your API credentials.

### Installation

1. Clone this repository to your local machine or download the code as a ZIP file and extract it.

2. Navigate to the project directory in your terminal or command prompt.

3. Run the following command to install the required dependencies:

```
npm install

```

4. Create a .env file in the project directory and provide the following environment variables:

```
MINDSDB_USER=your_mindsdb_username
MINDSDB_PASS=your_mindsdb_password
PORT=9000

```

Replace your_mindsdb_username and your_mindsdb_password with your MindsDB API credentials. You can choose a different port by modifying the PORT variable.

### Usage

1. Start the API server by running the following command in the project directory:

```
node index.js
```

The server will start running on the specified port (default is 9000).

2. Send HTTP requests to the API endpoints using a tool like cURL, Postman, or any other API testing tool.

3. API Endpoints:

    - `GET /`:

    Description: Test endpoint to check if the API is running.
    Response: "Hello world!"

    - `POST /crop-recommendation`:

    Description: Endpoint for getting crop recommendations based on input text.
    Request Body:

    ```
    {
    "crop": {
        "N":105,
        "P":42,
        "K":43,
        "temparature":23,
        "humidity":62.8,
        "ph":6.52,
        "rainfall":150.37
        }
    }
    ```
    Response: Crop prediction result as JSON.

    - `POST /fertilizer-recommendation`:

    Description: Endpoint for getting fertilizer recommendations based on input crop and nutrient values.
    Request Body:
    ```
    {
        "crop": "crop_name",
        "N": N_value,
        "P": P_value,
        "K": K_value
    }
    ```

    Response: Fertilizer recommendation for the given crop and nutrient values.
4. Modify and extend the code as per your requirements.

### Contributing
Contributions are welcome! If you find any issues or want to enhance the functionality of this API, please open an issue or submit a pull request.

### License
This project is licensed under the MIT License.