


const form = document.querySelector("#form");
const btn = document.querySelector("#btn");

const username = document.querySelector("#username")
const checkbox = document.querySelector("#checkbox")

const country = document.querySelector("#country")
const passwordHint = document.querySelector("#password-hint")
const password = document.querySelector("#password")

function validuser(username){

    // **trim** exrta space ko kAT deta hai 

     if (username.value.trim().length=== 0){   
        console.log("enter you name");
        return false
    }
    return true
}

function validpassword(password){
  if (username.value.trim().length=== 8){   
        console.log("enter you name");
        return false
    }
    return true
}



form.addEventListener("submit", (e) => {
    e.preventDefault();

    // const password= document.querySelector("#password")

   const isusernamevalid = validuser(username);
   const ispasswordvalid = validuser(password);

   if(isusernamevalid){
    document.querySelector("h1").classList.remove("hidden");






    // const email = document.querySelector("#email").value;

    // console.log({ name: username.value, password: password.value, email });
});

username.addEventListener("input", (e) => {
    console.log(username.value)
})


checkbox.addEventListener("change", (e) => {
    console.log(checkbox.checked);
})


country.addEventListener("input", (e) => {
    console.log(country.value)
})


password.addEventListener("focus", (e) => {
    passwordHint.classList.add("hidden")

})


password.addEventListener("blur", (e) => {
    passwordHint.classList.remove("hidden")

})


