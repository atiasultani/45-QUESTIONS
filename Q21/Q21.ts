
// 21.	They think of something you could store in a TypeScript Object. 
//      Write a program that creates Objects containing these items.

//interface is use to define keys value type at once time for different object.
interface items{
    Name:string,
    Color:string,
    Modle:number,
    Camera:number,
    isNew?:boolean,                    
    Others:any,
    Price:number,
}
let mobiles={
    Name:"Samsung Mobile",
    Color:"Blue",
    Modle:2019,
    Camera:30,
    isNew: true,
    Other:"import to china assamble in karachi",
    Price:20000
};
let car={
    
    Name:"Swift",
    Color:"sliver",
    Modle:2022,
    Camera:40,
    isNew:true,
    Others:"having fornt & back security camera,security alaram and navigation screen",
    Price:4500000,
}
console.log(mobiles,car);
