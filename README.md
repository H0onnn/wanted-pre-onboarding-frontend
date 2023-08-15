# 지원자 임정훈

> **원티드 프리온보딩 프론트엔드 과제전형** <br/> **개발기간: 2023.08.14 ~ 2023.08.15**

## 배포 주소

> **개발 버전** : (https://web-wanted-pre-onboarding-frontend-eu1k2lllc2s1v2.sel3.cloudtype.app/)) <br>

## 프로젝트 소개

원티드 프리온보딩 인턴십 프론트엔드 과제전형 구현을 위한 간단한 투두리스트 앱 입니다.

## 시작 가이드

### Requirements

프로젝트 시작을 위해 다음 모듈이 필요합니다.

- [Node.js 18.17.0](https://nodejs.org/ca/blog/release/v18.17.0/)
- [Npm 9.6.7](https://www.npmjs.com/package/npm/v/9.6.7)

### Installation

```bash
$ git clone https://github.com/H0onnn/wanted-pre-onboarding-frontend.git
$ cd wanted-pre-onboarding
```

#### Frontend

```
$ cd wanted-pre-onboarding
$ npm install
$ npm run start
```

---

## 기술 스택

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=Typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![emotion](https://img.shields.io/badge/Emotion-06B6D4?style=for-the-badge&logo=EmotionCSS&logoColor=white)
![ContextAPI](https://img.shields.io/badge/Context-0090f9?style=for-the-badge&logo=Context&logoColor=white)

---

## 화면 구성 📺

| 회원가입 페이지 | 로그인 페이지 |
|:--------------:|:-------------:|
| ![회원가입 이미지](https://github.com/H0onnn/wanted-pre-onboarding-frontend/assets/116232939/648ba4e5-8210-4ac1-9642-deaf6a110d5e) | ![로그인 이미지](https://github.com/H0onnn/wanted-pre-onboarding-frontend/assets/116232939/3953e565-67f5-43c9-b98f-5afe9c3737cc) |

| 투두리스트 페이지 |
|:-----------------:|
| <img src="https://github.com/H0onnn/wanted-pre-onboarding-frontend/assets/116232939/bd9f6ce1-5b56-44dd-8927-849e754f5fdc" width="480"> |

---

## 주요 기능

### 1. 회원가입 및 로그인

- Context와 JWT 토큰을 이용한 회원가입 및 로그인

### 2. Todo 추가

- 할 일 목록 추가 기능

### 3. Todo 수정 및 삭제

- 수정 버튼을 통한 목록 수정 기능
- 삭제 버튼을 통한 목록 삭제 기능

---

## 아키텍쳐

### 디렉토리 구조

```bash
wanted-pre-onboarding
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── api
│   │   ├── auth.ts
│   │   ├── axios.ts
│   │   └── todo.ts
│   ├── components
│   │   ├── UI
│   │   │   └── Button.tsx
│   │   ├── auth
│   │   │   ├── AuthFileds.tsx
│   │   │   └── AuthForm.tsx
│   │   └── todo
│   │       ├── TodoContainer.tsx
│   │       └── TodoItem.tsx
│   ├── constant
│   │   └── colors.ts
│   ├── context
│   │   ├── ToasterContext.tsx
│   │   ├── TodoContex.tsx
│   │   └── TokenContext.tsx
│   ├── hooks
│   │   ├── useAuthForm.ts
│   │   └── useValidation.ts
│   ├── index.css
│   ├── index.tsx
│   ├── layout
│   │   ├── Header.tsx
│   │   └── PageLayout.tsx
│   ├── pages
│   │   ├── auth
│   │   │   ├── SignInPage.tsx
│   │   │   └── SignUpPage.tsx
│   │   ├── home
│   │   │   └── Home.tsx
│   │   └── todos
│   │       └── TodoPage.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── routes.tsx
│   ├── setupTests.ts
│   └── types.d.ts
└── tsconfig.json
```
감사합니다!
