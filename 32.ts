let current_users: string[] = ["user5711@", "user5722!", "user5733#", "user5744$", "user5755%"];
let new_users: string[] = ["user5711@", "user5722!", "newUser123", "user5766&", "user5777*"];

new_users.forEach(new_username => {
    if (current_users.some(current_username => current_username.toLowerCase() === new_username.toLowerCase())) {
        console.log(`The username '${new_username}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_username}' is available.`);
    }
});
