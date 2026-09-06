# codebrunch.github.io

codebrunch가 배포하는 안드로이드 앱의 소개 · 사용 매뉴얼 · 개인정보처리방침을 모아둔 정적 사이트입니다.

공개 주소: <https://codebrunch.github.io/>

## 구조

```
index.html                  허브 페이지 (앱 소개 / 매뉴얼 / FAQ)
style.css                   디자인 토큰 + 전체 스타일
script.js                   모바일 내비게이션 토글
privacy/
  index.html                방침 목록
  urlnote/index.html        링크노트
  isekaicow/index.html      이세계 카우방
  triplog/index.html        여행일기 (TripDiary)
  mouda/index.html          모으다
manuals/                    앱별 사용 매뉴얼 (작성 예정)
app-ads.txt                 AdMob 앱 인증 — 반드시 도메인 루트에 유지
google69e3d51c4a90be92.html Google Search Console 소유권 확인 — 삭제 금지
```

## 앱

| 앱 | 패키지 | 방침 |
|---|---|---|
| 링크노트 | `com.codebrunch.url` | [/privacy/urlnote/](privacy/urlnote/) |
| 이세계 카우방 | `com.codebrunch.isekaicow` | [/privacy/isekaicow/](privacy/isekaicow/) |
| 여행일기 (TripDiary) | *(확인 필요)* | [/privacy/triplog/](privacy/triplog/) |
| 모으다 | `com.codebrunch.omnitask` | [/privacy/mouda/](privacy/mouda/) |

## 개인정보처리방침 관리 규칙

- **이 저장소의 `privacy/` 가 정본입니다.** 앱 동작이 바뀌면 여기를 먼저 고칩니다.
- 게시본이 앱의 실제 동작과 다르면 그 자체로 Play 스토어 정책 위반입니다. 기능을 바꾼 커밋과 방침을 고친 커밋은 항상 같이 갑니다.
- 이전 주소(`codebrunch.github.io/urlnote/`, `/isekaicow/`, `/triplog/`, `sjkyle.github.io/mouda/`)는 리다이렉트 스텁으로 유지합니다. Play 콘솔의 방침 URL을 새 주소로 모두 교체한 뒤에도 스텁은 지우지 않습니다.
- 광고 SDK(AdMob)를 쓰는 앱은 **이세계 카우방** 하나입니다. `app-ads.txt` 는 이 앱 때문에 필요하며 도메인 루트에 있어야 합니다.

## 디자인

[voltagent/awesome-design-md](https://github.com/voltagent/awesome-design-md) 의 `linear.app` 프리셋을 기반으로 합니다.

- near-black 캔버스 `#010102` + 4단 surface ladder, 그림자 없이 1px hairline 으로만 깊이 표현
- 액센트는 `#ff9d47` 하나만 사용 — 브랜드 마크, 주 CTA, 포커스 링, 섹션 라벨에 한정
- 다크 전용. 라이트 모드는 제공하지 않습니다
- 토큰은 `style.css` 상단 `:root` 에 정의되어 있습니다
