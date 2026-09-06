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
manuals/
  index.html                매뉴얼 목록
  urlnote.html              링크노트 — 시작하기
  urlnote-backup.html       링크노트 — 백업과 내보내기
  tripdiary.html            여행일기 — 시작하기
  mouda.html                모으다 — 시작하기
  mouda-budget.html         모으다 — 가계부와 통계
  isekaicow.html            이세계 카우방 — 플레이 가이드
app-ads.txt                 AdMob 앱 인증 — 반드시 도메인 루트에 유지
google69e3d51c4a90be92.html Google Search Console 소유권 확인 — 삭제 금지
```

## 앱

| 앱 | 패키지 | 소스 | 방침 |
|---|---|---|---|
| 링크노트 | `com.codebrunch.url` | `app-url-keeper` | [/privacy/urlnote/](privacy/urlnote/) |
| 이세계 카우방 (게임) | `com.codebrunch.isekaicow` | `game-isekai-cow` | [/privacy/isekaicow/](privacy/isekaicow/) |
| 여행일기 (TripDiary) | `com.codebrunch.triplog` | `app-trip-tracker` | [/privacy/triplog/](privacy/triplog/) |
| 모으다 | `com.codebrunch.omnitask` | `app-planner` | [/privacy/mouda/](privacy/mouda/) |

## 개인정보처리방침 관리 규칙

- **이 저장소의 `privacy/` 가 정본입니다.** 앱 동작이 바뀌면 여기를 먼저 고칩니다.
- 게시본이 앱의 실제 동작과 다르면 그 자체로 Play 스토어 정책 위반입니다. 기능을 바꾼 커밋과 방침을 고친 커밋은 항상 같이 갑니다.
- 이전 주소(`codebrunch.github.io/urlnote/`, `/isekaicow/`, `/triplog/`, `sjkyle.github.io/mouda/`)는 리다이렉트 스텁으로 유지합니다. Play 콘솔의 방침 URL을 새 주소로 모두 교체한 뒤에도 스텁은 지우지 않습니다.
- 광고 SDK(AdMob)를 쓰는 앱은 **이세계 카우방** 하나입니다. `app-ads.txt` 는 이 앱 때문에 필요하며 도메인 루트에 있어야 합니다.
- 방침 문서는 각 앱 소스와 짝입니다. 권한을 추가하거나 네트워크 호출을 늘렸다면 해당 방침의 **1. 수집하는 정보**와 **권한** 절을 같은 PR에서 고칩니다.

### 매뉴얼 작성 규칙

- 화면에 실제로 있는 문구만 씁니다. 설정 항목 이름은 각 앱의 `values-ko/strings.xml`(Kotlin) 또는 `lib/l10n/app_ko.arb`(Flutter)에서 그대로 가져옵니다.
- 페이지 껍데기(head·nav·footer)는 손으로 고치지 않습니다. 전부 한 템플릿에서 나오므로 테마 토글과 FOUC 방지 스크립트가 모든 문서에서 같아야 합니다.

## 디자인

[voltagent/awesome-design-md](https://github.com/voltagent/awesome-design-md) 의 `linear.app` 프리셋을 기반으로 합니다.

- 4단 surface ladder, 그림자 없이 1px hairline 으로만 깊이 표현
- 액센트는 `#ff9d47` 하나만 사용. 채우기(브랜드 마크, 주 CTA)는 `--accent`, 배경 위 텍스트·포커스 링은 `--accent-ink` 로 나눕니다 — 라이트 모드에서 `#a85c05` 로 어두워져 흰 배경 대비 5.0:1 (WCAG AA) 을 유지합니다
- 토큰은 `style.css` 상단 `:root` 에 정의되어 있습니다

### 테마

**라이트가 기본**이고 다크를 지원합니다. 방침 페이지 4개가 모두 라이트 기본이라 허브만 다크면 이동할 때 톤이 튀기 때문입니다.

세 가지 상태로 동작합니다.

| 상태 | 셀렉터 |
|---|---|
| 라이트 (기본) | `:root` — 모든 색의 정의가 여기 먼저 있습니다 |
| 시스템 다크 | `@media (prefers-color-scheme:dark)` 안의 `:root:not([data-theme="light"])` |
| 명시적 선택 | `:root[data-theme="dark"]` — 시스템 설정을 양방향으로 덮어씁니다 |

- 어떤 색도 media / `[data-theme]` 블록 안에만 정의하지 않습니다. 라이트에 먼저 정의하고 다크에서 재정의만 합니다.
- 내비게이션의 토글 버튼이 `<html data-theme>` 를 찍고 `localStorage.theme` 에 기억합니다.
- `<head>` 인라인 스크립트가 같은 값을 미리 찍어 다크 이용자에게 흰 화면이 번쩍이는 현상(FOUC)을 막습니다. `style.css` 를 바꾸더라도 이 스크립트는 그대로 두세요.

### 앱과 게임 구분

`#apps` 는 도구 앱(3단 그리드), `#games` 는 게임(전폭 `featured` 카드, 큰 아이콘)으로 섹션을 나눕니다. 라벨뿐 아니라 레이아웃으로도 구분되게 한 의도이며, 광고 정책이 다르다는 점(게임만 AdMob)을 섹션 설명에 명시합니다.
