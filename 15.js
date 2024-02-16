var guestinvited = ["Saria", "Ammad", "Dua", "Tyla"];
var cannotattend = "Saria";
console.log(cannotattend + " ", "cannot attend the dinner. ");
var newguest = "Moazzam";
guestinvited[guestinvited.indexOf(cannotattend)] = newguest;
guestinvited.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited for Dinner."));
});
