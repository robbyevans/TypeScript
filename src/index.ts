//INTRODUCTION TO TYPESCRIPT


//:anotations
let age:number=20;

if(age<50){
  age+=10;  
}
console.log(age)

//functions

function handleClick(document:string):string{
  if(typeof document==="string"){
    return document
  }
  else{
    return ("undefined")
  }
}

//arrays

let numbers:number[] =[1,2,3,4,5]

let words:string[]=["hello","mandy","jean"]


//tuples (its an array containing both numbers and strings)

let array:[number,string]=[1,"robby"]

//enum

const enum Size{Small=1,Medium,Large}

let mySize:Size = Size.Medium;

console.log(mySize);


//functions

function calculateTax(income:number,taxYear=2022):number{
  
  if(taxYear<2023){
    return income*0.16; 
  }
  return income*0 
}
console.log(calculateTax(100_000,2025))


//OBJECTS

type Employee={
  readonly id:number,
  name:string,
  retire:(date:Date)=>void
}

let employee:Employee={
  id:1,
  name:"Robby",
  retire:(date:Date)=>{
    console.log(date)
  }
}


//union types

function kgsToLbs(weight:number|string):number{
  if(typeof weight==="number"){
    return weight*2.2
  }
  else{
    return parseInt(weight)*2.2
  }
}

console.log(kgsToLbs("10kgs"))

//Intersection types

type Dragable={
  drag:()=>void
};

type Resizeable={
  resize:()=>void
};

type UIWidget=Dragable&Resizeable

let textBox:UIWidget={
  drag:() =>{
    
  },
  resize:()=>{
     
  },
}


//literal types(can only contain specific values )

//example

type Quantity=50|100;
let quantity:Quantity=50;



type Metric='cm'|'inch';
let units:Metric='cm';

//Nullable types (to allow our functions take up null or undefined in absence of the 
//value without raising an error)

function greet(name:string|null|undefined){
  if(name){
    console.log(name.toUpperCase())
  }
  else{
    console.log("Holla Papi!")
  }
}
greet(null)

//optional chaining

type Customer={
  birthday:Date
};


function getCustomer(id:number):Customer |null|undefined{
  return id===0?null:{birthday:new Date()}
}

let customer=getCustomer(0);
  if(customer!==null && customer!==undefined)
    console.log(customer.birthday)


    //we can use the optional property access operator to replace the if statement
    //above i.e

    let newCustomer=getCustomer(0);
    //optional property access operator
      console.log(customer?.birthday)


      //this code above means the code is executed if we have a customer that neither null or undefined