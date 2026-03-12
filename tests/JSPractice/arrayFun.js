let num=[1,2,3];
let doubleNum=num.map((e) =>e*2);
console.log(doubleNum);


//fahrenheit to celsius f-32*5/9
let fahTemp=[32,68,84,100,104,212];

function fahToCel(fahTemp)
{
    return (fahTemp-32)*(5/9);
}

let celTemp=fahTemp.map(fahToCel);
console.log(celTemp);

//filter
let num1=[1,2,3,4,5,6,7,8,9,10]
    let evenNum=num1.filter((e)=>e%2===0);
    console.log(evenNum);

    let oddNum=num1.filter((e)=>e%2!==0);
    console.log(oddNum);


let employee=[
    {name:"John",age:30,gender:"male"},
    {name:"Peter",age:37,gender:"male"},
    {name:"Priya",age:25,gender:"female"},
    {name:"Bob",age:28,gender:"male"},
    {name:"Smita",age:45,gender:"female"},

]



let femaleEmpWithAgeAbove30=employee.filter((emp)=>
{
    return emp.gender==="female" && emp.age>30;
});
console.log(femaleEmpWithAgeAbove30);

let empWithAgeBelow30=employee.filter((emp)=>
{
    return (emp.gender==="female" || emp.gender==="male") && emp.age>20;
});
console.log(empWithAgeBelow30);

//Reduce
let numb2=[1,2,3,4,5,6];
let sum=numb2.reduce((acc,number)=>acc+number,0);
console.log(sum);

