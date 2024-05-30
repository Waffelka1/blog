const link = "https://gorest.co.in/public-api/posts?page="
export async function GETPOSTS(page){
    const responce = await fetch(`${link}${page}`)
    const get = await responce.json()
    return get
}