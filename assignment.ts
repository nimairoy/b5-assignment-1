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