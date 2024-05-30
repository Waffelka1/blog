import { gettextpost } from "./server/GETTEXTPOST.js";

document.addEventListener("DOMContentLoaded", async () => {
    const articleTitle = document.getElementById('article-title');
    const posttext = document.getElementById('posttext');
    const commentsList = document.getElementById('comments-list');
        const article = gettextpost().data;

        articleTitle.textContent = article.title;
        posttext.textContent = article.body;

        const commentsResponse = await fetch(`https://gorest.co.in/public-api/comments?post_id=${postId}`);
        const commentsData = await commentsResponse.json();
        const comments = commentsData.data;

        commentsList.innerHTML = comments.map(comment => `
            <div>
                <strong>${comment.name}</strong>
                <p>${comment.body}</p>
            </div>
        `).join('');

});