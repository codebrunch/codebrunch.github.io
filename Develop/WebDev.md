웹페이지 생성 때 md 파일을 js에서 활용하기 위해서 html로 변환이 필요하다?

- 포스트 목록을 동적으로 생성하여 메인 페이지에 보여줍니다. 단, Markdown 파일의 내용을 직접 파싱하고 표시하는 부분은 JavaScript로 처리해야 하며, 이를 위해 일반적으로 Markdown 라이브러리를 사용합니다. GitHub Pages에서는 Jekyll과 같은 정적 사이트 생성기를 사용하여 Markdown 파일을 HTML로 변환하는 것이 일반적입니다.
- Markdown 파일 내용을 요약하거나 설명하는 부분은 실제 Markdown 파일의 내용을 HTML로 변환하여 삽입해야 합니다. 이를 위해서는 JavaScript에서 AJAX 요청을 사용하여 Markdown 파일을 가져와야 합니다. 그리고 가져온 Markdown 내용을 HTML로 변환하는 작업이 필요합니다.

간단한 방법으로는 fetch 함수를 사용하여 Markdown 파일을 가져오고, 가져온 내용을 HTML로 변환하는 방법이 있습니다. 하지만 Markdown을 HTML로 변환하는 과정은 JavaScript로 직접 작성하기보다는 외부 라이브러리를 사용하는 것이 편리합니다. 예를 들어, marked.js나 showdown.js와 같은 라이브러리를 사용할 수 있습니다.