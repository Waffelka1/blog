export async function getcom(){
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');
    const responce = await fetch(`https://gorest.co.in/public-api/comments?post_id=${postId}`)
    const data = await responce.json()
    return data
}