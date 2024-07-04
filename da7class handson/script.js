//XML-HTTP Request
// They are used to interact with the server via api


// Step 01: Create a XHR Object
var request = new XMLHttpRequest();
// I am  going to perform the interaction with you thrrough XHR

// Step 02: Request Through the URL / Open a request
request.open("GET","https://restcountries.com/v3.1/all")

// Step 03: Initiate a request
request.send();

//Step 04: Once the data is there in the server
// if the request is successfull,
// then server responds with a status code 200

// An even is a specific task

request.onload = function(){
var result = JSON.parse(request.response);
console.log(result);


//print the details of those countries whose region bleongs to asia
var filter_data = result.filter((ele)=>ele.region=="Asia");
console.log(filter_data);

// print only those country names which belongs to europe region
var filter_data = result.filter((ele)=>ele.region=="Europe");
console.log(filter_data);
//apply map func6tion
var filter_data = filter_data.map((ele)=>ele.name.common);
console.log(filter_data);

// print sum of the total population of all the coutries
var res= result.reduce((acc,cv)=>acc+cv.population,0);
console.log(res);

//print the country names whose population is greater than 100000 and they should be in the asia region
var filter_data = result.filter((ele)=>ele.popultaion>100000 && ele.region=='Asia').map((ele)=>ele.name.common);
//var rev = result.filter((ele)=>ele.population<100000);
console.log(filter_data);
}