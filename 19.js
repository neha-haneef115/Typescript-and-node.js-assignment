var guestinvited = ["Saria", "Ammad", "Dua", "Tyla"];
console.log("Number of people invited to dinner: ".concat(guestinvited.length));
guestinvited.map(function (listofpeople) { return console.log("Dear ".concat(listofpeople, ", you are invited For Dinner today at our Home.")); });
