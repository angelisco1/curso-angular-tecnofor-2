const URL = 'http://jsonplaceholder.typicode.com/users';

function getUsers() {
  return fetch(URL)
    .then((resp) => {
      console.log(resp);
      return resp.json()
    })
    // .then((datos) => {
    //   console.log(datos);
    // })
  console.log('FIN')
}

// getUsers()
//   .then((datos) => {
//     console.log(datos)
//   });

// getUsers()
//   .then((datos) => {
//     const userId = datos[0].id;
//     return getUserById(userId);
//   })
//   .then((datos) => {
//     console.log(datos)
//   });


function getUserById(id) {
  // GET /users/id
  return fetch(`${URL}/${id}`)
    .then((resp) => {
      console.log(resp);
      return resp.json()
    })
    .catch(err => console.log(err))
}

async function getConAsyncAwait() {
  const datos = await getUsers();
  const userId = datos[0].id;
  const usuario = await getUserById(userId);
  console.log(usuario);
}

// getConAsyncAwait();