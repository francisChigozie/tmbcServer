import axios from "axios"

axios.get("https://servertmbc-310782056bbb.herokuapp.com/api/contributor").then((data) => {
    console.log(data)
})