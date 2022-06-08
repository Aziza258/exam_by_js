
const getAddedUser = async () => {

   

    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let country = document.querySelector('#country').value
    let city = document.querySelector('#city').value
    let email = document.querySelector('#email').value
    let zip = document.querySelector('#zip').value
    let phone = document.querySelector('#phone').value

    if(firstName === '' || lastName === '' || country === '' || city === ''|| email === "" || zip === '' || phone=== '') {
        return alert('Необходимо заполнить все параметры!!!')
    }


    console.log(firstName)

    console.log(firstName)


    const response = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users`, {
        
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            country: country,
            city: city,
            email: email,
            zip: zip,
            phone: phone,

        })



    })

    const contant = await response.json()


    if (response.ok) {
        window.location.href = 'index.html'
    } else {
        alert('false')
    }
    console.log(response);



}



