import api from "../apis/api"

async function getUser (id) {
  try {
    const response = await api.get(`/user/${id}`)
    return response.data
  } catch (exception) {
    console.log(exception);
    throw new Error(exception.message)
  }
}

async function updateUser ({ id, email, nome, cpf, cellphone, cnpj }) {
  try {
    const response = await api.patch(`/user/${id}`, {
      email, nome, cpf, cellphone, cnpj
    })

    return response.data
  } catch (exception) {
    throw new Error(exception.message)
  }
}

export default {
  getUser,
  updateUser
}
