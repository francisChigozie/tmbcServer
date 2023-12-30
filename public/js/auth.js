const form = document.getElementById('contact-form')
const foot = document.getElementById('loggedIn-foot')
const contactImage = document.getElementById('loggedIn-logo')


function contactIcon(){

    const imgIcon = document.createElement('img')
    const div = document.createElement('div')
    const li = document.createElement('li')

    imgIcon.src = '/img/user-png-icon.png'
    imgIcon.alt = 'User-logo'
    imgIcon.caption = 'user login'
    
    imgIcon.style.width = '50px'

    
    div.style.lineHeight = '1.5px'
    div.appendChild(imgIcon)

    contactImage.appendChild(div)

 footLogo()

}

function footLogo(){
   
    setTimeout(() => {
        const imgFoot = document.createElement('img')
        const divFoot = document.createElement('div')
    
        imgFoot.src = '/img/logo.jpeg'
        imgFoot.alt = 'TMBC-logo'
    
        imgFoot.style.width = '70px'
        imgFoot.style.borderRadius = '5px'
    
        divFoot.appendChild(imgFoot)
    
        foot.appendChild(divFoot)
    },1000)

    }

    contactIcon()

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

      
    