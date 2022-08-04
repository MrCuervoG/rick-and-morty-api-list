// buscador
const inputElement = document.getElementById("character")

const btnSearch = document.getElementById("search-character")

btnSearch.addEventListener("click", async () => {

    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${inputElement.value}`)

    // tranformar info a json
    const data = await response.json()

    // iterar
    const containerElement = document.getElementById("containerElement")

    // limpiamos
    containerElement.innerHTML = ``

    // mostrar dimanicamente
    data.results.forEach((element) =>{
        containerElement.innerHTML += `
        <div class="card"> 

        <img class="image" width="120" height="120" src="${element.image}" alt="personaje">

        <div class="info-container">
            <div class="info">
                <p class="text-white">${element.name}</p>
                <p class="text-white">${element.species} - ${element.status}</p>
            </div>
            <div class="info">
                <p class="text-grey">Last know location:</p>
                <p class="text-white">${element.location.name}</p>
            </div>
            <div class="info">
                <p class="text-grey">first seen:</p>
                <p class="text-white">${element.origin.name}</p>
            </div>
        
        </div>

    </div>`

    // limpiamos la casillla
    inputElement.value = ""

})

})

// peticion a la API
const init = async (page) => {
    try {

    // llamado a la API
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)

    // tranformar info a json
    const data = await response.json()

    // iterar
    const containerElement = document.getElementById("containerElement")
        
    containerElement.innerHTML = ``

    // mostrar dimanicamente
    data.results.forEach((element) =>{
        containerElement.innerHTML += `
        <div class="card"> 

        <img class="image" width="120" height="120" src="${element.image}" alt="personaje">

        <div class="info-container">
            <div class="info">
                <p class="text-white">${element.name}</p>
                <p class="text-white">${element.species} - ${element.status}</p>
            </div>
            <div class="info">
                <p class="text-grey">Last know location:</p>
                <p class="text-white">${element.location.name}</p>
            </div>
            <div class="info">
                <p class="text-grey">first seen:</p>
                <p class="text-white">${element.origin.name}</p>
            </div>
           
        </div>

    </div>`

    })

    // mostrar errores
    } catch (error) {
        console.log(error)
    }

}

// pagina

let page = 1

const inputPage = document.getElementById("page")

inputPage.value = page

const btnPrevius = document.getElementById("previus")

const btnNext = document.getElementById("next")

btnNext.addEventListener("click", async () => {

    page += 1

    if(page > 42){
        page = 42
    }

    inputPage.value = page
    await  init(page)

})

btnPrevius.addEventListener("click", async () => {

    page -= 1

    if(page < 1){
        page = 1
    }

    inputPage.value = page
    await  init(page)

})

init(page)