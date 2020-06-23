const User = require('../model/User')

async function post(req, res, next) {
  //CHECK IF HAS ALL FIELDS
  const keys = Object.keys(req.body)
      
  for(key of keys) {
    if (req.body[key] == "") {
      return res.render('user/register', {
        user: req.body,
        error: 'Por favor, preencha todos os campos.'
      })
    }
  }
  //CHECK IF USER EXISTS [EMAIL, CPF_CNPJ]
  let { email, cpf_cnpj, password, passwordRepeat } = req.body
  cpf_cnpj = cpf_cnpj.replace(/\D/g, "")
  const user = await user.findOne({
    where: {email},
    or: {cpf_cnpj}
  })

  if (user) return res.render('user/register', {
    user: req.body,
    error: 'Usuário ja cadastrado'
  })
  //CHECK IF PASSWORD MATCH
  if (password != passwordRepeat)
    return res.render('user/register', {
      user: req.body,
      error: 'A senha e a repetição da senha estão incorretas'
    })

  next()
}

module.exports = {
  post
}