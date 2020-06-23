const User = require('../model/User')

async function post(req, res, next) {
  //CHECK IF HAS ALL FIELDS
  const keys = Object.keys(req.body)
      
  for(key of keys) {
    if (req.body[key] == "") {
      return res.send('Please, fill all fields!')
    }
  }
  //CHECK IF USER EXISTS [EMAIL, CPF_CNPJ]
  let { email, cpf_cnpj, password, passwordRepeat } = req.body
  cpf_cnpj = cpf_cnpj.replace(/\D/g, "")
  const user = await user.findOne({
    where: {email},
    or: {cpf_cnpj}
  })

  if (user) return res.send('Users exists')
  //CHECK IF PASSWORD MATCH
  if (password != passwordRepeat)
    return res.send('Password Mismatch')

  next()
}

module.exports = {
  post
}