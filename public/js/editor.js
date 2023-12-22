const display = document.querySelector('.editor-profile')
const brandNew = document.querySelector('.editorial-enhancement')
const newEnhanedBrand = document.querySelector('.new-editorial')

let output;

      fetch('/api/editor').then((res) => {
          return res.json()
      })
      .then((data) => {

        console.log(data)
        
        data.data.forEach(element => {

          output += `<li><h3>${element.name}</h3></li><p>${element.text}</p><br>`;
         
         display.innerHTML = output;

        });
      })

      brandNew.classList = 'editor-profile'

     
        window.addEventListener('scroll', () => {
            
          if(window.scrollY > 250){

            const newBrand = function(){

                display.classList.toggle('hidden')
                brandNew.classList = 'editorial-enhancement'
                brandNew.innerHTML = `
                <img src="/img/access-bank-logo.png" alt="access-bank-logo" width="80">
                <img src="/img/dangote-refinary.jpeg" alt="dangote_refinary-logo" width="80">
                <img src="/img/group-bank.jpeg" alt="group-bank-logo" width="80">
                <img src="/img/nigerian-breweries.jpeg" alt="nigerian-breweris-logo" width="80">
                <img src="/img/uba-bank.jpeg" alt="uba-bank-logo" width="80">
                <img src="/img/nnpc.png" alt="nnpc-logo" width="80">
                <img src="/img/ecobank.jpeg" alt="econ-bank-logo" width="80">
                <img src="/img/youth-corper.jpeg" alt="youth-corper-logo" width="80">
                <img src="/img/dangote-cement.jpeg" alt="dangote_cement-logo" width="80">
                <img src="/img/nigerian-lng.jpeg" alt="nigerian-lng-logo" width="80"> `   

            }
            newBrand()

            const clearNewBrand= function(e){ 
              setTimeout(() => {
                brandNew.innerHTML = ''
                
              },5000)
            
            }
            clearNewBrand()

            

            setTimeout((e) => {

              newEnhanedBrand.innerHTML =output;

            },5000)
             
          }
           else{
            brandNew.classList = 'editor-profile'
          } 

      }) 



/* function init(){
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

 */