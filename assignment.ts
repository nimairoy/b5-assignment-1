// Problem 1

function formatString(input: string, toUpper: boolean = true ): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

formatString('Next Level Web Development Course');
formatString('Bangladesh', true);
formatString('Bangladesh', false);


// Problem 2

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
function concatenateArrays<T>(...arrays: T[][]): T[]{
    return  arrays.reduce((param1, param2) => param1.concat(param2), []);
}

const products = concatenateArrays(['Book', 'Pen', 'Watch'], ['Diary', 'Pencil', 'Eraser'], ['Brush', 'Pest']);
console.log(products);

const numbers = concatenateArrays([1, 2, 3], [4, 2, 5, 2]);
console.log(numbers);