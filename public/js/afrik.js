const apiUrl = ' ';
const heading = document.querySelector('.heading') 

function mediaAfrik(){
    //Check for specific codes

    fetch(apiUrl)
    .then((response) => {
        if(response.status === 404){
            throw new Error('Not Found');
        }
        else if(response.status === 500){
            throw new Error('Sever error')
        }
        else if(response.status === 200){
            throw new Error('Request Filed')
        }
        return response;
    })
    .then(() => {
        console.log('success')
        heading.innerHTML = 'Request is Successful'
    })
    .catch((error) => {
        console.log(error)
       h1.innerHTML = `<p class= "text-xl text-center mb-5">${error}</p>`
    })
}