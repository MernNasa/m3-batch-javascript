let arr=[1,2,3,4]
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

const res=arr.reduce((acc,ele)=>acc+ele)
console.log(res)
