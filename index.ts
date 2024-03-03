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

// Generics:
function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
}

const swappedNumbers = swap(5, 10);
console.log(`Swapped numbers: ${swappedNumbers[0]}, ${swappedNumbers[1]}`);

const swappedStrings = swap("hello", "world");
console.log(`Swapped strings: ${swappedStrings[0]}, ${swappedStrings[1]}`);
