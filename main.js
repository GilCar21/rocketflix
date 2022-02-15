import {
  API_KEY, 
  BASE_URL,
  IMG_URL,
  language,
} from './api.js'


const a = async function getImage(){

  const idFilm = (Math.random() * (1000 - 1) + 1).toFixed()
  console.log(idFilm)
  const b = await axios.get(BASE_URL+idFilm+API_KEY+language)

  //if(Get ==)

  .then(response => {
    console.log(response)
    const data = response.data
    let img
    let Titulo
    let Descricao
    const div = document.querySelector("#IMG")
    const div2 = document.querySelector("#texto")

    if( div.querySelector("img") !== null){
      div.querySelector("img").remove()
    }
    img = document.createElement("img");
    //console.log(document.querySelector("#IMG").childElementCount)


    const Title = data.title
    if(div2.querySelector("h2") !== null){
      div2.querySelector("h2").remove()
    }

    if(div2.querySelector("p") !== null){
      div2.querySelector("p").remove()
    }

    img.src=IMG_URL+data.poster_path;

    div.appendChild(img);

    Titulo = document.createElement("h2")
    Descricao = document.createElement("p")

    div2.appendChild(Titulo).innerHTML = Title
    const description = data.overview
    div2.appendChild(Descricao).innerHTML = description

  })
  .catch( e => {
    let img
    let Titulo
    const div = document.querySelector("#IMG")
    const div2 = document.querySelector("#texto")


    if( div.querySelector("img") !== null){
      div.querySelector("img").remove()
    }

    img = document.createElement("img");
    
    if(div2.querySelector("h2") !== null){
      div2.querySelector("h2").remove()
    }

    if(div2.querySelector("p") !== null){
      div2.querySelector("p").remove()
    }
    div.appendChild(img)
    const codar = "./assets/codar2.jpg"
    img.src=codar
    Titulo = document.createElement("h2")
    div2.appendChild(Titulo).innerHTML = "Ops! Hoje não é dia de fime. Bora codar!!"

  })
}
const botao = document.querySelector("#botao")

botao.addEventListener("click", a)




