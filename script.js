// 포스트 목록을 불러와 동적으로 추가합니다.
window.addEventListener('DOMContentLoaded', () => {
    const postsList = document.getElementById('posts-list');
  
    // 여기서 Markdown 파일 목록을 가져오고, 각각의 Markdown 파일을 포스트로 처리합니다.
    const markdownFiles = [
      { title: '포스트 제목 1', path: 'post-1.md' },
      { title: '포스트 제목 2', path: 'post-2.md' },
      // 추가 포스트 목록 추가
    ];
  
    markdownFiles.forEach(file => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
      const postContent = `
        <h2>${file.title}</h2>
        <p>포스트 내용을 요약하거나 설명할 수 있는 부분입니다.</p>
        <a href="${file.path}">포스트 보기</a>
      `;
      postDiv.innerHTML = postContent;
      postsList.appendChild(postDiv);
    });
  });
  