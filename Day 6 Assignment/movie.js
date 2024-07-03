//Radius of the circle

class Circle {
    constructor(radius, color) {
            this.radius = radius;
            this.color = color;
        }
    getColor() { return this.color; }
    setColor(color) { this.color = color; }
    getRadius() { return this.radius; }
    setRadius(radius) { this.radius = radius; }
    tostring() {
            return ('[radius = ' + this.radius + ',color = ' + this.color + ']')
        }
    getArea() {
            return Math.PI * this.radius * this.radius;
        }
        getCircumference() { return 2 * (Math.PI) * this.radius }
    }
    let circ = new Circle(25.0, 'red');
    console.log(circ);
    console.log(circ.getColor());
    console.log(circ.getRadius());
    circ.setColor('blue')
    console.log(circ.getColor())
    circ.setRadius(11.0)
    console.log(circ.getRadius());
    console.log('Circle : ' + circ.tostring());
    console.log(circ.getArea());
    console.log(circ.getCircumference());
    


//The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

//title, which is a String representing the title of the movie
//studio, which is a String representing the studio that made the movie
//rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

class Movie {
 constructor(title, studio, rating) {
 this.title = title;
 this.studio = studio;
 this.rating = rating; 
 if (typeof this.rating =='undefined') {
 this.rating = 'PG';
 }
 }
}
let movie1 = new Movie('hey sinamika', 'platinum', 5);
let movie2 = new Movie('20th century', 'gold', 4);
let movie3 = new Movie('lion king', 'silver', 4.5);

console.log(movie1)
function getPG(movie) {
 let res = []
 for (let i = 0; i < movie.length; i++) {
if (movie[i].rating == 'PG') {
 res.push(movie[i].title);
 }
 }
 return res;
}
let arr = [movie1, movie2, movie3]
console.log(getPG(arr))
 //creating instance of class Movie
let movie4 = new Movie('Casino Royale', 'Eon Productions', 'PG13');
console.log(movie4);
