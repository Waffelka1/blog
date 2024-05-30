const link = "https://gorest.co.in/public-api/posts?page="
export async function GETPOSTS(){
    const responce = await fetch(`${link}`)
    const get = await responce.json()
    return get
}