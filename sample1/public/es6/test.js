'use strict';
//es6 기능 : 블록 스코프 변수 선언
const sentence = [
    {
        subject : "A",
        verb : "is",
        object : "good",
    },
    {
        subject : "B",
        verb : "is",
        object : "bad",
    },
];

//es6 기능 : 객체 분해
function say({subject, verb, object}){
    //es6 기능 : 템플릿 문자열
    //따옴표가 아닌 백틱 1옆에 있는것
    console.log(`${subject} ${verb} ${object}`);
}

//es6 기능 : for ..of
for(let s of sentence){
    say(s);
}