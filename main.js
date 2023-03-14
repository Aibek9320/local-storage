const check = () => {
    if(window.location.pathname === '/'){
        if(localStorage.getItem('user') === null ){
            window.location.replace('/pages/signup.html')
        }
    }
}
console.log(window.location.pathname === '/');
check()

const userData = (arr) => {
    const signupForm = document.getElementById('signup')
    signupForm && signupForm.addEventListener('submit', (event) =>{
        event.preventDefault()
        const user = {}
        Array.from(signupForm.children)
        .filter(el => el.localName ==='input')
        .forEach(el => {
            user[el.type] = el.value
        })
        localStorage.setItem('user', JSON.stringify(user))
        window.location.replace('/pages/login.html')
    })
}
userData()