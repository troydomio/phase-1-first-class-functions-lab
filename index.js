// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
 
// function returnFirstTwoDrivers(array){ 
//     const aFunction= array.slice(0,2)
//     return aFunction;
// }

let returnFirstTwoDrivers= array =>{ 
    const aFunction= array.slice(0,2)
    return aFunction;
}

// let returnLastTwoDrivers = (array) => {
//     const aFunction= array.slice(2)
//     return aFunction;
// }

let returnLastTwoDrivers = array => {
    const aFunction = array.slice(2)
    return aFunction;
}


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


let createFareMultiplier = n1 => 
  function(n2) {return n2 * n1};

let fareDoubler = createFareMultiplier(2);

let fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = (array, cb ) => {
    if (cb === returnFirstTwoDrivers){
        return cb(array);
    } else if (cb === returnLastTwoDrivers){
        return cb(array);
    }
}






console.log(returnFirstTwoDrivers(drivers))




