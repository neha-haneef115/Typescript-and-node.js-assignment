function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var magicians = ["sam", "jhon", "karl", "meriln", "Teller"];
var great_magicians = make_great(magicians);
show_magicians(great_magicians);
