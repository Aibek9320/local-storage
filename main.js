const userData = (arr) => {
    const signupForm = document.getElementById('signup')
    signupForm.addEventListener('submit', 
    (event) =>{
        event.preventDefault()
        console.log(signupForm);
    })
}
userData()