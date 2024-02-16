var guestinvited = ["Zendaya", "Moazzam", "Ammad", "Faizan", "Dua", "Tyla", "kaira"];
console.log("Due to space constraints, we can only invite two people");
while (guestinvited.length > 2) {
    var removedguest = guestinvited.pop();
    if (removedguest) {
        console.log("Sorry ".concat(removedguest, ", you are not invited to Dinner"));
    }
}
guestinvited.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you still are invited for Dinner.")); });
guestinvited.pop();
guestinvited.pop();
console.log(guestinvited);
