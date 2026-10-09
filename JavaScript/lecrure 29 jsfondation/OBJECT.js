const user =  {
    name : "ravi",
    role : 'student'
}
console.log(Object.keys(user))
console.log(Object.values(user))



const profile =
{
    name: "laptop", 
    price :442453,
    role : "phone"
} 
console.log(profile["price"])

// console.log(profile.name)
profile.name = "android"
// profile.othername = "android"
// console.log(Object.values(profile))
// const name = profile.name;
// const price = profile.price;
// const role = profile.role;
const {name,price,role} = profile
console.log(name)
console.log(price)
console.log(role)





