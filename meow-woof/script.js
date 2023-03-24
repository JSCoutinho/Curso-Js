function confirmar(){
    var animal = window.document.getElementsByClassName("nome-animal")[0].value

    if(animal.toUpperCase() == "GATO"){
        var lugar = window.document.getElementsByClassName("container")[0]
        lugar.innerHTML = `<p>MIAUUU</p><img src="https://pbs.twimg.com/profile_images/2209676047/gatinho-5755_400x400.jpg">`
    }
    else if(animal.toUpperCase() == "CACHORRO"){
        var lugar = window.document.getElementsByClassName("container")[0]
        lugar.innerHTML = `<p>AU AU</p><img src="https://i0.wp.com/techwek.com/wp-content/uploads/2020/12/cachorro-fofo-e-peludo.jpg?resize=458%2C459&ssl=1">`
    }
}