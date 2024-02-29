// 포스트 목록을 불러와 동적으로 추가합니다.
window.addEventListener('DOMContentLoaded', () => {
    const postsList = document.getElementById('posts-list');
  
    // 여기서 Markdown 파일 목록을 가져오고, 각각의 Markdown 파일을 포스트로 처리합니다.
    const markdownFiles = [
      { title: '01 지역 간 이동수단 및 소요 시간', path: 'europe2024/01 지역 간 이동수단 및 소요 시간.md' },
      { title: '02 돌로미티 내 교통수단', path: 'europe2024/02 돌로미티 내 교통수단.md' },
      { title: '03 여행 계획', path: 'europe2024/03 여행 계획.md' },
      { title: '10 숙소 선정 시 주의사항', path: 'europe2024/10 숙소 선정 시 주의사항.md' },
      // 추가 포스트 목록 추가
    ];
  
    markdownFiles.forEach(file => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
      const postContent = `
        <h2>${file.title}</h2>
        <p>포스트를 보고 싶다면 해당 링크를 이용하여 확인하세요.</p>
        <a href="${file.path}">포스트 보기</a>
      `;
      postDiv.innerHTML = postContent;
      postsList.appendChild(postDiv);
    });
  });