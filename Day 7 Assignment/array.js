//Get all the countries from Asia continent /region using Filter method
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
var result = JSON.parse(request.response);
var result = result.filter((ele)=>ele.region=="Asia");
console.log(result);


//Get all the countries with a population of less than 2 lakhs using Filter method

var country_population = result.filter((ele)=>ele.popultaion<200000);
console.log(country_population);

//Print the following details name, capital, flag, using forEach method

result.forEach((ele)=>console.log(ele.name.common, ele.capital, ele.flag));


// Print the total population of countries using reduce method

var total_population= result.reduce((acc,cv)=>acc+cv.population,0);
console.log(total_population);


// Print the country that uses US dollars as currency.

var dollar = result.filter((ele)=>ele.currencies=="USD");
console.log(dollar);

}

