// let arr=[1,2,3,4]
//! modification methods
// 1. push
// 2. pop
// 3. unshift
// 4. shift
// 5. splice(position, delete count, new values)


// console.log(arr)
// arr.push(100)
// arr.push(200)
// arr.push(300,400,500)
// arr.pop()
// arr.unshift(100)
// arr.shift()
// arr.splice(1,0,"new value")
// console.log(arr)

// loops

// 1. foreach
// arr.forEach((ele,index,arr)=>{
//     console.log(arr)
// })

// const res=arr.forEach((ele,index,arr)=>{
//     return ele*2
// })
// console.log(res)

// 2. map

// arr.map((ele,index, arr)=>{
//     console.log(ele)
//     console.log(index)
//     console.log(arr)
// })

// const res=arr.map((ele,index,arr)=>{
//     console.log(ele)
// })
// console.log(res)

// filter
// console.log(arr)
// const res=arr.filter((ele,index,arr)=>{
//     return ele>=3
// })

// console.log(res)

// reduce

// const res=arr.reduce((acc,ele)=>acc+ele)
// console.log(res)


// let arr=[1,2,3,4,5,60]

// const res=arr.some((ele)=>ele>40)

// console.log(res)

// const result=arr.every((ele)=>ele>=2)
// console.log(result)


// let arr=[4,6,2,3,1,9,7,8,5]

// arr.sort((a,b)=>a-b) // ascending
// arr.sort((a,b)=>b-a) // descending
// console.log(arr)

// let arr=["rahul","rohit","rishika","krishna","mounika","sundari"]

// arr.sort((a,b)=>b.localeCompare(a))
// // arr.sort((a,b)=>a.localeCompare(b))
// console.log(arr)

// let arr=[1,2,3,4,5]
// arr.reverse()
// console.log(arr)    

// let arr=["a","b","c","d"]
// console.log(arr.join("-"))


let arr=["a","b","c","d","a"]

// console.log(arr[-1])
// console.log(arr.at(-1))
// console.log(arr.indexOf("b"))
// console.log(arr.lastIndexOf("a"))

//! write a js function to check a given elements is a dupicate or not in an array.
// input: [1,2,3,4,5,2],2 ------> 2 is a duplicate element
// input: [1,2,3,4,5,2],1 ------> 1 is not a duplicate element

//! write a js function to add the numbers in an array and return the sum.

// input: ["a","b",2,4,"10"]----> 16
function sumOfDigits(arr){
    // let sum=0
    // for(let ele of arr){
    //     if(Number(ele)){
    //         sum+=Number(ele)
    //     }
    // }
    // console.log(sum)

    return arr.reduce((acc,ele)=>Number(ele)?acc+Number(ele):0,0)
}
console.log(sumOfDigits(["a","b",2,4,"10"]))






