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

// Example usage:
const person = new Person("John Doe", 30, "123-45-6789");
console.log(person.getName()); // Outputs: John Doe
console.log(person.getAge());  // Outputs: 30
