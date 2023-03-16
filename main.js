const check = () => {
    if(window.location.pathname === '/'){
        if(localStorage.getItem('user') === null ){
            window.location.replace('/pages/signup.html')
        }
    }
}
console.log(window.location.pathname === '/');
check()

const USER = {}

const userData = (arr) => {
    const signupForm = document.getElementById('signup')
    signupForm && signupForm.addEventListener('submit', (event) =>{
        event.preventDefault()
        
        Array.from(signupForm.children)
        .filter(el => el.localName ==='input')
        .forEach(el => {
            USER[el.type] = el.value
        })
        localStorage.setItem('user', JSON.stringify(USER))
        window.location.replace('/pages/login.html')
        console.log(USER);
    })
}
userData()

const logfunc = () => {
    const loginForm = document.getElementById('loginfo')
    loginForm && loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const userlog = {}
        Array.from(loginForm.children)
        .filter(el => el.localName === 'input')
        .forEach(el => {
            userlog[el.type] = el.value;
        })
        const locstorageinfo = JSON.parse(localStorage.getItem('user'))
        // USER.filter(el => el.email )
        
        console.log(userlog);
        console.log(locstorageinfo)
        if(userlog.email === locstorageinfo.email && userlog.password === locstorageinfo.password){
                console.log('success');
        } else{
            console.log('not correct');
        }
    })
}
logfunc()