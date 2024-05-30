export async function gettextpost(){
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');
    const response = await fetch(`https://gorest.co.in/public-api/posts/${postId}`);
    const data = await response.json();
    return data
}