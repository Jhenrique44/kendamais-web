import api from "../apis/api"

async function signup ({ email, password, name, cpf, cnpj, cellphone }) {
  try {
    const response = await api.post("/", {
      email, password, name, cpf, cnpj, cellphone
    })

    return response.data
  } catch (exception) {
    throw new Error(exception.message)
  }
}

async function signin ({ email, password }) {
  try {
    const response = await api.post("/login", {
      email, password
    })

    return response.data
  } catch (exception) {
    throw new Error(exception.message)
  }
}

export default {
  signup,
  signin
}
