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

// class Parent{
//     money=30000
//     mobile(){
//         console.log("parent mobile")
//     }
//     static debits(){
//         console.log("parent loan")
//     }
// }

// class Child extends Parent{

// }

// const c1=new Child()
// console.log(c1.money)
// c1.mobile()
// Parent.debits()
// Child.debits()


// class Parent{
   
//     constructor(){
       
//     }

// }

// class Child extends Parent {
//     name;
//     age;
//     money;

//     constructor(name,age,money){
//         super()
//       this.name=name;
//       this.age=age;
//       this.money=money;
      
//     }

//     printDetails(){
//         console.log("Name :"+this.name)
//         console.log("Age :"+this.age)
//         console.log("Money :"+this.money)
//     }

    
// }

// const c1=new Child("a",23,4000)
// c1.printDetails()




// class Human{
    
//     speak(){
//         console.log("human you can speak")
//     }

//     walk(){
//         console.log("human you can walk")
//     }
// }

// class Sundari extends Human{
//     // method overridding (run time Polymorphism)
//     speak(){
//         console.log("i am speaking")
//     }
//     walk(){
//         console.log("i am walking")
//     }
// }

// const s1= new Sundari()
// s1.speak()

// const h1= new Human()
// h1.speak()

// class Calculator{
//     // add(x,y){
//     //     console.log(x+y)
//     // }
//     // add(x,y,z){
//     //     console.log(x+y+z)
//     // }

//     add(...args){
//         if(args.length===2){
//             console.log(args[0]+args[1])
//         }
//         else if(args.length === 3){
//             console.log(args[0]+args[1]+args[2])
//         }
//         else{
//             console.log(args.reduce((acc,ele)=>acc+ele))
//         }
//     }

// }

// const c1= new Calculator()
// c1.add(30,40)
// c1.add(30,40,40)
// c1.add(30,40,40,20,60,50)

// class Bank{
//     #balance=1000

//     getbalance(){
//         console.log(this.#balance)
//     }
//     deposit(money){
//         this.#balance=this.#balance+money
//     }

// }

// const b1=new Bank()
// b1.deposit(5000)
// b1.getbalance()



class CoffeeMachine{

    #boilWater(){
        console.log("boling water")
    }
    #boilmilk(){
        console.log("milk is boiling")
    }
    makeCoffee(type){
        this.#boilWater()
        this.#boilmilk()
        if(type==="cold coffee"){
        console.log(type +" coffee is ready")
        }
    }
}

const c1= new CoffeeMachine()
c1.makeCoffee("cold coffee")
