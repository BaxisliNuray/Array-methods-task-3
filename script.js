// Task1 element -in deyeri null ve undefined olmayanlari qaytar 

let data = [
  { name: 'daniel', age: 45 },
  { name: 'john', age: 34 },
  { name: 'robert', age: null },
  { name: 'jen', age: undefined },
  { name: null, age: undefined }
];
let result=data.filter((data)=>data.age!==undefined && data.age!==null && data.name!==null)
  console.log(result);




// Task 2 her telebenin pointini 30 bal artirin
const students = [
  { name: "Leyla", points: 500 },
  { name: "Akif", points: 500 },
  { name: "Fikret", points: 3000 },
  { name: "Rashad", points: 500 },
  { name: "Turkan", points: 1900 },
  { name: "Sabir", points: 1000 },
  { name: "Idris", points: 340 },
  { name: "Nijat", points: 940 },
  { name: "Ismet", points: 1780 },
];
// console.log(students[7]);
students.map((student) => {
  return student.points += 30;
})
console.log(students);



// Task 3
let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21']; // - isharesini / ile deyishin
let change = bdays.toString().replaceAll("-", "/").split(',')
console.log(change);



// Task4 butun regemlerini yuvarlaqlashdirin
let numbers = [1.5, 2.56, 5.1, 12.33];
let integer=numbers.map(number=>Math.round(number))
console.log(integer);




// Task 5 Verilmish stringdeki ededleri cemleyin --> reduce
const b = "5,4,3,2,1";
let ChangeArray = b.split(',').map(Number)

function sum(total, number) {
  return total + number
}
console.log(ChangeArray.reduce(sum));
