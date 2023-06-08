const charsection = document.querySelector('.characters')
const allCharacters = document.querySelector('.allchar')

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
        <h3>${character.location.name}</h3>
        <h4>${character.species}</h4>
        <a class="Link">View Character details</a>
        
        `
        const link= container.querySelector('.link')
        link.addEventListener('click', async function(){
            try{
                const response = await fetch(`https://rickandmortyapi.com/api/character`)
                const data = await response.json()
    
                localStorage.setItem('character',JSON.stringify(character))
                window.open('character.html', '_blank')
            }catch(error){
                console.log(error )
            }
           
        })
        
        //append the div element to the body
        allCharacters.appendChild(container)
    })
 
 }

 fetchData()