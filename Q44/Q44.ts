// 44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//      The function should have one parameter that collects as many items as the function call provides, 
//      and it should print a summary of the sandwich that is being ordered. 
//      Call the function three times, using a different number of arguments each time.

let array:string[] = []
function sandwich(array:string[]){ 
    console.log("What you wants on a sandwich ?")
    console.log("Summary of Your Order")
    console.log(array);return array;};

    sandwich(["zinger","cheese","mayo"]);
    console.log("--------------------------------------------------------");
     sandwich(["tomato","cucmber","onion","shami kabab"]);
     console.log("--------------------------------------------------------");
     sandwich(["crispy chicken ","iceberg lettuce","cheese","mayo"]);
