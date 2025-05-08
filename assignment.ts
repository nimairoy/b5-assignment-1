// Problem 1
// Create a function that takes a string and an optional boolean.
// If the boolean is true or not provided, return the string in uppercase.
// If the boolean is false, return the string in lowercase.



function formatString(input: string, toUpper: boolean = true ): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

formatString('Next Level Web Development Course');
formatString('Bangladesh', true);
formatString('Bangladesh', false);


// Problem 2
// Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.

type Items = {
    title: string;
    rating: number;
}

function filterByRating(items: Items[]): Items[] {

   return items.filter(item => item.rating >= 4);
}

const courses : Items[] = [
    {
        title : 'MERN Stack Web Development Course',
        rating: 4.5
    },
    {
        title : 'Wordpress Web Design Course',
        rating: 3
    },
    {
        title : 'Graphics Design Course',
        rating: 4
    },
    {
        title : 'Digital Marketing Course',
        rating: 3.5
    },
]

const highRatedCourse = filterByRating(courses);
console.log(highRatedCourse);



// Problem 3
// Create a generic function that concatenates multiple arrays of the same type using rest parameters.

function concatenateArrays<T>(...arrays: T[][]): T[]{
    return  arrays.reduce((param1, param2) => param1.concat(param2), []);
}

const products1 = concatenateArrays(['Book', 'Pen', 'Watch'], ['Diary', 'Pencil', 'Eraser'], ['Brush', 'Pest']);
console.log(products1);

const numbers = concatenateArrays([1, 2, 3], [4, 2, 5, 2]);
console.log(numbers);



// Problem 4 
// Create a Vehicle class with private make and year properties and a getInfo() method.
// Create a Car class extending Vehicle, adding a private model property and a getModel() method.


class Vehicle {
    private make : string;
    private year : number

    constructor(make: string, year: number){
        this.make = make;
        this.year = year;
    }

    getInfo() : string{
        return `Make : ${this.make},  Year: ${this.year}`;
    }


}

class Car extends Vehicle {
    private model : string;
    constructor(make:string, year: number, model: string){
        super(make, year);
        this.model = model ;
    }

    getModel(): string {
        return this.model;
    }

}

const car1 = new Car('Toyota', 2018, 'Premeo F');
console.log(car1.getInfo());
console.log('Car model is :', car1.getModel());


// Problem 5 
// Write a function that takes a string | number and returns:
// The length if it's a string
// The number multiplied by 2 if it's a number

function processInput(input: string | number): number {
    if (typeof input === "string") {
      return input.length;
    } else {
      return input * 2;
    }
  }
  
  console.log('String Length is: ', processInput('Next Level Web Developer'));
  console.log('The Result is : ', processInput(50));


// Problem 6:
//  Define an interface Product and create a function to find the product
//  with the highest price in an array. If the array is empty, return null.

interface Product {
    name: string;
    price: number;
  }
  
function getMostExpensiveProduct(products: Product[]): Product | null {

    if(products.length === 0){
        return null;
    }else{
        return products.reduce((maxProduct, currentProduct) => currentProduct.price > maxProduct.price ? currentProduct : maxProduct);
    }
    
}

const products = [
  { name: "Pen", price: 80 },
  { name: "Notebook", price: 115 },
  { name: "Bag", price: 50 }
];

console.log('Most Expensive Product is:', getMostExpensiveProduct(products));


// problem 7 
// Define an enum Day for the days of the week.
// Create a function that returns "Weekday" or "Weekend" based on the input day.

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    switch(day){
        case Day.Friday:
            case Day.Saturday:
                return 'Weekend';
                default: return 'Weekday';
    }
  }

  console.log(getDayType(Day.Friday));
  console.log(getDayType(Day.Sunday));