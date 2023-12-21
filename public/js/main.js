const foot = document.getElementById('footer')
const homeImage = document.getElementById('home-image')
const imageLogo = document.getElementById('logo')
const container =  document.querySelector('.main-nav')
const menu =  document.querySelector('.menu-wrap')

const menuDiv = document.createElement('div')
const menuLi = document.createElement('li')

function imageIcon(){

    const imgIcon = document.createElement('img')
    const div = document.createElement('div')
    const li = document.createElement('li')
    const liCon = document.createElement('li')
    const liBusi = document.createElement('li')
    const aTag = document.createElement('a')
    const aCon = document.createElement('a')
    const aBusi = document.createElement('a')

    aTag.href = './thetmbcmonthly.html'
    aTag.id = 'monthly'
    aTag.className = 'tmbc-monthly'
    aTag.innerText = 'The Previous Editions'
    aTag.style.color = 'darkBlue'

    aCon.href = './conference.html'
    aCon.id = 'conference'
    aCon.className = 'tmbc-conference'
    aCon.innerText = 'The TMBC Conferences'
    aCon.style.color = 'darkBlue'

    aBusi.href = './thetmbcbusinessmonthly.html'
    aBusi.id = 'business'
    aBusi.className = 'tmbc-business'
    aBusi.innerText = 'The TMBC Business Monthly - Current Edition'
    aBusi.style.color = 'darkBlue'

    li.style.listStyle = 'none'
    li.appendChild(aTag)

    liCon.style.listStyle = 'none'
    liCon.appendChild(aCon)

    liBusi.style.listStyle = 'none'
    liBusi.appendChild(aBusi)

    imgIcon.src = '../img/user-png-icon.png'
    imgIcon.alt = 'User-logo'
    imgIcon.caption = 'user login'
    
    imgIcon.style.width = '50px'

    
   // div.style.lineHeight = '1.5px'
    div.appendChild(imgIcon)
    imageLogo.appendChild(liBusi).textContent
    imageLogo.appendChild(li).textConten
    imageLogo.appendChild(liCon).textContent
    
    homeImage.appendChild(div)

   footLogo()

}

function footLogo(){
   
    setTimeout(() => {
        const imgFoot = document.createElement('img')
        const divFoot = document.createElement('div')
    
        imgFoot.src = '../img/logo.jpeg'
        imgFoot.alt = 'TMBC-logo'
    
        imgFoot.style.width = '70px'
        imgFoot.style.borderRadius = '5px'
    
        divFoot.appendChild(imgFoot)
    
        foot.appendChild(divFoot)
    },1000)

    }
imageIcon()

 class Modal {
    constructor() {
      this._modal = document.querySelector('#modal');
      this._modalBtn = document.querySelector('#modal-btn');
      this.addEventListeners();
    }
  
    addEventListeners() {
      this._modalBtn.addEventListener('click', this.open.bind(this));
      window.addEventListener('click', this.outsideClick.bind(this));
      document.addEventListener('closemodal', () => this.close());
    }
  
    open() {
      this._modal.style.display = 'block';
    }
  
    close() {
      this._modal.style.display = 'none';
    }
  
    outsideClick(e) {
      if (e.target === this._modal) {
        this.close();
      }
    }
  }

  new Modal()
 

