// regex
const zipcode="16345"
const zipPattern=/^\d{5}$/

// console.log(zipPattern.test(zipcode))

// const mobilePattern=/^[6,7,8,9]\d{9}$/
// console.log(mobilePattern.test("9887786550"))

// const usernamePattern=/^[a,s].{4}$/
// console.log(usernamePattern.test("sbcde"))

// const pattern=/^[a,s]\D{2}[a,s]$/
// console.log(pattern.test("a@%s"))

const pattern=/^\w+(@gmail.com|@email.com)$/
console.log(pattern.test("abc123@amail.com"))