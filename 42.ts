function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

let magicians: string[] = ["sam", "jhon", "karl", "meriln", "Teller"];

let great_magicians: string[] = make_great(magicians);

show_magicians(great_magicians);
