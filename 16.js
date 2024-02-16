var guestinvited = ["Saria", "Ammad", "Dua", "Tyla"];
var cannotattend = "Saria";
console.log(cannotattend + " ", "cannot attend the dinner. ");
var newguest = "Moazzam";
guestinvited[guestinvited.indexOf(cannotattend)] = newguest;
guestinvited.map(function (items) {
    return console.log("Dear ".concat(items, ", I found a bigger table now i am inviting more people"));
});
var furtherguest1 = "Zendaya";
guestinvited.unshift(furtherguest1);
console.log(furtherguest1);
var furtherguest2 = "Faizan";
var furtherindex2 = guestinvited.length / 3;
guestinvited.splice(furtherindex2 + 2, 0, furtherguest2);
console.log(furtherguest2);
console.log(guestinvited);
guestinvited.push("kaira");
console.log(guestinvited);
guestinvited.map(function (items) { return console.log("Dear ".concat(items, ", you are invited for Dinner today")); });
