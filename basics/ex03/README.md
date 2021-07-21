## ex03: 애플리케이션 분리 2 - ES6 모듈 시스템
1. 프로젝트 생성

```bash
$ mkdir ex03
$ cd ex03
$ npm init -y
$ npm i -D express
```

2. 프로젝트 디렉토리

<pre>
/ex01
    |--- package.json
    |--- package-lock.json
    |--- node-modules
    |--- public
    |       |--- index.html
    |       |--- index.js
    |       |--- App.js
    |--- dev-server
</pre>

3. scripts

```json
{
  "name": "ex01",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "node dev-server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "^4.17.1"
  }
}
```

4. 애플리케이션 작성    

[index.js]
```javascript
document.getElementById('root').appendChild(App());
```

[App.js]
```javascript
const App = function(){
    const app = document.createElement('h1');
    app.textContent = 'Hello World';
    return app;
}
```

5. 테스트(테스트 서버 실행)

```bash
$ npm start
```

6. 결론
