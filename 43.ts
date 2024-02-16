function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

let magicians: string[] = ["sam", "jhon", "karl", "meriln", "Teller"];
let original_magicians: string[] = [...magicians];
let great_magicians: string[] = make_great([...magicians]);

console.log("Original magicians:");
show_magicians(original_magicians);

console.log("\nGreat magicians:");
show_magicians(great_magicians);
