const global = {currentPage: window.location.pathname,}
const links = document.querySelectorAll('.nav-link')
const newLinks = Array.from(links)
console.log(links)

async function displayPopularMovie(){
    const {results} = await fetchAPIData('movie/popular')

    console.log(results)
}

// fetch data from TMDB
async function fetchAPIData(endpoint){
    const API_KEY = '1bd002d7e7d3a76c0d235a8778c0f84e'
    const API_URL = 'https://api.themoviedb.org/3/'

    const response = fetch(`${API_URL}${endpoint}?api_key${API_KEY}`)

    const data = await response.json()

    return data
}

function highlightActiveLink(){
    
    links.forEach((link) => {
        if(link.getAttribute('href') === global.currentPage){
            link.classList.add('active')
        }
    })
}

function init(){
    switch(global.currentPage){
        case '/' :
        case '/index.html' :   
          console.log('Home')
            break;
        case '/public/nig.html' :
            console.log('Nigeria')  
            break; 
        case '/public/afrik.html' :
            console.log('Africa')  
            break;  
        case '/public/edit.html' :
            displayPopularMovie() 
            //console.log('World')  
            break;       
        case '/search.html' :
            console.log('Search')  
            break;             
    }

    highlightActiveLink()
}

document.addEventListener('DOMContentLoaded', init)

