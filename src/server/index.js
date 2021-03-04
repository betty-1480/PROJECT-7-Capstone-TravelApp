//Empty object as Endpoint
let pixabayData = {}; 

const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

// HtmlWebPackPlugin helps to dynamic reference to dist
app.use(express.static('dist')) //app.use(express.static('src/client'))

console.log(__dirname)

app.get('/', function (req, res) {
    //res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
    res.sendFile('dist/index.html') // HtmlWebPackPlugin helps to dynamic reference to dist/index.html file
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser')
const fetch = require("node-fetch");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require("cors")
app.use(cors())

//Initialize the project to distribution folder
app.use(express.static('dist'))

console.log(__dirname)

//API form MeaningCloud
//const textApi = process.env.API_KEY_PIXABAY;
const textApi = '19294380-75e7581ecffdb6df0de0d8558';
let baseURL = 'https://pixabay.com/api/';
let lang = '&lang=en';

app.post('/pixabay', async(req, res) => {
    try {

        // API call and store all data that comes form analysis of the test
        //const request=await fetch(finalURL);
        //https://pixabay.com/api/?key=19294380-75e7581ecffdb6df0de0d8558&q=yellow+flowers&image_type=photo
        const url=`${baseURL}?key=${textApi}&q=${req.body.formText}&image_type=photo`;
        const request =await fetch(url);
        const dataFromApi = await request.json(); 
        pixabayData = {
            total : dataFromApi.total,
            previewURL:dataFromApi.hits[0].previewURL
        }
        res.send(pixabayData);
        //console.log(pixabayData);
    } catch (error) {
        console.log(`Error:${error}`);
    }
});

app.get("/geo",async(req,res)=>{
    geoNameURL = 'http://api.geonames.org/searchJSON?q=';
    geoNameUser = 'bettys';
   const location=req.query.q;
    const response = await fetch(geoNameURL + location + "&username=" + geoNameUser);
    try {
        const geoInfo = await response.json();
        //return geoInfo;
        res.send(geoInfo);
    } catch (error) {
        console.log("error", error);
}
});

app.get("/weather",async(req,res)=>{
    const weatherBitURL = 'http://api.weatherbit.io/v2.0/forecast/daily?';
    const weatherBitKey= '18fec21e69c3454aa47d4a2a03140d34'; //process.env.API_KEY_WEATHERBIT;
    const response = await fetch(weatherBitURL + "lat=" + req.query.latitude + "&lon=" + req.query.longitude + "&key=" + weatherBitKey);
    try {
        const weatherInfo = await response.json();
        res.send(weatherInfo) ;
    } catch (error) {
        console.log("error", error);
}
})

app.get("/all", (req, res) => {
    res.send(pixabayData);
});

// Define what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/myGetRoute',getData);
function getData(req,res){
    res.send(projectData);
}

app.post('/myPostRoute',callBack);
function callBack(req,res){
    const dataFromClient={postCountryNames:req.body.postCountryNames};
    //projectData.push(dataFromClient);
    projectData = dataFromClient;
}