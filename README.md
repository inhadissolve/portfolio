# 김찬혁 포트폴리오 사이트

순수 HTML/CSS/JS로 만든 1페이지 포트폴리오입니다. 빌드 과정이 없어서 어떤 정적 호스팅에도 바로 올릴 수 있습니다.

```
index.html        본문 전체
css/style.css      스타일 (라이트/다크 테마 포함)
js/main.js         네비게이션, 테마 토글, 스크롤 애니메이션
assets/resume.pdf   업로드하신 이력서(docx)를 PDF로 변환한 파일 — "이력서 다운로드" 버튼에 연결됨
assets/favicon.svg  파비콘
assets/og-image.png 카카오톡/슬랙 등에 링크 공유 시 보이는 미리보기 이미지
```

## 로컬에서 미리보기

`index.html`을 더블클릭해서 브라우저로 열면 바로 확인할 수 있습니다.

## 배포 방법

### 1) GitHub Pages (추천 — 이미 GitHub 계정이 있으니 가장 간단합니다)

1. github.com/inhadissolve 에서 새 저장소 생성 (예: `portfolio`)
2. 이 폴더 안의 파일을 그대로 그 저장소에 업로드 (드래그 앤 드롭 또는 git push)
   ```bash
   git init
   git add .
   git commit -m "portfolio site"
   git branch -M main
   git remote add origin https://github.com/inhadissolve/portfolio.git
   git push -u origin main
   ```
3. 저장소 Settings → Pages → Source를 "main branch / (root)"로 설정
4. 잠시 후 `https://inhadissolve.github.io/portfolio` 로 접속 가능

### 2) Vercel

1. vercel.com 가입(GitHub 계정으로 로그인 가능) 후 "Add New Project"
2. 위 GitHub 저장소를 연결하거나, 이 폴더를 그대로 드래그 앤 드롭
3. Framework Preset은 "Other"로 두고 그대로 배포 (빌드 명령어 없음)
4. 배포 후 `프로젝트명.vercel.app` 주소가 발급되며, 원하면 커스텀 도메인 연결 가능

### 3) Netlify

1. app.netlify.com 접속 → "Add new site" → "Deploy manually"
2. 이 폴더를 통째로 드래그 앤 드롭하면 즉시 배포 완료

## 내용 수정하기

- 텍스트/프로젝트 추가·수정: `index.html`에서 해당 섹션(`<!-- PROJECTS -->` 등 주석으로 구분) 찾아서 편집
- 색상/여백/폰트 크기: `css/style.css` 상단 `:root { ... }` 의 CSS 변수만 바꿔도 전체 톤이 바뀝니다
- 이력서 교체: `assets/resume.pdf`를 새 파일로 덮어쓰면 됩니다 (파일명은 `resume.pdf`로 유지)

## 참고

- 폰트(Pretendard)와 기술 스택 아이콘(simple-icons)은 CDN에서 불러옵니다. 인터넷이 연결된 곳이면 문제없이 표시되고, 혹시 아이콘 로드에 실패해도 텍스트 라벨은 그대로 보이도록 처리되어 있습니다.
- 전화번호가 대표 소개(About) 영역에 노출되어 있습니다. 공개 배포 후 스팸 연락이 부담스러우면 `index.html`에서 `010-3738-1882` 줄을 삭제하시면 됩니다.
- 업로드해주신 참고 포트폴리오(Next.js 기반)는 구조 파악용으로만 참고했고, 실제 코드는 그대로 가져오지 않았습니다.
