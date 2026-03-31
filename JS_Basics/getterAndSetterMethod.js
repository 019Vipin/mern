/*
Getter:A getter is a method that is used to get (read) a property value
Setter:A setter is a method that is used to set (update) a property value
value.split(" "):Converts string → array:
*/
let person = {
    firstName : "Priyash",
    lastName : "Patel",
    // Getter
    get fullName()
    {
        return person.firstName + " " + person.lastName;
    },
    // Setter
    set fullName(value)
    {
        let name = value.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
    }
}

console.log(person.fullName);
person.fullName = "Khushi Patel";
console.log(person.fullName);
