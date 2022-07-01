# 🎨 FrontEnd CheckList Gallery

<img src='https://user-images.githubusercontent.com/50083131/176611854-3a610f8b-8461-42d3-bdf3-ee2caf711c60.gif' width='700' />

> 누구나 자유롭게 재사용성을 고려한 JSX 컴포넌트를 설계하고, 전시하기 위한 플랫폼입니다.

<br>

**개발기간 220613 ~ 220701**

<br>

[🚀 여기서 확인하세요](https://github.com/FE-CheckList-Gallery/FE-CheckList-Gallery)

<br>

## Tech

**FrontEnd**

<div>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> 
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> 
<img src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> 
</div>
<div>
<img src="https://img.shields.io/badge/Next.js(Code Viewer)-000000?style=for-the-badge&logo=Next.js&logoColor=white"> 
</div>
<br>

[**BackEnd**](https://github.com/FE-CheckList-Gallery/FE-CheckList-Gallery-Server)

<div>
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white"> 
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"> 
<img src="https://img.shields.io/badge/EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white"> 
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"> 
<img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=white"> 
</div>

<br>

**구현된 기능**

- Github OAuth + JWT 기반 소셜로그인 & 회원가입
- Thumbnail, JSX 소스파일, Markdown 등 Multipart form을 통한 게시글 작성
- 작성자별, 태그 별 모아보기 기능
- 작성자별 게시물 관리
- 슬라이드식 게시물 전시
- [Iframe + Next.js를 이용한 코드파일 뷰어](https://github.com/FE-CheckList-Gallery/FE-CheckList-Gallery-Viewer)

그 외 [Wiki](https://github.com/FE-CheckList-Gallery/FE-CheckList-Gallery/wiki)에서 다양한 글들을 볼 수 있습니다!

<br>

## Member
<details>
<summary>
<a href="https://github.com/SeolJaeHyeok">설재혁</a>
</summary>
<div markdown="1">       
  
- API Instance 모듈 제작
- 공통 Component 제작
- Gallery work viewer(Carousel)
- 태그 및 작가별 모아보기 기능
- 작가별 작품 조회 및 삭제 기능
- Main Page 제작

</div>
</details>

<details>
<summary>
<a href="https://github.com/gomiseki">김주현</a>
</summary>
<div markdown="1">  
  
- BackEnd API 제작, 배포
- iframe 뷰어 제작, 배포
- Vite app initializing
- github OAuth 로그인
- Publish 페이지 제작
  
</div>
</details>
<details>
<summary>
<a href="https://github.com/ycs1m1yk">이혜성</a>
</summary>
<div markdown="1">       

- 사이드바 태그목록 컴포넌트 구현
- path alias 적용

</div>
</details>
<details>
<summary>
<a href="https://github.com/minsu2344">박민수</a>
</summary>
<div markdown="1">       

😎숨겨진 내용😎

</div>
</details>
<details>
<summary>
<a href="https://github.com/sori-sodong">김소리</a>
</summary>
<div markdown="1">       

😎숨겨진 내용😎

</div>
</details>

<br>

## Usage

- 첫 화면을 지나 갤러리에 입장할 수 있습니다.

- 갤러리에서는 상단 작가 목록과 좌측 태그를 클릭하여 게시물을 필터링할 수 있습니다.
<img src="https://user-images.githubusercontent.com/50083131/176616175-eeca18a2-f012-4006-b301-2807820db59d.png" width='700'> 

- 작품의 미리보기 이미지를 눌러 게시물을 확인할 수 있습니다.
<img src="https://user-images.githubusercontent.com/50083131/176828385-f43dac04-83a5-40c0-b9f5-d68d12523a96.png" width='700'>

- 우측 상단의 Login 버튼을 통해 Github 소셜계정으로 로그인할 수 있습니다.

- 로그인이 완료되면 게시물을 작성하고 관리할 수 있는 Publish, Edit 버튼이 새로 생성됩니다.
<img src="https://user-images.githubusercontent.com/50083131/176616527-18a5275a-5737-4442-abe6-26bc064501a1.png" width='700'> 

- Publish 페이지에서 JSX 소스코드를 업로드하여 작품을 전시할 수 있습니다.
<img src="https://user-images.githubusercontent.com/50083131/176616934-16f522f8-d997-414f-b57f-d15b952f382d.png" width='700'> 
