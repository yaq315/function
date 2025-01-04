// console.log(typeof console.log)
//task1
function findSmallest([n1,n2,n3,n4]){

    console.log(`${n1,n2,n3,n4} is Smallest `)
}
findSmallest([30, 45, 60, 7])

//task2
function AlphabeticalOrder(text) {
    if (text.length <2);
    return text[1]+text[0]+text.slice(2)

}
console.log(AlphabeticalOrder("hello"))

//task3
function oddOrEven(n){
    if (n%2===0){
        console.log(`${n} even`)
    }
    else{
        console.log(`${n}  odd`) 
    }
    
}
oddOrEven(9)

//task4
let Number=[1,2,3,4,5,6,7,8,9]
let even=Number.filter(function (number){
    return number%2===0
}
)
console.log( even)

//task5
let  Number1=[-1, -3, -5, -4, -10, 0]
let Number2=Number1.reduce((sum,current)=>sum+current,0) 
function abselute(Number2) {
    return Math.abs(Number2)
}
console.log(abselute(Number2))

//mid 
//task1
let multi=1
function factorial(n){
for(let i=1;i<=n;i++){
 multi*=i

}
return multi
}
factorial(8)
console.log(multi)

//task2
function numbersOnly(array){
   return array.filter(item=>typeof item !=='string')
}
console.log((numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding'])))

//task3
function addUp(n){
let sum=0
for (let i=1;i<=n;i++){
    sum+=i
}
return sum
}
console.log(addUp(8))

//task4

function minMaxLengthAverage(array){
    let min=Math.min(...array);
    let max= Math.max(...array);
    let length=array.length;
    let sum=array.reduce((total,current)=>total+current,0);
    let average=sum/array.length;
    return [min,max,length,average]
}

console.log( minMaxLengthAverage([7, 13, 3, 77, 100]))


//task5

function convertToRoman(number) {
    let RomanNumeral =[
    {value:1000,numeral:"M"},
    {value:900,numeral:"CM"},
    {value:80,numeral:"LXXX"},
    {value:9,numeral:"IX"},
    ]
    let result=""
    for (i=0;i<RomanNumeral.length;i++){
        
         result+=RomanNumeral[i].numeral;  
            number-=RomanNumeral[i].value
     
    }


    return result
}
console.log(convertToRoman(1989))

//advanced
//task1
function countWords(text){
let word=text.trim().split(/\s+/)
return word
}

console.log(countWords('hello from CodingAcademy!'))


//task2
function matiple(array){
    return array.map(element => element*array.length)
}
console.log(matiple([4,2,5]))

//task3
function end(s1,s2){
    return s1.endsWith(s2)
}
console.log(end ("CodingSchool", "Ac"))

//task4
function repeat (text){
    let result="";
    for (let i=0;i<text.length;i++){
        result+=text[i] +text[i]
    }
    return result
}
console.log(repeat('Coding'))
//task5
function find(array,element){
    let index=array.indexOf(element)+1
    return index 
}
console.log(find(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'))


    // console.log(number.push(5))

// syntax -basic
// function sayHello(userName ,Age) {
    
//     if (Age<20){
//         console.log(`App is Not suitable for you`)
//     } else{
//         console.log(`hello ${userName} your Age ${Age}`);
//     }
// }
// sayHello("osama",38);
// sayHello("osama",40);
// sayHello("osama",18);



// function generateYears(start,end ,exclude){
// for (let i= start;i<=end ;i++){
//     if (i===exclude) {
//        continue
//     }
//     console.log(i)

// }
// }
// generateYears(2000,2025,2005)


// return
// function calc(num1,num2){
//     return num1+ num2;
// }
// // let result = calc(10,20)
// console.log (calc(10,20))


// function generateYears(start,end){
//     for (let i= start;i<=end ;i++){
//         console.log(i);
//         if (i===15) {
//      return `interruptting`

//         }
    
//     }
//     }
//     generateYears(10,20)


    // Default
//  function sayHello(userName ,Age ) {
//     // if(Age ===undefined){
//     //     Age="unkown"
//     // }
//     Age=Age || "unknown"
//     return `hello${userName} Your Age is ${Age}`;

// }  
// console.log (sayHello("osama",38));


//Rest 

// function calc(...numbers){
// let result =0
// for (let i=0;i<numbers.length;i++){
// console.log(numbers[i])
// result+= numbers[i]}
   
// }

// // console.log (calc(10,20,10,30,50))
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(18);