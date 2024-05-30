import { getcom } from "./server/GETCOMMENTS.js";
import { gettextpost } from "./server/GETTEXTPOST.js";

document.addEventListener("DOMContentLoaded", async () => {
    const articleTitle = document.getElementById('title');
    const posttext = document.getElementById('posttext');
    const commentsList = document.getElementById('comments');
        const data = await gettextpost()
        const mainobj = data.data;
        articleTitle.textContent = mainobj.title;
        posttext.textContent = mainobj.body;
        const commentsobj = await getcom()
        const comments = commentsobj.data;
        commentsList.innerHTML = comments.map(comment => `
            <div>
                <strong>${comment.name}</strong>
                <p>${comment.body}</p>
            </div>
        `).join('');
});