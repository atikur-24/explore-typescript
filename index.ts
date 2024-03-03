// Type Annotations:
interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

function printPersonInfo(person: Person): void {
    if (person.isStudent) {
        console.log(`${person.name} is a student.`);
    } else {
        console.log(`${person.name} is not a student.`);
    }
}

const examplePerson: Person = {
    name: "John",
    age: 25,
    isStudent: true,
};

printPersonInfo(examplePerson);
