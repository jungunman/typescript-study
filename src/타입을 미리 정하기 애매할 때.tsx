const 회원 : string | number = "123";

const 회원들 : (string | number)[] = [1,'2',3];

const 회원정보 : {나이 : string | number} = {나이 : 28};

/**
 * 숙제1) 다음 변수 4개에 타입을 지정해봅시다
 * let user = 'kim';
let age = undefined;
let married = false; 
let 철수 = [user, age, married];
 */

let user :string= 'kim';
let 나이 : undefined | number = undefined;
let married : boolean = false; 
let 철수 : (string|undefined|number|boolean)[] = [user, age, married];


/**(숙제2) 학교라는 변수에 타입지정해보십시오.
 * let 학교 = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]
 */

let 학교 :
{score : (number|boolean)[],
teacher : string,
friend : string|string[]}=
{
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]