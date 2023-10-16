const form = document.getElementsByTagName("form")[0]
const username = document.getElementById("inputUsername")
const email = document.getElementById("inputEmail")
const password = document.getElementById("inputPassword")
const confirmPassword = document.getElementById("inputConfirmPassword")

form.addEventListener('submit', event => {
    event.preventDefault()

    const newUser = {
        name: username.value,
        email: email.value,
        password: password.value
    }

    if (checkPasswords()) {
        signup(newUser)  
    }
})


async function signup(newUser) {
    try {
        const response = await api.post("/users/signup", newUser)
        
        window.location.replace("/signin.html")
    } catch (error) {
        showErrorAlert(error)
    }
}

function showErrorAlert(error) {
    alert(error.response.data.message)
}

function checkPasswords() {
    const passwordValue = password.value
    const confirmPasswordValue = confirmPassword.value

    if (passwordValue !== confirmPasswordValue) {
        alert("The passwords must be equal.")
        return false
    }

    return true
}