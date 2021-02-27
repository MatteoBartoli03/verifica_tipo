const fetch = require("node-fetch")

const accreditamento = () => {
  fetch("http://192.168.1.231:8080/accreditamento", {
      method: "post",
      body: JSON.stringify({
        nome: "Matteo Bartoli"
      }),
      headers: {
        "Content-Type": "application/json"
      },
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}
accreditamento()