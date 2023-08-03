// Retrieve data from local storage
var data = localStorage.getItem("user");
console.log(data);
// // Parse the data into an object
// var myObject = JSON.parse(data);

// Access the property of the object
var myProperty = data.email;

console.log(myProperty);
// // Put the property in HTML
// document.getElementById("myElement").innerHTML = myProperty;
