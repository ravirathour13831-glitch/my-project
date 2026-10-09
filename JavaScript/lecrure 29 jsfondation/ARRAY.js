

let color = ['green' , "orange" , "blue"  , "black"]

let name =     color.map(color =>{
    return color +1
    return color.toUpperCase()
})
console.log(name)

let price = [400,600,800,200,300]
let rateprice = price.map(price =>{
    return `$${price}`

})
console.log(rateprice)


const user = [ { name :"ravi" ,email :"ravi@123"},
    {name :"muskan" ,email :"muskan@123"}]
  
let p = user.map(function(user){
    return user.name
})
console.log(p)


// ==================================
// /////find method/////////////////
// //////////some method/////////////
// ==================================

let arr = [2, 5, 1, 7, 8];

console.log(arr.find(num => num > 6));
console.log(arr.some(num => num > 6));

/////////////// out put //////////////
7
true