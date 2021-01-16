class Person {
     constructor(firstName = 'Anonymous', age = 0){
        this.firstName = firstName;
        this.age = age;
     }
     getGreeting(){
         return `Hello ${this.firstName}`;
     }
     getDescription(){
         return `${this.firstName} is ${this.age} year${this.plural()} old`;
     }
     plural(){
         if (this.age > 1 || this.age < 1) {
             return "s";
         } else {
             return "";
         }
     }
}

class Student extends Person {
    constructor(firstName, age, major){
        super(firstName, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
}

class Traveller extends Person {
    constructor(firstName, age, home){
        super(firstName, age);
        this.home = home;
    }
    getDescription(){
        let newDesc = super.getDescription();
        if (this.home) {
            newDesc = newDesc + ` Their home is ${this.home}`;
        }
        return newDesc;
    }
}

const me = new Student("Gareth", 24, "Interactive Media Design");
const other = new Traveller("Thomas", 26);

console.log(me);
console.log(other.getDescription());