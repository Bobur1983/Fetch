// CRUD операции - create, read, update, delete

// fetch() - это встроенная функция для выполнения сетевых запросов

//GET запрос - запрос для получения каких либо данных


// function getUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log('Ошибка при получении пользователей'))
// }
// getUsers()

let users = document.querySelector('.users')

async function getUsers() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await res.json()
        data.forEach((item) => {
            let user = document.createElement('div')
            user.classList.add('user')
            
            let name = document.createElement('h2')
            let city = document.createElement('p')
            let mail = document.createElement('a')
            
            name.textContent = item.name
            city.textContent = item.address.city
            mail.textContent = item.email
            mail.href = `mailto:${item.email}`
            
            user.append(name, city, mail)
            users.append(user)
        })
    } catch (error) {
        console.log('Ошибка при получении данных');
    }
}

window.addEventListener('DOMContentLoaded', () => getUsers())