## webpack-practice: ex01

1. 프로젝트 생성

```bash
$ mkdir ex01
$ cd ex01
$ npm init -y
$ npm i -D webpack webpack-cli express
```

2. 프로젝트 구조

<pre>
/ex01
    |--- package.json
    |--- package-lock.json
    |--- node-modules
    |--- public
    |       |--- index.html
    |       |--- main.js
    |---src
    |       |--- index.js
    |       |--- App.js
    |--- dev-server.mjs
</pre>


3. scripts

```jason
{
  "name": "ex01",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node dev-server.mjs",
    "build": "npx webpack ./src/index.js -o ./public"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "^4.17.1",
    "webpack": "^5.45.1",
    "webpack-cli": "^4.7.2"
  }
}
```

4. 빌드하기

```bash
$ npx webpack ./src/index.js
```

./dist/main.js 로 번들링 됨

```bash
$ npx webpack ./src/index.js -o ./public
```

./public/main.js 로 번들링 됨


4. test server 실행

```bash
$ node dev-server.mjs
```

ES6 모듈로 실행(확장자를 .mjs로) 해야 함.

<br><br>
npm으로 설치했으면 npx로 실행
아니면 node로 실행