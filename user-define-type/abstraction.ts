{
    // abstraction

    abstract class User {
        name:string;
        age:number

        constructor(name:string,age:number){
            this.name = name,
            this.age = age
        }

        abstract display():void;
    }

    abstract class Student extends User{
        studentId: number

        constructor(name:string, age:number, studentId:number){
            super(name, age)
            this.studentId= studentId;
        }

        displayStudent():void {
            console.log(`she is a student. her name ${this.name},age ${this.age} and her student id is ${this.displayStudent}`);
        }
    }

    // const user1= new User('aisha',9);
    // user1.display();

    // const student1 = new Student('nurmoni', 15,52);
    // student1.displayStudent();



    // 
}