// Problem 1

function formatString(input: string, toUpper: boolean = true ): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

formatString('Next Level Web Development Course');
formatString('Bangladesh', true);
formatString('Bangladesh', false);