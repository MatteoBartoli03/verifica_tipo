const fetch = require("node-fetch")

const es5 = () => {
    fetch("http://192.168.1.231:8080/esercizi/5", {
        headers: {
          "x-data": "true"
        },
    })
    .then(res => res.json())
    .then(resBody => {
      const reqData = resBody.data
        //
        //
        //
      console.log(risultato)
  
      return fetch("http://192.168.1.231:8080/esercizi/5", {
        method: "post",
        body: JSON.stringify({
          data: risultato
        }),
        headers: {
          "Content-Type": "application/json"
        }  
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}
es5()

const voto = () => {
    fetch("http://192.168.1.231:8080/voto", {
      method : "get",
      headers : {
        "x-data": "true"
      },
    })
    .then(res => res.json())
    .then(r => console.log(r))
    .catch(err => console.log(err))
}
voto()