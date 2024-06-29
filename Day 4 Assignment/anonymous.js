// 1. print odd numbers in array
// anonymous method:

var temp = [];
function odd(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(odd([12,15,3,9,41]));

//output:
//[ 15, 3, 9, 41 ]

//IIFE method:

var temp=[12,15,3,9,41];
 (function (array)
 {
    for(var i=0; i<array.length; i++)
    {
      if(array[i]%2!==0)
      {
         console.log(array[i]);
      }
    }
 })(temp);

 //output:
//15
//3
//9
//41

//******************************************************************************************************

// 2. convert all the strings to title caps in a string array
// anonymous method:


var arr = ["task", "titlecaps", "capital letter"];
function title(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}
var a = arr.map(title);
console.log(a);

//output:
//[ 'Task', 'Titlecaps', 'Capital Letter' ]

//IIFE method:

var arr = ["task", "titlecaps", "capital letter"];
var a = (function(arr) {
    return arr.map(function(str) {
        return str.toLowerCase().split(' ').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    });
})(arr);
console.log(a);

//output:
//[ 'Task', 'Titlecaps', 'Capital Letter' ]

//******************************************************************************************************

//3. sum of all numbers in an array
// Anonymous method
var num = [10, 20, 30, 100];
function a(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
var b = a(num);
console.log(b);

//output:
//160

// IIFE method
var n = [10, 20, 30, 100];
var a = (function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
})(n);
console.log(a);

//output:
//160

//******************************************************************************************************

//4. return all the prime number in an array
// Anonymous method

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function a(arr) {
    var b = function(num) {
        if (num <= 1){
          return false; 
        }
        if (num <= 3){
          return true; 
        }
        if (num % 2 == 0 || num % 3 == 0){
          return false;
        }
        var i = 5;
        while (i * i <= num) {
            if (num % i == 0 || num % (i + 2) == 0) {
                return false;
            }
            i += 6;
        }
        return true;
    };
    return arr.filter(function(num) {
        return b(num);
    });
};

var c = a(number);
console.log(c);

// output:
//[ 2, 3, 5, 7, 11, 13 ]

// IIFE method

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var a = (function(arr) {
    function b(num) {
        if (num <= 1){
          return false;
        }
        if (num <= 3) {
          return true;
        }
        if (num % 2 == 0 || num % 3 == 0) {
          return false;
        }
        var i = 5;
        while (i * i <= num) {
            if (num % i == 0 || num % (i + 2) == 0) {
                return false;
            }
            i += 6;
        }
        return true;
    }

    var c = [];
    for (let num of arr) {
        if (b(num)) {
            c.push(num);
        }
    }

    return c;
})(number);

console.log(a);

//output:
[ 2, 3, 5, 7, 11, 13 ]

//******************************************************************************************************

//5. return all the palindromes in an array
// Anonymous method

var words = ["level", "hello", "madam", "run"];
function a(str) {
    var Str = str.toLowerCase();
    return Str == Str.split('').reverse().join('');
}

function b(arr) {
    var c = [];

    for (var word of arr) {
        if (a(word)) {
            c.push(word);
        }
    }

    return c;
}
var c = b(words);
console.log(c);

//output
//['level','madam']

//IIFE method

var words = ["level", "hello", "madam", "run"];
var a = (function(arr) {
    function b(str) {
        var Str = str.toLowerCase();
        return Str == Str.split('').reverse().join('');
    }
    var c = [];
    for (let word of arr) {
        if (b(word)) {
            c.push(word);
        }
    }
    return c;
})(words);
console.log(a);

//output
//['level','madam']


//******************************************************************************************************

// 6. remove duplicates from an array
// Anonymous method

var num = [11, 29, 2, 6, 4, 4, 25,25];
function remove(arr) {
    return Array.from(new Set(arr));
}
var a = remove(num);
console.log(a);

//output:
//[ 11, 29, 2, 6, 4, 25 ]

// IIFE method

var num = [11, 29, 2, 6, 4, 4, 25,25];
var a = (function(arr) {
    return Array.from(new Set(arr));
})(num);
console.log(a);

//output:
//[ 11, 29, 2, 6, 4, 25 ]

//******************************************************************************************************

// 7. return median of two sorted arrays of the same size
// Anonymous method
var arr1 = [10, 26, 15];
var arr2 = [12, 42, 24];
function array(arr1, arr2) {
   var x = [...arr1, ...arr2];
   x.sort((a, b) => a - b);
   var n = x.length;
    if (n % 2 === 1) {
        return x[Math.floor(n / 2)];
    } else {
        let mid = n / 2;
        return (x[mid - 1] + x[mid]) / 2;
    }
}
var y = array(arr1, arr2);
console.log(y);

//output:
//19.5

//IIFE method

var arr1 = [10, 26, 15];
var arr2 = [12, 42, 24];
var y = (function(arr1, arr2) {
    var x = [...arr1, ...arr2];
    x.sort((a, b) => a - b);
    var n = x.length;
    if (n % 2 === 1) {
        return x[Math.floor(n / 2)];
    } else {
        var mid = n / 2;
        return (x[mid - 1] + x[mid]) / 2;
    }
})(arr1, arr2);
console.log(y);

//output:
//19.5

