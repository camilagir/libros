const data = [
    {
      "id":1,
      "image":"https://www.buenosaires.gob.ar/sites/gcaba/files/la_iliada-2.png",
      "title":"La Illiada",
      "description":"Escrito por Homero",
      "precio":"$500",
      "stock":"5 unidades disponibles"
    },
    {
      "id":2,
      "image":"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/2500/9781250044655.jpg",
      "title":"Heartless",
      "description":"Escrito por Marissa Meyer",
      "precio":"$1000",
      "stock":"5 unidades disponibles"
    },
    {
      "id":3,
      "image":"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9788/4136/9788413622132.jpg",
      "title":"La Canción de Aquiles",
      "description":"Escrito por Madeline Miller",
      "precio":"$1500",
      "stock":"5 unidades disponibles"
    },
    {
      "id":4,
      "image":"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4862/9780486266862.jpg",
      "title":"Sonnets",
      "description":"Escrito por William Shakespeare",
      "precio":"$800",
      "stock":"5 unidades disponibles"
    },
]

const getProducts = new Promise((resolve) => {
    setTimeout(()=>{
        resolve(data)
    }, 2000)
})

export default getProducts