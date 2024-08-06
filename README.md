# React 2024 Project

- JS 기반의 React 도구를 사용한 Front-End Project

## React project 생성하기

- 현재 18.x 버전에서 프로젝트 생성하기
- 온라인 상에서 직접 도구를 실행하여 생성하기
- 프로젝트 이름은 전부 소문자

- `create-app-template` 를 사용하여 프로젝트 구조를 생성하기

```bash
npx create-react-app [project]
```

- `blank template` 를 사용하여 프로젝트 구조를 생성하기

```bash
npx create-react-app [project] --template=empty
```

- 17.x 이전 버전에서는 프로젝트 생성하기
- 도구 (create-react-app) 를 다운로드 받아 설치한 후 실행

```bash
npm install -g create-react-app
create-react-app [project]
```

### JS 배열의 복사

```js
const arr = [1, 2, 3, 4, 5, 6, 7];
const arr1 = arr;

const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2.push(arr[i]);
}

// 배열의 구조분해 깊은 복사
const arr3 = [...arr2]; //1
arr.forEach((arr) => arr3.push[arr]); //2
const arr4 = arr.map((arr) => arr); //3

// arr 배열을 arr5 로 깊은 복사를 한 후, 끝에 정수 10을 추가하라
const arr5 = [...arr, 10];
```
