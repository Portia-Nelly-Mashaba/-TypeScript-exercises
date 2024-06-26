class Person {
    // Define the properties
    name: string;
    age: number;
    private socialSecurityNumber: string;

    // Constructor to initialize the properties
    constructor(name: string, age: number, socialSecurityNumber: string) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }

    // Method to return the person's name
    getName(): string {
        return this.name;
    }

    // Method to return the person's age
    getAge(): number {
        return this.age;
    }
}

// Usage:
const person = new Person("Portia Mashaba", 32, "123-45-6789");
console.log(person.getName()); // Outputs: Portia Mashaba
console.log(person.getAge()); // Outputs: 32
