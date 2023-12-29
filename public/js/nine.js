const newPage = document.querySelector('.contributor-profile')
const brandNew = document.querySelector('.newBrand-enhancement')
const newEnhanedBrand = document.querySelector('.new-enhancement')

let showContributor;

// Show Single Contributor

async function initPreference(){

  await fetch(`/api/contributor`).then((res) => {
    return res.json()
})
.then((data) => {

  const three =(data.data[8])
 
    showContributor += `
    <li><h3>${three.name}</h3></li><br><li>${three.text}`; 
     
    newPage.innerHTML = showContributor;

})

} 
document.addEventListener('DOMContentLoaded', initPreference)

brandNew.classList = 'contributor-profile'

window.addEventListener('scroll', () => {
      
  if(window.scrollY > 200){

    const newBrand = function(){

        newPage.classList.toggle('hidden')
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

      newEnhanedBrand.innerHTML = showContributor;

    },5000)
     
  }
   else{
    brandNew.classList = 'contributor-profile'
  } 

}) 