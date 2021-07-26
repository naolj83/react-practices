import React from 'react';

export default function(){
    return (
        // html이 아님, React.createElement 다.
        // html 아니기 때문에 주석 x -> createElement가 되버림
        // div 로 감싸주는 이유는 하나로 리턴해야 하기 때문에(함수는 하나의 값만 리턴함) 
        <div>
            { /* {}안에는 자바스크립트 코드기 때문에 주석 가능*/ }   
            <h2>App01</h2>
            <p>JSX Tutorials - 특징 1: HTML과의 차이점</p>
            
            { /*
                1. 속성은 Camel Case
            */ }
            <input type='text' maxLength='10'></input>
            
            { /*
                2. Element는 꼭 닫혀야 한다.
                오류) <br>, <hr>, <input type='text'>, <img src=''>
            */ }
            <br/>
            <hr/>
            <img width='100px' src='https://media.vlpt.us/images/jini_eun/post/107f5cfb-e97c-4c4c-b997-06098062e5b3/image.png' />

            { /*
                3. 속성 이름은 DOM API 기반이다.
                <div id='box' class='box'></div>
                document.getElementById('box').className = 'box'
            */ }
            <div id='box' className='box'>
                box입니다.
            </div>

        </div>
    );
}

// <div>
//    <h2>App01</h2>
//    <p>JSX Tutorials - 특징 1: HTML과의 차이점</p>
// </div>
// 이렇게 바뀜 =>
// React.createElement("div", null, React.createElement("h2", null, "App01"), React.createElement("p", null, "JSX Tutorials - ..."));
// createElement("태그", 프로퍼티(속성), 자식)
// https://babeljs.io/repl 에서 react 코드로 변환시켜줌 참고~