# 02 SSR Practice

## Set up

```bash
npm init
npm install express nodemon ts-node typescript
npm run dev
```

## Note

### index.html

```JavaScript
<script src="./src/main.js" type="module"></script>
```

* `type="module"` webpack 같은 번들링 도구 없이 ESM 사용

    @see: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#other_differences_between_modules_and_standard_scripts]

* ES2015(ES6) 모듈에는 동일 출처 정책(same-origin policy)이 적용되어 브라우저에서 파일에 직접 파일을 열면 CORS 에러가 발생한다. 로컬 서버에서 스크립트를 실행해야 한다.

    @see: [https://stackoverflow.com/questions/52919331/access-to-script-at-from-origin-null-has-been-blocked-by-cors-policy]
