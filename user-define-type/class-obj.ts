{
    // class => propertise,constractor, method
    class User{ 
        userName:string;
        age:number

        constructor(userName:string, age:number){
            this.userName = userName,
            this.age = age
        }

        display(){
            console.log(`my name is ${this.userName} and my age ${this.age}`);
        }
    }

    const user1 = new User("mehedi", 24);
    user1.display();
}