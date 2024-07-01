//create your resume data in json format
var resume={
    "basics": {
      "name": "Swetha R",
      "email": "swetharagupathy1103@gmail.com",
      "phone": "7397394xxx",
      "degree": "B.E",
      "location": {
        "address": "Radiance suprema",
        "postalCode": 60,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "network": "linkedin",
          "url": "xxxxxxxxxxxxxxxxxxxxxxxxxx"
        }
      ]
    },
    "work": [
      {
        "company": "Wipro",
        "position": "Project developer",
        "startDate":"xxxxxxx",
        "endDate": "yyyyyyyy",
      },
    ],
    "education": [
      {
        "institution": "Jeppiar engineering college",
        "department": "EEE",
        "batch start year": 2017,
        "batch end year": 2021,
        "gpa": 7.9,
      }
    ],
    "skills": [
      {
        "name": "jcl,assembler,javascript",
        }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish,Japanese",
      }
    ],
    "interests": [
      {
        "name": "sketch,cricket",
      }
    ]
  }
  console.log(resume);

// for the above json iterate overall forloop(for,forin,forof,foreach)

var resume = [{
    "name" : "Swetha R", 
    "age"   : "24",
    "company" : "wipro",
    "city": "chennai"
},
{
    "name" : "Nivetha R", 
    "age"   : "25",
    "company" : "atos",
    "city": "banglore"
},
{
    "name" : "Monisha", 
    "age"   : "26",
    "company" : "infosys",
    "city": "pune"
}];

// for loop
for(var i = 0; i < resume.length; i++) {
    console.log(resume[i].name,resume[i].city);
}

//forin
for (var key in resume) {
    if (resume.hasOwnProperty(key)) {
      console.log(resume[key].company);
    }
}

//for Of
let text = "";
for (let x of resume[key].age) {
 text += x; 
}
 console.log(text);