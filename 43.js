var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var magicians = ["Merlin", "Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
var original_magicians = __spreadArray([], magicians, true);
var great_magicians = make_great(__spreadArray([], magicians, true));
console.log("Original magicians:");
show_magicians(original_magicians);
console.log("\nGreat magicians:");
show_magicians(great_magicians);
