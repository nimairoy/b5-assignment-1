// Problem 1

function formatString(input: string, toUpper?: boolean): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

console.log(formatString('Next Level Web Development Course'));