//Day 7 Task
// Task 1 --> Solving problems using array functions on rest countries data
console.log("Day 7 Tasks");
console.log("Task 1 --> Solving problems using array functions on rest countries data");
const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload= function(){
    var data=request.response;
    var result=JSON.parse(data);
    //console.log(result);
    // Printing conuntries in Asia continent
    var continent=result.filter((ele)=>ele.region==="Asia");
    console.log("Task 1 a) Countries in Continent of Asia ");
    var contiresult=continent.forEach((ele) =>console.log(`Country Name => ${ele.name.common}`));
    console.log("X-------------------X-------------------x--------------x");

    console.log("Task 1 b) Countries with a population of less than 2 lakhs ");
    var pop=result.filter((ele)=>ele.population<200000);
    var popresult=pop.forEach((ele)=>console.log(`Country Name - ${ele.name.common} / Population - ${ele.population}`));
    console.log("X-------------------X-------------------x--------------x");

    //Print the following details name, capital, flag, using forEach function
    console.log("Task 1 c) Printing name, capital, flag, using forEach function ");
    var nameresult=result.forEach((ele)=>console.log(`Country Name - ${ele.name.common} / Capital - ${ele.capital} / Country's Flag - ${ele.flags.png}`));
    console.log("X-------------------X-------------------x--------------x");

    //Print the total population of countries using reduce function
    console.log("Task 1 d) Total population of all countries ");
    var totalpop=[];
    for(let i=0;i<result.length;i++){
    totalpop.push(result[i].population);
}
    //console.log(totalpop);
    var sumpop=totalpop.reduce((ele,sum)=>{
        return sum+ele;
        });
    console.log(`Total Population of countries = ${sumpop}`);   
    console.log("X-------------------X-------------------x--------------x");

    //Print the country that uses US dollars as currency.
    console.log("Task 1 e) Print the country that uses US dollars as currency.");
    
    
    var res=result.filter((ele)=>{
        return ele.currencies;
      });
   var usresult=res.filter((ele)=>{return (ele.currencies.USD)});
   res.forEach((ele)=>console.log(`Country that uses US Dollar as currency - ${ele.name.common}`));
    
}

//sessions task
//map
// const arr=["apple","mangoe","orange"];
// const res= arr.map((ele)=>ele+'s');
// console.log(res);
// //filter
// const arr1=[4,2,3,5,1]
// const res1=arr1.filter((ele)=>ele>2).sort( );
// console.log(res1);
// //reduce
// const arr2=[1,2,3,4,5];
// const res2=arr2.reduce((value,ele)=>{
//     return value*ele
    
// });
// console.log(res2);
// //for each
// const arr3=["apple","mangoe","orange"].forEach((ele)=>console.log());
