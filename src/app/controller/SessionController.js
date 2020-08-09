const User = require('../model/User')

const crypto = require('crypto')
const mailer = require("../../lib/mailer")

module.exports = {
  loginForm(req, res) {
    return res.render("session/login")
  },
  login(req, res) {
    req.session.userId = req.user.id

    return res.redirect("/users")
  },
  logout(req, res) {
    req.session.destroy()
    return res.redirect("/")
  },
  forgotForm(req, res) {
    return res.render("session/forgot-password")
  },
  async forgot(req, res) {
    const user = req.user

    try {

      // token para o usuário
      const token = crypto.randomBytes(20).toString("hex")

      // Criar uma expiração do token
      let now = new Date()
      now = now.setHours(now.getHours() + 1)

      await User.update(user.id, {
        reset_token: token,
        reset_token_expires: now
      })

      // Enviar um email com recuperação de senha.
      await mailer.sendMail({
        to: user.email,
        from: 'no-reply@launchstore.com.br',
        subject: 'Recuperação de senha',
        html: `<h2>Perdeu a chave?</h2>
      <p>Não se preocupe, clique no link abaixo para recuperar sua senha</p>
      <p>
      <a href="http://localhost:3000/users/password-reset?token=${token}" target="_blank">
        RECUPERAR SENHA
      </a>
      </p>
      `,
      })
      // AVISAR O USUÁRIO QUE ENVIAMOS O EMAIL
      return res.render("session/forgot-password", {
        sucess: "Verifique seu email para resetar sua senha!"
      })

    } catch (err) {
      console.error(err)
      return res.render("session/forgot-password", {
        error: "Erro inesperado, tente novamente!"
      })
    }
  },
  resetForm(req, res) {
    return res.render("session/password-reset", { token: req.query.token })
  },
  reset(req, res) {
    const { email, password, passwordRepeat, token } = req.body 
    
    try {
      
      // CRIAR UM NOVO HASH DE SENHA

      // ATUALIZA O USUÁRIO

      // AVISA O USUÁRIO QUE ELE TEM UMA NOVA SENHA
      
      
    } catch (err) {
      console.error(err)
      return res.render("session/password-reset", {
        error: "Erro inesperado, tente novamente!"
      })
    }
  }
}