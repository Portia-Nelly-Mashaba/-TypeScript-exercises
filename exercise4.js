var Person = /** @class */ (function () {
    // Constructor to initialize the properties
    function Person(name, age, socialSecurityNumber) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }
    // Method to return the person's name
    Person.prototype.getName = function () {
        return this.name;
    };
    // Method to return the person's age
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
// Usage:
var person = new Person("Portia Mashaba", 32, "123-45-6789");
console.log(person.getName()); // Outputs: Portia Mashaba
console.log(person.getAge()); // Outputs: 32
