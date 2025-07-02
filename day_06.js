// Object 관련 퀴즈 20개
//1.객체 구조분해 할당으로 name, age를 변수로 추출하세요.
const person = { name: "Ghost", age: 20 };
const { name, age } = person;
console.log(name);
console.log(age);

//2. Object.freeze로 객체를 동결하고, 값 변경 시도 후 결과를 출력하세요.
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2;
console.log(obj.a);

//3. 객체에서 값이 2 이상인 key만 배열로 추출하세요.
const obj3 = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj3).filter((key) => obj3[key] >= 2);
console.log(keys);

//4. 객체에서 특정 key만 제외한 새 객체를 만드세요. (key: 'b')
const obj4 = { a: 1, b: 2, c: 3 };
const newObj = Object.assign({}, obj4);
delete newObj.b;
console.log(newObj);

// 5. 객체의 모든 값이 짝수인지 판별하세요.
const obj5 = { a: 2, b: 4, c: 5 };
console.log(Object.values(obj5).every((value) => !(value % 2)));

// 6. 객체 obj를 깊은 복사(Deep Copy)하는 코드를 작성하세요.
const obj6 = { a: 1, b: { c: 2 } };
const newObj6 = JSON.parse(JSON.stringify(obj6));
console.log(obj6, newObj6);
console.log(obj6 === newObj6);

// 7. 객체 user에 getter/setter를 추가하여 age가 0~120 사이만 허용되게 하세요.
const user = { _age: 20 };
const newUser = {
  _age: 20,
  get age() {
    return this._age;
  },

  set age(value) {
    if (value >= 0 && value <= 120) {
      this._age = value;
    } else {
      console.log("나이는 0~120 사이만 가능합니다.");
    }
  },
};
console.log(newUser.age);
newUser.age = 121;
console.log(newUser.age);
newUser.age = 45;
console.log(newUser.age);

// 8. 생성자 함수로 User 객체를 만들고, 인스턴스를 생성하세요.
function User(name, age) {
  this.name = name;
  this.age = age;
}

const user8 = new User("jseo", 37);
console.log(user8);

// 9. 객체의 key를 기준으로 정렬된 배열을 만드세요.
const obj9 = { b: 2, a: 1, c: 3 };
const sortedKeys = Object.keys(obj9).sort();
console.log(sortedKeys);

// 10.객체 obj의 모든 값이 true인지 판별하세요.
const obj10 = { a: true, b: true, c: false };
const newObj10 = Object.values(obj10).every((value) => value === true);
console.log(newObj10);

// 11. users 배열에서 모든 사용자의 이름만 배열로 추출하세요.
const users = [
  { name: "Ghost", age: 20 },
  { name: "Irangi", age: 22 },
  { name: "Camel", age: 19 },
];

const names = users.map((user) => user.name);
console.log(names);

// 12. person 객체에 동적으로 key와 value를 추가하세요. (key: hobby, value: soccer)
const person12 = { name: "Ghost" };
person12.hobby = "soccer";
console.log(person12);

// 13. person 객체의 모든 key와 value를 "key:value" 형태의 문자열 배열로 만드세요.
const person13 = { name: "Ghost", age: 20 };
const newPerson13 = Object.entries(person13).map(
  ([key, value]) => `${key}:${value}`
);
console.log(newPerson13);

// 14.person 객체의 key와 value를 모두 대문자로 변환한 새 객체를 만드세요.
const person14 = { name: "Ghost", hobby: "soccer" };
const newPerson14 = Object.entries(person14).reduce((acc, [key, value]) => {
  acc[key.toUpperCase()] = value.toUpperCase();
  return acc;
}, {});
console.log(newPerson14);

//15. 객체의 모든 값이 숫자인지 true/false로 판별하세요.
const obj15 = { a: 1, b: 2, c: 3 };
const newObj15 = Object.values(obj15).every(
  (value) => typeof value === "number"
);
console.log(newObj15);

//16. 객체 person에서 name 속성의 값을 출력하세요.
const person16 = { name: "Ghost", age: 20 };
console.log(person16.name);

//17. 객체 person에서 age 속성을 삭제하세요.
const person17 = { name: "Ghost", age: 20 };
delete person17.age;
console.log(person17);

// 18. 객체 person의 모든 값(value)만 배열로 출력하세요.
const person18 = { name: "Ghost", age: 20 };
console.log(Object.values(person18));

// 19. person에 'age' 속성이 있는지 true/false로 출력하세요.
const person19 = { name: "Ghost", age: 20 };
console.log("age" in person19);

// 20. 빈 객체 obj를 만들고, 동적으로 key와 value를 추가하세요.
const obj20 = {};
obj20["key"] = "value";
