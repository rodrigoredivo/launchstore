const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "efb1eb639bb0c2",
    pass: "258eaf552472ad"
  }
})

