interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const teacher1: Teacher = {
    firstName: 'Marcellus',
    lastName: 'Wallace',
    fullTimeEmployee: true,
    location: 'Pulp Fiction',
    contract: false,
}

console.log(teacher1);

const director1: Directors = {
    firstName: 'Jody',
    lastName: 'Jones',
    location: 'Baby Boy',
    fullTimeEmployee: true,
    numberOfReports: 25,
  };

console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`;

console.log(printTeacher('john', 'chibadura'));

interface StudentClassInterface {
    firstName: string;
    lastName: string;
}

interface StudentClassConstructorInterface {
    new(firstName: string, lastName: string): StudentClassInterface; 
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

function createStudent(cStudent: StudentClassConstructorInterface, firstName: string, lastName: string): StudentClassInterface {
    return new cStudent(firstName, lastName);
}

const student1 = createStudent(StudentClass, 'jeff', 'koinange');
console.log(student1);
