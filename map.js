  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop

let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
};
console.log(results);


// Using map()

const multiplyByTwo = function (num) {
  return num * 2;
}
const mapResults = nums.map(multiplyByTwo);
console.log(mapResults)

// Simplified w/ map()

const simplified = nums.map(function(num) {return num * 2});
console.log(simplified);
 
// Simplfied w/ map() + arrow function

const arrow = nums.map(num => num * 2);
console.log(arrow);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

//My goal with the map  method is to iterate through the array of students 
//and return for each one an array containing their  name and their id. 

const studentsWithIds = students.map(student => [student.name, student.id])
console.log(studentsWithIds)


//Map Method Challenge

//You will use destructuring assignment to create two variables and you will assign them values from calling the map method on the students array. 
//The function provided to the map method can either be created within the map method or outside and passed in but in either case, it should use an arrow function. 
//The map method should return an array for each item in the students array and this new array should contain two items the items name value and the items results value.
//1. Create variables named john and rest using the destructuring assignment
//2. Assign the variables values from calling the map method on the students array
//3. Within the map method either use an arrow function or provide a function created outside of the map method (note this function should also be an arrow function)
//4. Log out the variable named: john to see its value
//5. Log out the variable named: rest to see its value

let studentss = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, maths: 77, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

// single line, used different variable names so as not to clash with those below.
let [John, ...Rest] = studentss.map(itm => [itm.name, itm.results]);
console.log(John);
console.log(Rest);

console.log('\n');
// Or create function first and use in map
const mapper = (itm) => [itm.name, itm.results];
let [john, ...rest] = studentss.map(mapper);
console.log(john);
console.log(rest);
