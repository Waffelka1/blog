import { getcom } from "./server/GETCOMMENTS.js";
import { gettextpost } from "./server/GETTEXTPOST.js";

document.addEventListener("DOMContentLoaded", async () => {
    const articleTitle = document.getElementById('article-title');
    const posttext = document.getElementById('posttext');
    const commentsList = document.getElementById('comments-list');
        const data = await gettextpost()
        const article = data.data;
        articleTitle.textContent = article.title;
        posttext.textContent = article.body;
        const commentsData = await getcom()
        const comments = commentsData.data;
        commentsList.innerHTML = comments.map(comment => `
            <div>
                <strong>${comment.name}</strong>
                <p>${comment.body}</p>
            </div>
        `).join('');
});