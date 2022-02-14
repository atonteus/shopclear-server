const url = ""

function getUsers() {
  axios.get(url)
    .then(response => {
      const data = response.data

      renderApiResult.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

function getUser() {
  axios.get(`${url}/user-`)
    .then(response => {
      const data = response.data

      userAvatar.src = data.avatar
      userNome.textContent = data.name
      userId.textContent = data.id
      userCity.textContent = data.city
    })
    .catch(error => console.log(error))
}

function addNewUser(newUser) {

  axios.post(url, newUser)
    .then(response => {
      alert(JSON.stringify(response.data))
      getUsers()
    })
    .catch(error => console.error(error));
}
