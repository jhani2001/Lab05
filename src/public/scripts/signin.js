const formLogin = document.querySelector("#loginForm")
const contenedor = document.getElementById('dashboard');
const loginForm = document.getElementById('login-form');

const signAuth = async (user) => {
    try {
        const response = await fetch('http://localhost:4000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        if(!response.ok){
            throw new Error(response.statusText)
        }
        const data = await response.json()
        const token = data.token
        return token
    } catch (error) {
        console.error(error)
    }
}

const login = async () => {
    const email = document.querySelector("#email")
    const password = document.querySelector("#password")

    const user = {
        email: email.value,
        password: password.value
    }

    const token = await signAuth(user)
    
    fetch('/dashboard', {
        headers:{
            'x-access-token': token
        }
    })
    .then(response => response.text())
    .then(html=>{
        window.location.href = '../index-2.html';
    })
    
    
}

formLogin.addEventListener('submit', (e)=>{
    e.preventDefault()
    login()
})