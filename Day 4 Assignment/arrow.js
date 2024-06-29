//1. print odd numbers in an array

var temp = [12,15,3,9,41];
temp.forEach(num => {
    if (num % 2 !== 0) {
        console.log(num);
    }
});

// output: 
//15
//3
//9
//41

//******************************************************************************************************

//2. convert all the strings to title caps in a string array

var arr = ["task", "titlecaps", "capital letter"];
var a = arr.map(str => {
    return str.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
});
console.log(a);

// OUTPUT:
//['Task', 'Titlecaps', 'Captial Letter']

//******************************************************************************************************

//3. sum of all numbers in an array

var n = [10, 20, 30, 100];
var a = (arr) => arr.reduce((acc, value) => acc + value, 0);
console.log(a(n));

//output:
//160

//******************************************************************************************************

//4. return all the prime number in an array

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var a = arr => {
    var b = num => {
        if (num <= 1){
          return false;
        }
        if (num <= 3) {
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

    return arr.filter(num => b(num));
};

var c = a(number);
console.log(c);

//output:
//2,3,5,7,11,13

//******************************************************************************************************

//5. return all the palindromes in an array 

var words = ["level", "hello", "madam", "run"];
var a = words.filter(str => {
    var b = str => {
        let Str = str.toLowerCase();
        return Str == Str.split('').reverse().join('');
    };
    return b(str);
});
console.log(a);

//output:
['level','madam']