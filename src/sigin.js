const form = document.getElementsByTagName("form")[0]
const email = document.getElementById("input-email")
const password = document.getElementById("input-password")

form.addEventListener('submit', event => {
    event.preventDefault()

    const user = {
        email: email.value,
        password: password.value
    }

    login(user)
})

async function login(user) {
    try {
        const response = await api.post("/users/login", user)
        console.log(response);
        const USER = response.data.user
        
        localStorage.setItem("USER", JSON.stringify(USER))

        window.location.replace("/notes.html") 

    } catch (error) {
        showErrorAlert(error)
    }
}

function showErrorAlert(error) {
    alert(error.response.data.message)
}