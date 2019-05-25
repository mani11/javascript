//Using bind always returs a new function. So bind can be used to get a function with a know context 
// that can be called at a later point.
class Movie{
    constructor(name){
        this.name = name;
        this.rating = {
            "Avengers Endgame": "9/10",
            "Avengers Infinity War": "8.5/10"
        }
    }
    getMovieRating(){
        console.log(`${this.name} has a rating of ${this.rating[this.name]}`);
    }
}

var movie = new Movie("Avengers Endgame");

//Here if we call the setInterval without the bind,setInterval(movie.getMovieRating,5000);
//it will throw error as the context will be lost and inside the getMovieRating function this will
//point to the window. Using bind return a new function to which the context is set to movie object.
setTimeout(movie.getMovieRating.bind(movie),2000);

// Bind can also be used for cuurying.It is a concept of taking a function
// that accepts N arguments and turning it into a chain series N functions
//each taking 1 argument.

function multiply(a,b){
    return a*b;
};

var multiplyByTwo = multiply.bind(this,2);
console.log(multiplyByTwo(10))

