let usernames: string[] = ["admin", "shanzey", "maliha", "basir", "hamza"];

if (usernames.length > 0) {
    usernames.forEach(username => {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    });
} else {
    console.log("We need to find some users!");
}
usernames = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
}
