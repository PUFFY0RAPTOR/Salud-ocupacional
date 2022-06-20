const buttom = document.getElementById('button1')
const input= document.querySelector('input')


buttom.addEventListener('click', (e) => {
    e.preventDefault();
    /*crearComentario(input.value)*/
    console.log(input.value)
})

function crearComentario(inputcito) {
    
        document.getElementById("divs").innerHTML +=
        '<div class="product-container"id="tarjetica">'+
        '<div class="col s12 m2">'+
        '<div class="card"><div class="card-image"><img src="'+json.image+'" id="imagen2"><span class="card-title"></span></div>'+
        '<div class="card-content"><strong id="titulo1">'+json.title+'</strong><br><strong>'+json.price+'</strong>'+
        '<p id="descripcion">'+json.description+'</p>'+
        '</div></div></div></div>';
}

