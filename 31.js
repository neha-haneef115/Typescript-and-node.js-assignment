var usernames = ["admin", "shanzey", "maliha", "basir", "hamza"];
if (usernames.length > 0) {
    usernames.forEach(function (username) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    });
}
else {
    console.log("We need to find some users!");
}
// Removing all usernames from the array
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
