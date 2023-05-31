const charsection = document.querySelector('.characters')

async function fetchData(){
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    console.log(data)
    data.results.forEach(function(character){
        console.log(character)
        
        //create a div element
        const container = document.createElement('div')

        //add a class to the div element
        container.classList.add('container')

        //add properties to the div Element
        container.innerHTML =`
        <div><img class="img" src="${character.image}"/></div>
        <h1 class="header">${character.name}</h1>
        <h2>${character.gender}</h2>
        <h3>${character.status}</h3>
        <h4>${character.species}</h4>
        
        `

        //append the div element to the body
        charsection.appendChild(container)
    })
 
 }

 fetchData()