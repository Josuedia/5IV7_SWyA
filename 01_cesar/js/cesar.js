const desplazamiento=document.getElementById("desplazamiento");
const text=document.getElementById("texto");
const textocifrado=document.getElementById("cifrado");
//se crea una funcion para cifrar
function cifrado(){
    //declarar el texto mque se va aingresar
    const mitextoingresado=texto.value;
    //las funciones flecha es una alternativa a las funciones normales, no tiene argumentos, no es apto para invocar, es como una version lite. se usan para operaciones simplificadas, algo rapido
    textocifrafo.value = textoingresado.spliyt('').map(c => {
        //el ? es como unn if simplificado entrega esto ?(si) esto :(sino) este otro
    let mayus=(c===c.toUpperCase) ? true : false
    //esto valida los caracteres
    let valorentero= c.toLowerCase().charCodeAt(0);

    if(valorenterp >= 97 && valorentero <= 122){
        const valordesplazamiento= parseInt(desplazamiento.value);
        if(valorentero+valordesplazamiento >122 ){
            valorentero= 97 + (valorentero - 122) + valordesplazamiento - 1;
        }else {
            valorentero=valorentero+valordesplazamiento;
        }
    }
    let cifrado=String.fromCharCode(valorentero)
    return mayus ? cifrado.toUpperCase(): cifrado;
    }).join('');
    
}

texto.addEventListener("keyup", cifrado);
desplazamiento.addEventListener("change", cifrado)