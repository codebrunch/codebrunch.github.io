window.addEventListener('DOMContentLoaded', () => {
    const postsList = document.getElementById('posts-list');

    // Markdown 파일을 가져오는 함수
    async function fetchMarkdownFile(path) {
        const response = await fetch(path);
        const markdownText = await response.text();
        return markdownText;
    }

    // 포스트를 추가하는 함수
    async function addPost(path, title) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        // Markdown 파일의 내용을 가져와서 postDiv에 추가
        const markdownContent = await fetchMarkdownFile(path);
        postDiv.innerHTML = `
            <h2>${title}</h2>
            ${markdownContent}
        `;
        postsList.appendChild(postDiv);
    }

    // "포스트 보기" 링크에 대한 이벤트 리스너 추가
    const postLinks = document.querySelectorAll('.post-link');
    postLinks.forEach(link => {
        link.addEventListener('click', async (event) => {
            event.preventDefault(); // 기본 동작(링크 이동) 방지
            const path = link.getAttribute('href');
            const title = link.innerText;
            await addPost(path, title);
        });
    });
});
