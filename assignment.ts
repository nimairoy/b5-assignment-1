

function formatString(input: string, toUpper: boolean = true ): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

console.log(formatString('Next Level Web Development Course'));
console.log(formatString('Bangladesh', true));
console.log(formatString('Bangladesh', false));





type Items = {
    title: string;
    rating: number;
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {

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






function concatenateArrays<T>(...arrays: T[][]): T[]{
    return  arrays.reduce((param1, param2) => param1.concat(param2), []);
}

const products1 = concatenateArrays(['Book', 'Pen', 'Watch'], ['Brush', 'Pest']);
console.log(products1);

const numbers = concatenateArrays([1, 2, 3], [4,5,6]);
console.log(numbers);






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





function processValue(value: string | number): number{
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }
  
  console.log('String Length is: ', processValue('Next Level Web Developer'));
  console.log('The Result is : ', processValue(50));





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





const delay = (ms : number) : Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function squareAsync(n: number): Promise<number> {
    if(n < 0){
        throw new Error("Nagetive number is not allowed");
    }
    await delay(1000);
    return n * n;
}

squareAsync(5)
.then(result => console.log("Square Number is : ", result))
.catch(err => console.error("ERROR :", err.message));