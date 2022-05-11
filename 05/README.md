### JSX를 추가하는 것은 CSS 전처리기를 추가하는 것과 같다

자동화된 JSX 감시기 (in Production)

```shell
npx babel --watch src --out-dir . --presets react-app/prod
```

### React 툴체인

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

### props는 읽기 전용이다

# Docker

application을 패키징할 수 있는 툴이다

Docker Container

* js files, Node.js, npm, Dependencies, configuration, Assets

내 컴에서는 되는 데 너는 왜 안돼? -> Docker로 해결

## VMWare

* 운영체제 포함

---

App 1
Libraries
Binaries
GuestOS
---

Hypervisor
Infrastructure

## Container

---

App 1
Libraries
Binaries
---

Container Engine > Docker
Host OS
Infrastructure

### 컨테이너 만들기

1. Dockerfile
  애플리케이션을 구동하는데 필요한 파일들
  dependencies
  환경변수 설정
  run scripts 설정
2. Image
  실행 중인 어플리케이션의 스냅샷
  불변의 상태
  클래스 같은 느낌
3. Container
  Image를 이용하여 샌드박스처럼 고립된 환경에서 실행
  인스턴스 같은 느낌

### 이미지 배포

이미지 배포 = 이미지 공유
로컬에서 Container Registry에 Image를 PUSH/PULL
(사용할 서버에는 도커와 같은 컨테이너 엔진을 반드시 설치)

Container Registry
Public

* docker hub
* GitHub Packages

Private

* AWS
* Google Cloud
