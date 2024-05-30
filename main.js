import { GETPOSTS } from "./server/GETPOSTS.js";
document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get('page')) || 1;
    const articlesList = document.getElementById('posts');
    const response = await GETPOSTS();
    const articles = response.data;
    const paginationDiv = document.getElementById('pagination');
    const pagination = response.meta.pagination;
    articlesList.innerHTML = articles.map(article => `
        <div>
            <a href="post.html?id=${article.id}">${article.title}</a>
        </div>`).join('');
        let paginationHtml = '';
        if (pagination.pages > 1) {
            if (page > 1) {
                paginationHtml += `<a href="index.html?page=${page - 1}">Previous</a> `;
            }

            const pages = [];
            if (pagination.pages <= 5) {
                for (let i = 1; i <= pagination.pages; i++) {
                    pages.push(i);
                }
            } else {
                if (page > 2) pages.push('...');
                if (page > 1) pages.push(page - 1);
                pages.push(page);
                if (page < pagination.pages) pages.push(page + 1);
                if (page < pagination.pages - 1) pages.push('...');
                pages.push(pagination.pages);
            }

            pages.forEach(p => {
                if (p === '...') {
                    paginationHtml += ` <span>...</span> `;
                } else if (p == page) {
                    paginationHtml += ` <strong>${p}</strong> `;
                } else if (p == 1) {
                    paginationHtml += ` <a href="index.html">${p}</a> `;
                } else {
                    paginationHtml += ` <a href="index.html?page=${p}">${p}</a> `;
                }
            });

            if (page < pagination.pages) {
                paginationHtml += ` <a href="index.html?page=${page + 1}">Next</a>`;
            }
        }
        paginationDiv.innerHTML = paginationHtml;
});