const nigeriaNews = document.querySelector('.nigeria-news')
const menu = document.querySelector('.menu')
const brand = document.querySelector('.brand-enhancement')
const h3 = document.querySelector('h3')

const div = document.createElement('div')
const li = document.createElement('li')
const a = document.createElement('a')

const generteBrnd = function(){
    brand.innerHTML = `
    <img src="/img/access-bank-logo.png" alt="access-bank-logo" width="80">
    <img src="/img/dangote-refinary.jpeg" alt="dangote_refinary-logo" width="80">
    <img src="/img/group-bank.jpeg" alt="group-bank-logo" width="80">
    <img src="/img/nigerian-breweries.jpeg" alt="nigerian-breweris-logo" width="80">
    <img src="/img/uba-bank.jpeg" alt="uba-bank-logo" width="80">
    <img src="/img/nnpc.png" alt="nnpc-logo" width="80">
    <img src="/img/ecobank.jpeg" alt="econ-bank-logo" width="80">
    <img src="/img/youth-corper.jpeg" alt="youth-corper-logo" width="80">
    <img src="/img/dangote-cement.jpeg" alt="dangote_cement-logo" width="80">
    <img src="/img/nigerian-lng.jpeg" alt="nigerian-lng-logo" width="80">
    `
}
generteBrnd()

const clearBrand = function(){ 
    setTimeout(() => {
        brand.classList.remove('brand-enhancement')
        brand.innerHTML = ''
    },5000)
}
    
document.addEventListener('DOMContentLoaded', clearBrand)