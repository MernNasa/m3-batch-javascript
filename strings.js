// let str="AZaz09"
// console.log(str.length)
// console.log(str.at(-1))
// console.log(str.charAt(-3))
// console.log(str[-1])

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// write a js program to convert a string to uppercase without using in built methods

// function convertUpperCase(str){
//         let res=""
//         for(let i=0;i<str.length;i++){
//             let assicCode=str.charCodeAt(i)
//             if(assicCode>=97 && assicCode<=122){
//                 res+=String.fromCharCode(assicCode-32)
//             }else{
//                 res+=str[i]
//             }
//         }
//         console.log(res)
// }
// convertUpperCase("abcdef")
// convertUpperCase("abASDFdef7863")

// console.log(str.charCodeAt(0))
// console.log(str.charCodeAt(1))
// console.log(str.charCodeAt(2))
// console.log(str.charCodeAt(3))
// console.log(str.charCodeAt(4))
// console.log(str.charCodeAt(5))
// console.log(String.fromCharCode(125))


// function convertLowerCase(str){
//         let res=""
//         for(let i=0;i<str.length;i++){
//             let assicCode=str.charCodeAt(i)
//             if(assicCode>=65 && assicCode<=90){
//                 res+=String.fromCharCode(assicCode+32)
//             }else{
//                 res+=str[i]
//             }
//         }
//         console.log(res)
// }
// convertLowerCase("ABCDEF")


// let str="javascript"
// console.log(str.substring(0,4))
// console.log(str.slice(0,4))
// console.log(str.substring(4))
// console.log(str.slice(4))
// console.log(str.substring(-2))
// console.log(str.slice(-2))

// console.log(str.substr(0,4))
// console.log(str.substr(4))
// console.log(str.substr(-2))

// let str="sundari "
// console.log(str.repeat(100))

// let sentence="hi priya, how are you priya. what are you doing priya. what you had breakfast priya. how is your health priya ❤️."
// console.log(sentence)

// let girls=["sheela","leela","mala","shakila","sharmila"]

// // console.log(sentence.replace("priya","sheela"))
// // console.log(sentence.replaceAll("priya","sheela"))
// for(let girl of girls){
//     console.log(sentence.replaceAll("priya",girl))
// }


// let str="abcdefg"
// console.log(str.includes("e"))

// console.log(str.startsWith("b"))

// console.log(str.endsWith("fa"))

// let str="my-king-queen"
// // console.log(str.search("z"))
// console.log(str.split("-"))

// let str=" abc "
// console.log("abc"===" a bc ".trim());


// let str="abcda"
// console.log(str.indexOf("a"))
// console.log(str.lastIndexOf("a"))


//! write a js program to check a given character is duplicate or not in a given string

// function checkDuplicate(str,char){
//     return str.indexOf(char)!==str.lastIndexOf(char)
// }
// console.log(checkDuplicate("abcda","b"))

let str="abc"
let str2="jdfgiudfhgi"
console.log(str.concat(str2))