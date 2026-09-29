# JAVASCRIPT NOTES


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
21. trimStart()-- it removes space character from starting
22. trimEnd() --- it removes space characters from ending
23. indexOf() ---- it returns first matching character index.if character is not present then it returns -1
24. lastIndexOf()--- it returns last matching character index.if character is not present then it returns -1 
25. concat() --- it add 2 or more strings into one string.

# Array Methods
1. push()---- it adds the element in the last index
2. pop() --- it removes the last index element
3. unshift()--- it adds an element in the starting index of an array
4. shift()--- it removes the first index element
5. splice() -- it can add or remove and update the array in any position.
6. forEach()-- it can iterate an array but it can't return any value
7. map() -- it can iterate an array , and as well as it can return an array.
8. filter()-- it filter an array based on a condition, which element satisfied the condition that element is returned. Note: filter always returns new array.
9. reduce()---reduce() is an array method used to process all elements of an array and produce one final value.
10. some()---- some() checks whether at least one element satisfies a condition.
11. every()---- every() checks whether all elements satisfy a condition.        

# some() vs every()
| Method    | Meaning      | Returns `true` when        |
| --------- | ------------ | -------------------------- |
| `some()`  | At least one | One or more elements match |
| `every()` | All          | Every element matches      |

12. sort()--- it arranges the array in ascending (a-b) or descending (b-a) order
Note: it modifies the original array

13. reverse()---- it reverses an array.it also modifies the original array.

14. join()--- it joins every element in an array with the specified character. and it returns a single string.


15. at()--- it helps to access an element in an array. it allows negative indexing also.

16. indexOf()-- it returns the first matching eelement index.

17. lastIndexOf()--- it returns the last matching element index.

18. includes()--- it helps to check the given element is present or not in an array.

19. slice()---- it helps to get a sub array from an original array. Note: it will not modified the original array

20. find()--- it returns the first matching element

21. flat()- it helps to reduce the nested arrays to single array

22. concat()--- it merges more than 2 arrays into single array.

23. flatMap()---> it combinesw the map and flat methods functionality.


24. toReversed()--- it return a new array with reversed value, without effecting the original array

25. toSorted() -- it returns a new array with sorted values, without effecting the original array.




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