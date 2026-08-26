# 김찬혁 | Backend Developer Portfolio

> 아이디어를 API와 데이터 구조로 구체화하고, 배포와 운영까지 연결하는 백엔드 개발자입니다.

[![Portfolio](https://img.shields.io/badge/Portfolio-3457FF?style=for-the-badge&logo=githubpages&logoColor=white)](https://inhadissolve.github.io/portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/inhadissolve)
[![Blog](https://img.shields.io/badge/Tech_Blog-03C75A?style=for-the-badge&logo=naver&logoColor=white)](https://blog.naver.com/dissolve_chan)
[![Notion](https://img.shields.io/badge/Notion_Portfolio-000000?style=for-the-badge&logo=notion&logoColor=white)](https://app.notion.com/p/0f72a03e23d9832d8dc381d08168d0c7)

<p align="center">
  <a href="https://inhadissolve.github.io/portfolio/">
    <img src="assets/og-image.png" alt="김찬혁 백엔드 개발자 포트폴리오 미리보기" width="900">
  </a>
</p>

## 포트폴리오 소개

순수 HTML · CSS · JavaScript로 만든 반응형 1페이지 포트폴리오입니다. 프로젝트 카드의 **자세히 보기**를 누르면 실제 화면, 아키텍처, 문제 해결 과정과 성과를 프로젝트별 사례 연구 형태로 확인할 수 있습니다.

- FastAPI · NestJS · PostgreSQL 기반 API와 데이터 모델 설계
- Docker · Railway · AWS · Terraform · GitHub Actions를 활용한 배포 및 운영
- 팀 리딩, Android 연동 계약 조율, 테스트 시나리오와 최종 스모크 테스트 주도
- AI 추론 파이프라인과 OpenAI · Hugging Face API 연계 경험

## 주요 성과

| 구분 | 내용 |
| --- | --- |
| 실서비스 운영 | 사무엘학교 회원 449명, 14일 학습 완료 16,496회, 최고 동시 접속 36명 |
| 팀 리딩 · 연동 | HomeFit 백엔드 팀장으로 API 계약, PR 우선순위, 테스트 계정과 Android 통합 테스트 조율 |
| 클라우드 확장 | Railway 배포에서 AWS Terraform, GitHub Actions OIDC, PostgreSQL 18 데이터 이관까지 수행 |
| 개인 선정 | UMC 10th Backend(Node.js) 파트 베스트 챌린저 |
| 프로젝트 수상 | 탄소중립 Innovation Academy 대상, 오픈소스 SW 페스티벌 최우수상(인하대 총장상), KSEB 미니프로젝트 대상 |

## 대표 프로젝트

| 프로젝트 | 역할 | 핵심 내용 | 결과 · 링크 |
| --- | --- | --- | --- |
| **사무엘학교** | 1인 풀스택 · 운영 | React · FastAPI · PostgreSQL · OpenAI 기반 성경 암송 학습 서비스 | [서비스](https://samuel-school.vercel.app) · [API 문서](https://samuel-school-api.vercel.app/docs) |
| **HomeFit** | Backend Team Lead | NestJS · Prisma 기반 청년 주거·금융 API, 멱등 Seed, E2E, AWS IaC·CI/CD | [Showcase](https://github.com/inhadissolve/homefit-showcase) · [공식 GitHub](https://github.com/umc-homefit) |
| **수담(手談)** | 팀장 · AI 파이프라인 | MediaPipe · TensorFlow · FastAPI 기반 실시간 수어 인식·번역 | [공식 GitHub](https://github.com/KSEB-MEGA-CREW) |
| **GreenBrain** | Backend | 챌린지 인증, 피드, 토큰 보상 API와 Supabase Storage 연계 | [Backend](https://github.com/GreenBrain-Inha/BE_GreenBrain) |
| **RealGain** | ML · 연동 모듈 | Orbit 이미지 · ResNet18 · Grad-CAM 기반 산업 설비 이상탐지 | [공식 GitHub](https://github.com/RealGain-5) |
| **IssueOne** | AI · Backend | RSS 수집·정제·요약 API, 배포 메모리 제약을 외부 AI API로 해결 | [서비스](https://issue-one.vercel.app/) · [공식 GitHub](https://github.com/KSEB-4-E) |

각 프로젝트의 화면과 상세 문제 해결 과정은 [포트폴리오 사이트](https://inhadissolve.github.io/portfolio/#projects)에서 확인할 수 있습니다.

## 기술 스택

```text
Language        Python · TypeScript · JavaScript
Backend         FastAPI · Node.js · Express · NestJS · Jest · Supertest · Testcontainers
Database/Infra  PostgreSQL · SQLite · SQLAlchemy · Alembic · Prisma · Docker · Supabase · AWS · Terraform
AI/Data         TensorFlow · Keras · Pandas · NumPy · OpenCV · MediaPipe · Hugging Face API · OpenAI API
Frontend        React · Next.js · Tailwind CSS
Tools           Git · GitHub · GitHub Actions · Vercel · Railway
```

## 저장소 구조

```text
.
├─ index.html              # 소개, 기술, 경험, 프로젝트와 6개 상세 다이얼로그
├─ css/style.css           # 반응형 UI, 라이트/다크 테마, 모달 애니메이션
├─ js/main.js              # 내비게이션, 테마, 스크롤 효과, 프로젝트 다이얼로그
└─ assets/
   ├─ homefit/             # HomeFit 화면, 아키텍처, 데모데이·수상 이미지
   ├─ projects/            # 프로젝트별 화면과 결과 이미지
   ├─ awards/              # 개인 수상·교육 수료 증빙 이미지
   ├─ tech/                # 로컬 기술 아이콘
   ├─ resume.pdf           # 최신 이력서
   └─ og-image.png         # 링크 공유 미리보기
```

## 로컬 실행

별도 빌드 과정이 없는 정적 사이트입니다. 저장소를 클론한 뒤 `index.html`을 열거나 간단한 정적 서버를 실행하면 됩니다.

```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`으로 접속합니다.

## 배포

`main` 브랜치가 GitHub Pages에 연결되어 있습니다. 변경 사항을 병합하면 [포트폴리오 사이트](https://inhadissolve.github.io/portfolio/)에 반영됩니다.

## 아이콘 출처

기술 스택 아이콘은 [Simple Icons](https://simpleicons.org/), [Devicon](https://devicon.dev/)과 각 프로젝트의 공식 GitHub 자산을 사용합니다. 전용 브랜드 아이콘이 없는 도구는 공식 프로젝트 표기 또는 의미가 분명한 식별 기호를 사용했습니다.
