# SSR Practice

## Set up

```bash
npm init
npm install express nodemon ts-node typescript
nodemon app.js
```

## Development Environment

```bash
npm run dev
```

## Memo

### index.html

```JavaScript
<script src="./src/main.js" type="module"></script>
```

* `type="module"` webpack 같은 번들링 도구 없이 ESM 사용

    @see: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#other_differences_between_modules_and_standard_scripts]

* ES2015(ES6) 모듈에는 동일 출처 정책(same-origin policy)이 적용되어 브라우저에서 파일에 직접 파일을 열면 CORS 에러가 발생한다. 로컬 서버에서 스크립트를 실행해야 한다.

    @see: [https://stackoverflow.com/questions/52919331/access-to-script-at-from-origin-null-has-been-blocked-by-cors-policy]

서버 사이드
entry point는 app.js
클라이언트 사이드
entry point는 main.js

모든 경로로 접근하면 serverRenderer를 통해 Routes 내용물을 그려줌.
serverRenderer의 script 태그는 csr을 위한 것.
렌더링이 완료된 다음에 브라우저에서 CSR을 실행할 수 있다.
serverRenderer의 html 코드가 서버의 응답으로 받아와서 그려짐
이후에 클라이언트 사이드 main.js가 실행될 때,
태그 #app innerHTML을 통해 pathname을 보고 Router 함수에서 매칭하는 컴포넌트를 가져옴

globalThis
server - global 객체
client - window 객체
