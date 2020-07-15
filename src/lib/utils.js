module.exports = {
  date(timestamp) {
      const date = new Date(timestamp) 
      // criando novo objeto de data , e passa a data com seu local time 

      const year = date.getFullYear() //pegando o ano e tranformando a data para universal
      const month = `0${date.getMonth() + 1}`.slice(-2) //pegando o mês e tranformando a data para universal
      const day = `0${date.getDate()}`.slice(-2) //pegando o dia e tranformando a data para universal
      const hour = date.getHours()
      const minutes = date.getMinutes()

      return {
        day,
        month,
        year,
        hour,
        minutes,
        iso: `${year}-${month}-${day}`, //iso
        birthDay: `${day}/${month}`, //01/10
        format: `${day}/${month}/${year}`
      }
  },
  formatPrice(price) {
    return value = new Intl.NumberFormat('pt-BR', {
      style: 'currency', 
      currency: 'BRL'
    }).format(price/100)
  },
  formatCpfCnpj(value) {
    value = value.replace(/\D/g, "")
    if (value.length > 14 )
       value = value.slice(0, -1)
    // CHECK IF CNPJ - 11.222.333/0001-11
    if (value.length > 11) {
      // 11.222333444455
      value = value.replace(/(\d{2})(\d)/, "$1.$2")
      // 11.222.333444455
      value = value.replace(/(\d{3})(\d)/, "$1.$2")
      // 11.222.333/444455
      value = value.replace(/(\d{3})(\d)/, "$1/$2")
      // 11.222.333/4444-55
      value = value.replace(/(\d{4})(\d)/, "$1-$2")
    } else {
      // CPF 111.222.333-44
      value = value.replace(/(\d{3})(\d)/, "$1.$2")
      value = value.replace(/(\d{3})(\d)/, "$1.$2")
      value = value.replace(/(\d{3})(\d)/, "$1-$2")
    
    }
    return value
  },
  formatCep(value) {
    value = value.replace(/\D/g, "")
    if (value.length > 8) 
       value = value.slice(0, -1) 
    value = value.replace(/(\d{5})(\d)/, "$1-$2")
    return value
  }
}