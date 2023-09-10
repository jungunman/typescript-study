const firstName : string = "Jeong";
const age : number = 30;


const nameArr : string[] = ["Jeong","Kim","park"];
const dataObject : {name1 : string, age : number} 
                 = {name1 : "Jeong",age : 28};


console.log(firstName, age, nameArr, dataObject);

/**연습 풀이1 = 나의 소개*/
const myName : string = "Lucas";
const myAge : number = 28;


console.log(myName,myAge);


/**연습 풀이 2 = 내가 좋아하는 곡, 가수 Object 형식으로 담기*/
const favoriteSingerAndSong : {name : string, age : number, address : string} = {name : "IU", age: 31, address: "unknown" }

console.log(favoriteSingerAndSong);

/**다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.

let project = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
} */

let project : {member :string[], days : number, started : boolean} = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}

console.log(project);