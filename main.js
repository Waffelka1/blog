import { GETPOSTS } from "./server/GETPOSTS.js";
document.addEventListener("DOMContentLoaded", async () => {
    const articlesList = document.getElementById('posts');
    const response = await GETPOSTS();
    const articles = response.data;
    articlesList.innerHTML = articles.map(article => `
        <div>
            <a href="post.html?id=${article.id}">${article.title}</a>
        </div>`).join('');
});