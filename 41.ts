function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

let magicians: string[] =["sam", "jhon", "karl", "meriln", "Teller"];

show_magicians(magicians);
