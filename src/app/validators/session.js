const User = require('../model/User')
const {compare} = require('bcryptjs')

async function login(req, res, next) {
  const { email,password } = req.body

  const user = await User.findOne({ where: {email} })

  if(!user) return res.render('user/register', {
    user: req.body,
    error: 'Usuário não cadastrado!'
  })

  const passed = await compare(password, user.password)
  if(!passed) return res.render("user/index", {
    user: req.body,
    error: "Senha incorreta"
  })
  
  req.user = user

  next()
}

module.exports = {
  login
}