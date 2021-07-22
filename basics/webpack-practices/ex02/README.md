## webpack-practice: ex02

1. 프로젝트 생성

```bash
$ mkdir ex02
$ cd ex02
$ npm init -y
$ npm i -D webpack webpack-cli express
```

2. 프로젝트 구조

<pre>
/ex02
    |--- package.json
    |--- package-lock.json
    |--- node-modules
    |--- public
    |       |--- index.html
    |       |--- bundle.js
    |---src
    |       |--- index.js
    |       |--- App.js
    |--- webpack.config.js  [webpack 설정 파일]
    |--- dev-server.mjs
</pre>


3. webpack.config.js

```jason
const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    }
}
```

4. 빌드하기

```bash
$ npx webpack
```

webpack.config.js의 output 섹션에 지정된 ./public/bundle.js로 번들링 됨.


5. test server 실행

```bash
$ node dev-server.mjs
```

ES6 모듈로 실행(확장자를 .mjs로) 해야 함.

<br><br>
npm으로 설치했으면 npx로 실행
아니면 node로 실행