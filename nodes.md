# String Methods
1. length  --- it returns lenght of the string
2. at()  ---- it accepts positive and negative index
3. charAt() --- it accepts only positive index
4. charCodeAt() --- it returns assic value of a character
5. String.fromCharCode() --- it converts assic to chararacter
6. padStart() --- it hashed at starting
7. padEnd() -- it hashed at ending
8. toLowerCase() -- coverts to upper to lowercase
9. toUpperCase() -- coverts to lower to uppercase 
10. substring() --- it returns a sub string but it will not accept negative index
11. slice() --it returns a sub string but it will  accept negative index
12. repeat()--- it repeats the given string into n no of times
13. replace --- it replace only first matching character
14. replaceAll --- it replaces all the matching characters
15. includes --- it checks a given character is present or not in a string.
16. startsWith --- it checks a given string starts with the specified character or not
17. endsWtih --- it checks a given string ends with the specified character or not
18. search --- it checks the character , if it presents it returns index value of that character. if not it return -1.
19. split() -- it converts string into an array . it split the string based on the specified character.
20. trim()--- it removes extra space characters from strating and ending only.



# Most Important JavaScript Concepts

| #  | Concept                      | What you should learn                                                |
| -- | ---------------------------- | -------------------------------------------------------------------- |
| 1  | **Variables**                | `var`, `let`, `const`, scope                                         |
| 2  | **Data Types**               | String, Number, Boolean, `null`, `undefined`, Object, Symbol, BigInt |
| 3  | **Operators**                | Arithmetic, comparison, logical, ternary, `??`, `?.`                 |
| 4  | **Conditions**               | `if`, `else`, `switch`                                               |
| 5  | **Loops**                    | `for`, `while`, `do...while`, `for...of`, `for...in`                 |
| 6  | **Functions** ⭐              | Normal functions, parameters, return, arrow functions                |
| 7  | **Scope** ⭐                  | Global, function, block scope                                        |
| 8  | **Hoisting** ⭐               | Variable/function hoisting, TDZ                                      |
| 9  | **Arrays** ⭐                 | `map`, `filter`, `reduce`, `find`, `some`, `every`, `forEach`        |
| 10 | **Objects** ⭐                | Properties, methods, destructuring, dynamic properties               |
| 11 | **Destructuring**            | Array and object destructuring                                       |
| 12 | **Spread & Rest**            | `...` operator                                                       |
| 13 | **String Methods**           | `slice`, `substring`, `includes`, `replace`, `split`, `trim`         |
| 14 | **Array Methods** ⭐          | `push`, `pop`, `shift`, `unshift`, `splice`, `slice`                 |
| 15 | **DOM**                      | Selecting, modifying and creating HTML elements                      |
| 16 | **Events**                   | `click`, `input`, `submit`, event bubbling                           |
| 17 | **Callbacks** ⭐              | Functions passed as arguments                                        |
| 18 | **Higher-Order Functions** ⭐ | Functions accepting/returning functions                              |
| 19 | **Closures** ⭐⭐⭐             | Function + its lexical environment                                   |
| 20 | **`this` keyword** ⭐⭐⭐       | How `this` behaves in different contexts                             |
| 21 | **call/apply/bind**          | Controlling `this`                                                   |
| 22 | **Prototypes** ⭐⭐            | Prototype chain, inheritance                                         |
| 23 | **Classes**                  | Constructor, inheritance, `extends`, `super`                         |
| 24 | **Exception Handling**       | `try`, `catch`, `finally`, `throw`                                   |
| 25 | **Promises** ⭐⭐⭐             | Pending, fulfilled, rejected                                         |
| 26 | **Async/Await** ⭐⭐⭐          | Asynchronous programming                                             |
| 27 | **Event Loop** ⭐⭐⭐           | Call stack, Web APIs, callback queue, microtasks                     |
| 28 | **Fetch/API** ⭐⭐⭐            | GET, POST, headers, JSON, HTTP responses                             |
| 29 | **Modules** ⭐⭐               | `import`, `export`                                                   |
| 30 | **JSON**                     | `JSON.parse()`, `JSON.stringify()`                                   |
| 31 | **Regular Expressions**      | Pattern matching                                                     |
| 32 | **Local/Session Storage**    | Browser storage                                                      |
| 33 | **ES6+ Features** ⭐          | `let`, `const`, arrow functions, template literals, etc.             |
| 34 | **Optional Chaining**        | `user?.address?.city`                                                |
| 35 | **Nullish Coalescing**       | `value ?? defaultValue`                                              |




# Most Important JavaScript Topics for Experienced Candidates

| Priority | Concept                     | What you should know                                                 |
| -------- | --------------------------- | -------------------------------------------------------------------- |
| 🔥🔥🔥   | **Closures**                | Lexical scope, practical use cases, memory implications              |
| 🔥🔥🔥   | **Event Loop**              | Call stack, Web APIs, microtask vs macrotask queues                  |
| 🔥🔥🔥   | **Promises**                | Chaining, error handling, `Promise.all`, `allSettled`, `race`, `any` |
| 🔥🔥🔥   | **Async/Await**             | Sequential vs parallel execution, error handling                     |
| 🔥🔥🔥   | **`this`**                  | Different behavior in functions, arrow functions, objects, classes   |
| 🔥🔥🔥   | **Prototypes**              | Prototype chain, inheritance, `prototype` vs `__proto__`             |
| 🔥🔥🔥   | **Scope & Hoisting**        | Lexical environment, TDZ, `var`/`let`/`const`                        |
| 🔥🔥     | **Objects**                 | Property descriptors, cloning, references, immutability              |
| 🔥🔥     | **Array Methods**           | `map`, `filter`, `reduce`, `find`, `some`, `every`, etc.             |
| 🔥🔥     | **Functional JS**           | Higher-order functions, callbacks, pure functions                    |
| 🔥🔥     | **Classes**                 | Inheritance, private fields, static methods                          |
| 🔥🔥     | **Error Handling**          | Custom errors, async errors, propagation                             |
| 🔥🔥     | **Modules**                 | ESM vs CommonJS, imports/exports                                     |
| 🔥🔥     | **Memory**                  | Garbage collection, memory leaks, references                         |
| 🔥🔥     | **Deep/Shallow Copy**       | `structuredClone`, spread, `Object.assign`                           |
| 🔥       | **Debouncing & Throttling** | Performance and event handling                                       |
| 🔥       | **Generators/Iterators**    | `yield`, iteration protocols                                         |
| 🔥       | **WeakMap/WeakSet**         | Memory-sensitive data structures                                     |
| 🔥       | **Symbols**                 | Well-known symbols and custom object behavior                        |
| 🔥       | **Proxy/Reflect**           | Metaprogramming                                                      |
| 🔥       | **Web APIs**                | Fetch, Storage, DOM/events                                           |
| 🔥       | **Performance**             | Rendering, async operations, optimization                            |



# For a 3–5 year experienced interview
Level 1 — Core

Scope
Hoisting
Closures
this
Objects
Prototypes

Level 2 — Asynchronous JavaScript

Call stack
Event loop
Microtasks
Macrotasks
Promises
Async/await

Level 3 — Advanced Functions

Callback
Higher-order functions
Currying
IIFE
Function composition
call(), apply(), bind()

Level 4 — Advanced Objects

Prototype chain
Classes
Getters/setters
Property descriptors
Deep vs shallow copy
Immutability
Proxy/Reflect

Level 5 — Real-world JavaScript

API handling
Error handling
Debouncing/throttling
Memory leaks
Performance optimization
Modules
Testing
Design patterns