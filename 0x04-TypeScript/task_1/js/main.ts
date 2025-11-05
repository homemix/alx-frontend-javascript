interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Director extends Teacher{
    numberOfReports: number;
}
interface Directors extends Teacher{
    numberOfReports: number;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);

console.log(teacher3);

interface printTeacherFunction {
    (teacher: { firstName: string; lastName: string }): string;
}

const printTeacher: printTeacherFunction = ({firstName,lastName}) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// function printTeacher(firstName: string, lastName: string) {
//     return `${firstName.charAt(0)}. ${lastName}`;
// }


const result = printTeacher({ firstName: 'John', lastName: 'Doe' });
console.log(result);
