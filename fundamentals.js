//1.how to diclear variable using let and const
const fatherName = "Shofiqul Islam";
let season = "rainy";
season = "winter";

const student = {
  name: "sakib khan",
  age: 32,
};
const varName = "age";
console.log(student.age); // directly by property
console.log(student["age"]); // access via property name string
console.log(student[varName]); //access via property name in a variable
