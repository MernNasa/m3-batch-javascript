//oops in any language

// terms
// 1. class --- blue print
// 2. object --- new
// 3. properties
// 4. methods
// 5. constructor
// 6. this & super

// pillers
// 1. inheritance
// 2. polymorphism
// 3. encapsulation
// 4. abstraction




// class Human{
//     name;
//     age;
//     gender;
//     girlfriend;
//     boyfriend;

//     constructor(a,b,c,d){
//         this.name=a;
//         this.age=b;
//         this.gender=c;
//         if(c==="female"){
//             this.boyfriend=d
//         }
//         else{
//             this.girlfriend=d
//         }
//      }
// }
// const c1=new Human("rahul",24,"male","sheela")
// const c2=new Human("sundari",24,"female","love")
// console.log(c1.girlfriend)
// console.log(c2.girlfriend)
//! methods in class

// class Car{
//    static price=300000
//    static start(){
//         console.log(this.price)
//         console.log("car started")
//     }
//     static stop(){
//         console.log("car stoped")
//     }
//     horn(){
//         console.log(Car.price)
//         console.log("car horned")
//     }
// }

// Car.start()
// Car.horn()
// Car.stop()
// const c1=new Car()
// c1.horn()

// console.log(Car.price)


// types of methods
// 1. static methods (className)
// 2, non-static methods (object reference)

// types of properties
// 1. static prorperties (className)
// 2. non-static properties (this keyword)



// inside the class where can i use javascript code


//  class Demo{
//   name="abc"
// }

// 1.inheritance

class Parent{
    money=30000
    mobile(){
        console.log("parent mobile")
    }
    static debits(){
        console.log("parent loan")
    }
}

class Child extends Parent{

}

// const c1=new Child()
// console.log(c1.money)
// c1.mobile()
Parent.debits()
Child.debits()