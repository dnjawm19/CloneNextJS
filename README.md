## 소개

쇼케이스 페이지를 만들어봅시다.

링크: [https://nextjs.org/showcase](https://nextjs.org/showcase)

헤더, 푸터 등 화면 내에 보이는 모든 컴포넌트를 구현합니다.

## 사용 기술 스택

1. Typescript
2. Next.js

   프로젝트 폴더를 만들고 싶은 경로에 접근한 뒤, 아래와 같이 set up 합니다.

   ```bash
   $ npx create-next-app YOUR_APP_NAME --typescript
   ```

3. next/image

   이미지는 위 라이브러리를 사용해서만 보여주세요.

   문서링크: [https://nextjs.org/docs/basic-features/image-optimization](https://nextjs.org/docs/basic-features/image-optimization)

4. styled-components
5. inter-ui

   폰트 사용을 위한 라이브러리. 아래와 같이 설치합니다.

   1. `npm i inter-ui`
   2. pages/\_app.tsx 에 아래 코드를 추가합니다.

      ```tsx
      import "inter-ui/inter.css";
      ```

## Please consider this

1. 컴포넌트와 기타 모듈들의 구조에 대해서 고민해보세요. 어느 파일이 어느 위치에 가는 것이 가장 직관적이고 이해하기 쉬울지 고민해보세요.
2. 컴포넌트의 계층 구조에 대해서 고민해보세요. 원본 페이지의 html을 참고하면 도움이 될 수 있습니다.
3. semantic tag를 사용해보세요.
4. next/head를 사용해보세요.

   필요할만한 메타 정보가 무엇일지 고민해보고, 원본 페이지에는 어떤 메타 정보가 포함되어있는지 참고해보세요. 해당 메타정보들을 next/head를 사용해 구현해보세요.

5. 각 쇼케이스들의 데이터가 어떤 형식이어야할지 고민해보세요.
6. 이번 과제에서 구현하지 않는 페이지들에 대한 링크는, 원본 [nextjs.org](http://nextjs.org) 페이지의 링크로 연결해두세요.
7. 이미지(png, jpg, avif, ...)등은 원본 페이지의 것들을 모두 가져와서 사용해보세요.
8. 스타일링도 최대한 원본과 비슷하게 만들어주세요. 원본 페이지의 css를 참고해도 좋습니다.
9. 원본에서는 리스트가 선형적이지 않은데, 그냥 선형적으로 만들어주셔도 됩니다. 작은 카드랑 같은 크기의 카드가 1줄에 3개씩 표시되도록 만들어보세요.
