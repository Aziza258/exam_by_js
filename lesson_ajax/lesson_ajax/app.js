let params = (new URL(document.location)).searchParams;
let id = params.get('id');

const getSingleUser = async () => {
    const response = await fetch(` https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users/${id}`)
    const result = await response.json()

    console.log({ result });
    let firstName = document.querySelector('#firstName')
    let lastName = document.querySelector('#lastName')
    let country = document.querySelector('#country')
    let city = document.querySelector('#city')
    let email = document.querySelector('#email')
    let zip = document.querySelector('#zip')
    let phone = document.querySelector('#phone')

    firstName.value = result.firstName
    lastName.value = result.lastName
    country.value = result.country
    city.value = result.city
    email.value = result.email
    zip.value = result.zip
    phone.value = result.phone



}

const updateUser = async () => {
    if(firstName.value === '' || lastName.value === '' || country.value === '' || city.value === ''|| email.value === "" || zip.value === '' || phone.value === '') {
        return alert('Необходимо заполнить все параметры!!!')
    }
    
    try {
        const response = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName.value,
                lastName: lastName.value,
                country: country.value,
                city: city.value,
                email: email.value,
                zip: zip.value,
                phone: phone.value,
            })
        })
        const content = await response.json()

        if(response.ok) {
            window.location.href = 'index.html'
        } else {
            alert('false')
        }
        console.log(response);

    } catch (e) {
        console.error('error:', e);
    }

    
}

getSingleUser()

