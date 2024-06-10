// 45.	Cars: Write a function that stores information about a car in a Object. 
//      The function should always receive a manufacturer and a model name. 
//      It should then accept an arbitrary number of keyword arguments. 
//      Call the function with the required information and two other name-value pairs, 
//      such as a color or an optional feature. Print the Object that’s returned to make sure 
//      all the information was stored correctly.

function aboutCars(Manufacturer:string,modleName:string,...otherFeature:{[keyName:string]:any}[]){
    let cars:{
        Manufacturer:string,
        ModleName:string,
        OtherFeature:object,
    } = {Manufacturer:Manufacturer,
        ModleName:modleName,
        ...Object.assign({},...otherFeature),}
    
    return cars
};

console.log("\n");

let information=aboutCars("suzuki","swift",{color:"silver"},{otherOption:["Safty Air Bag","Bulit Proff","A.I system"]});
console.log(information),
console.log("----------------------------------------------------------------------------");

let information2=aboutCars("honda","vizt");
console.log(information2),
console.log("----------------------------------------------------------------------------");

let information3=aboutCars("suzuki","cultus",{Color:"black"});
console.log(information3);


