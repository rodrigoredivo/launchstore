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
  }

}