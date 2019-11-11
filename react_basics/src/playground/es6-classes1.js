class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(S) old.`
    }
}


class Student extends Person {
    constructor(name, age, major = 'Default'){
        super(name, age);
        this.major = major;
    }
    getInformation() {
        let description = super.getDesrcription();
        description += `Major is ${this.major}`;

        return description
    }
}

const student1 = new Student('Peris', 17, 'Photography');
console.log(student1);

class Traveller extends Person{
    constructor(name, age, homeLocation = 'Toronto'){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    goHome() {
        let travelPlan = super.getDescription();
        travelPlan += ` She will be going back to ${this.homeLocation} for christmass.`;

        return travelPlan
    }
}

const traveller1 = new Traveller('Daisy', 24, 'Kisii')
console.log(traveller1);

console.log(traveller1.goHome());