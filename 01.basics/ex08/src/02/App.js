import React from 'react';

export default function(){
    /*
        리액트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다.
        오류:
        <h2>App02</h2>
        <p>JSX Tutorials - 특징 2: Single Root Node</p>

     */
    return (
        /*
        */
        <div>
            { /* */ }
            <h2>App02</h2>
            <p>JSX Tutorials - 특징 2: Single Root Node</p>
        </div>
    );
}

// { js code } -> 안에 자바스크립트 코드를 실행한다는 뜻

/*
import React, { Fragment } from 'react';

<Fragment>
<h2>App02</h2>
<p>JSX Tutorials - 특징 2: Single Root Node</p>
</Fragment>

<div> 대신 <Fragment> 사용 가능
*/