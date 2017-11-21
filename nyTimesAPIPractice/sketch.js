var myData;
var url;

var searchTerms = [];
var searchIndex = 0;
var boxSearch = [];
var queryInput;

var myData;
var url;
var newsfeed;
var tempTextH;
var tempTextS;

function setup(){
    createCanvas(1200,600);
    searchTerms = ["Brooklyn","Manhattan","Queens"];
    baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    query = searchTerms[0];
    apiKey = "api-key=ca8f317a02254532a523ee13c05ebb48"; 
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + "$"+'api-key'+"ca8f317a02254532a523ee13c05ebb48"+'q'+"Brooklyn"+'begin_date'+ "20171109"+'sort'+ "newest";

    myData = loadJSON(url);
    console.log(myData);

    setInterval(queryData, 5000);

}
function draw(){
    background(255, 254, 196);
    var x = 0;
    var y = 0;
    if(myData){
        for (var i = 0; i < height; i++) {
            for(var j = 0; j < width; j++){
                x +=(i+10);
                y +=(j+10);
                ellipse(x,y,10,10);
            }
        }
    } else {
        console.log("Bad data!");
    }
    console.log(query);
}

//callback function. can't be called except through the loadJSON
function dataResponse(tempData) {
    myData = tempData;
    for (var i = 0; i < tempData.response.docs.length; i++) {
        tempTextH = tempData.response.docs[i].headline.print_headline;
        tempTextS = tempData.response.docs[i].snippet;
    }
}

function queryData(){
    loadJSON(url, dataResponse);
}
