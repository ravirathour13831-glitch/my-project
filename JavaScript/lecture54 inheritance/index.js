class customer {



    constructor(name, email , cost) {

        this.name = name;
        this.email = email;
       this.cost = [cost]

    }
}

class premiumuser extends customer {

constructor(name , email ,cost){
    super(name , email,cost )

}

    cost1 = []

    
}

let p = new premiumuser("ravi", "ravi@123" , 34);

console.log(p);