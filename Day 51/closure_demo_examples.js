// example 1
let arr = [1, 2, 3, 4, 5, 6, 7];

function inArray(arr) {
  return (x) => arr.includes(x);
}
function inBetween(start, end) {
  return (x) => x >= start && x <= end;
}

console.group("example 1");
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
console.groupEnd();

// example 2
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(key) {
  return (user1, user2) => (user1[key] > user2[key] ? 1 : -1);
}

console.group("example 2");
console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));
console.groupEnd();
