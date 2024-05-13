# 🌸 Message Bloom

![MessageBloom_Service소개](https://github.com/6Team-Project/MessageBloom/assets/162412765/5b808411-434e-4b52-9d80-0939d9cd7a16)

- 배포 링크: [Message Bloom](https://message-bloom.vercel.app/)

## 프로젝트 소개

- Message Bloom은 온라인 롤링페이퍼 서비스 입니다.

## 🧑‍💻 개발자 소개 (Sprint 6기 Part2 6팀)

| <img src="https://avatars.githubusercontent.com/u/162412765?v=4"> | <img src="https://avatars.githubusercontent.com/u/115947715?v=4"> | <img src="https://avatars.githubusercontent.com/u/97877328?v=4"> | <img src="https://avatars.githubusercontent.com/u/113000290?v=4"> | <img src="https://avatars.githubusercontent.com/u/123517278?v=4"> |
| :---------------------------------------------------------------: | :---------------------------------------------------------------: | :--------------------------------------------------------------: | :---------------------------------------------------------------: | :---------------------------------------------------------------: |
|           [FE_6기 김진윤](https://github.com/EveryYawm)           |          [FE_6기 오채연](https://github.com/oh-chaeyeon)          |           [FE_6기 원찬희](https://github.com/wch2208)            |           [FE_6기 정우기](https://github.com/WooGi1020)           |         [FE_6기 조현지](https://github.com/cindycho0423)          |

### 김진윤

- main 페이지, 공통 컴포넌트 제작

### 오채연

- header, emoji 제작

### 원찬희

- global font 시스템 초기 세팅
- post 페이지, post message 페이지 UI 제작
- 유효성 검사 기능
- form 각 요소 모듈화하여 최적화
- 생성하기 버튼 조건부 활성화 기능
- api post 통신
- Drop Down Menu 커스텀 컴포넌트 제작
- 로고 영역 이미지 마우스트래커 제작
- 커스텀훅으로 resize 이벤트 최적화

### 정우기

- 롤링페이퍼 페이지 제작

### 조현지

- 롤링페이퍼 리스트 페이지 제작

# 프로젝트 소개

롤링페이퍼를 웹사이트에서 작성하고 공유하는 서비스

## 주요 기능

- 롤링페이퍼 추가/제거
  ![롤링페이퍼 추가 gif](src\assets\readme-gifs\gif_AddDeleteRollingPaper.gif)

- 롤링페이퍼에 메세지 추가/제거
  ![메세지 추가 gif](src\assets\readme-gifs\gif_AddDeleteMessage.gif)

- 공유 기능
  ![공유 기능 gif](src\assets\readme-gifs\gif_SharedFeatures.gif)

## 프로젝트 실행 방법

```

$ git clone https://github.com/6Team-Project/MessageBloom.git


$ yarn install


$ yarn start
```

# 프로젝트 구성

## ⚙️ 기술 스택

| 역할       | 종류   |
| ---------- | ------ |
| Frontend   | React  |
| Deployment | Vercel |

## 🛠 Tools

| Tools           | 종류               |
| --------------- | ------------------ |
| Package Manager | Yarn               |
| Styling         | SCSS               |
| Formatting      | ESLint, Prettier   |
| Data Fetching   | Axios              |
| Icons           | React-Icons        |
| Emoji Picker    | emoji-picker-react |
| Notification    | react-toastify     |
| Utility Library | lodash             |
| Form Management | react-hook-form    |

## 👥 Collaboration

| Collaboration   | 종류    |
| --------------- | ------- |
| Collaboration   | Discord |
|                 | Notion  |
| Version Control | GitHub  |

## Directory 구조

```
MESSAGEBLOOM/
├── node_modules/                 # 의존성 모듈
├── public/                       # 공개 폴더
├── src/                          # 소스 코드
│   ├── apis/                     # API 호출 관련
│   ├── assets/                   # 리소스 (이미지, 아이콘)
│   │   ├── icon/
│   │   ├── image/
│   │   ├── logo/
│   │   └── readme-gifs/
│   ├── components/               # 각 페이지 컴포넌트
│   │   ├── animation/
│   │   ├── commons/              # 공통 컴포넌트
│   │   ├── header/
│   │   ├── headerPost/
│   │   └── list-page/
│   ├── hooks/                    # 커스텀 훅
│   ├── layouts/                  # 레이아웃 컴포넌트
│   ├── pages/                    # 페이지 컴포넌트
│   │   ├── list-page/
│   │   ├── post-id/
│   │   ├── post-page/
│   │   └── NotFound.jsx
│   ├── styles/                   # 전역 스타일
│   ├── utils/                    # 유틸리티 함수
│   ├── App.jsx
│   ├── index.jsx
│   └── main.jsx
├── .env
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── package.json
├── README.md
└── yarn.lock

```

# 트러블 슈팅
