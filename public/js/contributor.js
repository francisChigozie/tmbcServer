const display = document.querySelector('.contributor-profile')
const brandNew = document.querySelector('.newBrand-enhancement')
const newEnhanedBrand = document.querySelector('.new-enhancement')
const newPage = document.querySelector('.single-page')

let output;
let preference;
let single;
 
     fetch('/api/contributor').then((res) => {
    return res.json()
})
.then((data) => {

  const rr1 = (data.data[0])
  const rr2 = (data.data[1])
  const rr3 = (data.data[2])
  const rr4 = (data.data[3])
  const rr5 = (data.data[5])
  const rr6 = (data.data[5])
  const rr7 = (data.data[6])
  const rr8 = (data.data[7])
  const rr9 = (data.data[8])
  const rr10 = (data.data[9])
  const rr11 = (data.data[10])
  const rr12 = (data.data[11])

  output+= `
  <a href='/public/single01.html'><li><h3>${rr1.name}</h3></li></a><br>
  <a href='/public/single02.html'><li><h3>${rr2.name}</h3></li></a><br>
  <a href='/public/single03.html'><li><h3>${rr3.name}</h3></li></a><br>
  <a href='/public/single04.html'><li><h3>${rr4.name}</h3></li></a><br>
  <a href='/public/single05.html'><li><h3>${rr5.name}</h3></li></a><br>
  <a href='/public/single06.html'><li><h3>${rr6.name}</h3></li></a><br>
  <a href='/public/single07.html'><li><h3>${rr7.name}</h3></li></a><br>
  <a href='/public/single08.html'><li><h3>${rr8.name}</h3></li></a><br>
  <a href='/public/single09.html'><li><h3>${rr9.name}</h3></li></a><br>
  <a href='/public/single10.html'><li><h3>${rr10.name}</h3></li></a><br>
  <a href='/public/single11.html'><li><h3>${rr11.name}</h3></li></a><br>
  <a href='/public/single12.html'><li><h3>${rr12.name}</h3></li></a><br>
  `; 

  display.innerHTML = output
  
})

//initPreference(preference)
brandNew.classList = 'contributor-profile'

  window.addEventListener('scroll', () => {
      
    if(window.scrollY > 250){

      const newBrand = function(){

          display.classList.toggle('hidden')
          brandNew.classList = 'newBrand-enhancement'
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
      brandNew.classList = 'contributor-profile'
    } 

})  