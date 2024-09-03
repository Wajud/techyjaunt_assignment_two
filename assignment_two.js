const students = [
  {
    name: "Tola",
    age: 21,
    grade: "A",
  },
  {
    name: "Chika",
    age: 19,
    grade: "B",
  },
  {
    name: "Bolanle",
    age: 20,
    grade: "D",
  },
  {
    name: "Ezekiel",
    age: 22,
    grade: "E",
  },
  {
    name: "Mariam",
    age: 18,
    grade: "B",
  },
  {
    name: "Andrew",
    age: 22,
    grade: "A",
  },
  {
    name: "Hannah",
    age: 20,
    grade: "A",
  },
  {
    name: "Kazeem",
    age: 24,
    grade: "E",
  },
  {
    name: "Ifadola",
    age: 20,
    grade: "A",
  },
  {
    name: "Garuba",
    age: 23,
    grade: "C",
  },
  {
    name: "Adekunle",
    age: 20,
    grade: "F",
  },
  {
    name: "Alli",
    age: 22,
    grade: "D",
  },
  {
    name: "Elizabeth",
    age: 21,
    grade: "A",
  },
];

const filterByGrade = (inputArr, grade) => {
  const requiredStudents = inputArr.filter(
    (student) => student.grade.toLowerCase() === grade.toLowerCase()
  );
  return requiredStudents;
};

const averageAge = (studentArray) => {
  let totalAge = 0;
  studentArray.forEach((student) => (totalAge += student.age));
  const averageAge = totalAge / studentArray.length;
  return averageAge;
};

console.log(filterByGrade(students, "D"));
console.log(averageAge(students));
