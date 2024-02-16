var personname = "Neha Haneef";
//lowercase
console.log("lowercase:", personname.toLowerCase());
//uppercase
console.log("UPPERCASE:", personname.toUpperCase());
//titlecase
console.log("TitleCase:", personname.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
