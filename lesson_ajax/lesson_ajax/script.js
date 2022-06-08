let users = document.querySelector('.table')
let thead = document.querySelector('.thead')
let tbody = document.querySelector('.tbody')

const getUsers = async () => {
    const response = await fetch('https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users')
    const result = await response.json()
    console.log(result)

    const headers = Object.keys(result[0])
    headers.map(e => {
        let newHeadEl = document.createElement('th')
        newHeadEl.innerText = e
        thead.append(newHeadEl)
    })

    let newTh = document.createElement('th')
    newTh.innerText = 'change'
    thead.append(newTh)
    let newTh1 = document.createElement('th')
    newTh1.innerText = 'delete'
    thead.append(newTh1)

    result.map(e => {
        let newTr = document.createElement('tr')
        let tdCreatedAt = document.createElement('td')
        let tdFName = document.createElement('td')
        let tdAvatar = document.createElement('img')
        let tdLName = document.createElement('td')
        let tdCountry = document.createElement('td')
        let tdZip = document.createElement('td')
        let tdCity = document.createElement('td')
        let tdPhone = document.createElement('td')
        let tdEmail = document.createElement('td')
        let tdStatus = document.createElement('td')
        let tdId = document.createElement('td')
        let td8 = document.createElement('td')
        let td9 = document.createElement('td')
        let a = document.createElement('a')
        let btn = document.createElement('button')
        let btn1 = document.createElement('button')


        tdCreatedAt.innerText = new Date(e.createdAt).toISOString().split('T')[0]
        tdFName.innerText = e.firstName
        tdAvatar.src = e.avatar
        tdLName.innerText = e.lastName
        tdCountry.innerText = e.country
        tdZip.innerText = e.zip
        tdCity.innerText = e.city
        tdPhone.innerText = e.phone
        tdEmail.innerText = e.email
        tdStatus.innerText = e.status
        tdId.innerText = e.id
        a.href = `index2.html?id=${e.id}`
        a.innerText = 'Редактировать'
        btn1.innerHTML = 'Удалить'




        newTr.append(tdCreatedAt)
        newTr.append(tdFName)
        newTr.append(tdAvatar)
        newTr.append(tdLName)
        newTr.append(tdCountry)
        newTr.append(tdZip)
        newTr.append(tdCity)
        newTr.append(tdPhone)
        newTr.append(tdEmail)
        newTr.append(tdStatus)
        newTr.append(tdId)
        newTr.append(td8)
        td8.append(btn)
        btn.append(a)
        td9.append(btn1)
        newTr.append(td9)
        tbody.append(newTr)

        btn1.onclick = async () => {

            const response = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users/${e.id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                window.location.href = 'index.html'
            } else {
                alert('false')
            }
            console.log(response);
        }


    });
}

let newUser = document.querySelector('#newUser')
newUser.onclick = function () {
    document.location.href = 'add.html'
}

getUsers()