var current_users = ["user5711@", "user5722!", "user5733#", "user5744$", "user5755%"];
var new_users = ["user5711@", "user5722!", "newUser123", "user5766&", "user5777*"];
new_users.forEach(function (new_username) {
    if (current_users.some(function (current_username) { return current_username.toLowerCase() === new_username.toLowerCase(); })) {
        console.log("The username '".concat(new_username, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_username, "' is available."));
    }
});
