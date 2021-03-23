// var car = { 
//     registrationNumber: "GA12345",
//     brand: "Toyota",

//     displayDetails: function(){
//         console.log(this.registrationNumber + " " + this.brand);
//     }
// }
// car.displayDetails(); // GA12345 Toyota

// var myCarDetails =  car.displayDetails;
// // myCarDetails();

// var myCarDetails = car.displayDetails.bind(car); 
// myCarDetails(); // GA12345 Toyota


///////////////////////////////////////////////////////////////

// var car = { 
//     registrationNumber: "GA12345",
//     brand: "Toyota",

//     displayDetails: function(ownerName){
//         console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
//     }
// }
// var myCarDetails = car.displayDetails.bind(car, "Vivian"); // Vivian, this is your car: GA12345 Toyota
// myCarDetails()

/////////////////////////////////////////////////////////////

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota"
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}

displayDetails.apply(car, ["Vivian"]); // Vivian, this is your car: GA12345 Toyota

displayDetails.call(car, "Vivian"); // Vivian, this is your car: GA12345 Toyota