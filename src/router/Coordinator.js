export const goToLogin =(history)=>{
    history.push("/login")
}
export const goToSignup =(history)=>{
    history.push("/signup")
}
export const goToFeed =(history)=>{
    history.push("/")
}
export const goToAddPost =(history)=>{
    history.push("/addPost")
}
export const goToDetails =(history,id)=>{
    history.push(`/details/${id}`)
}
