### JSX를 추가하는 것은 CSS 전처리기를 추가하는 것과 같다

자동화된 JSX 감시기 (in Production)

```shell
npx babel --watch src --out-dir . --presets react-app/prod
```

## React 툴체인

* `Create React App` 간단한 SPA Bolierplate Project
* `Next.js` Server Side Rendering를 지원하는 Node.js 웹사이트
* `Gatsby` 콘텐츠 지향 웹사이트 SSG
* `Neutrino` webpack의 장점과 React의 단순함과 미리 설정된 앱과 컴포넌트를 합친 것
* `Nx` 풀스택 모노레포 개발을 위한 도구, React, Next.js, Express 등 기본 지원
* `Parcel` React와 함께 사용하는 설정이 필요 없는 웹 앱 번들러
* `Razzle` Server Side Rendering 프레임워크로 설정이 필요 없지만 Next.js보다 다루기 쉽다

### key는 React가 DOM element를 식별하기 위해 사용하는 것이다

key를 index로 설정하는 것은 안티패턴

* map으로 순회하는 element 목록에 push하거나 remove했을 때 사이드 이슈가 발생할 수 있다.
