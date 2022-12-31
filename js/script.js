var texto = document.querySelector("textarea");
    var informacion = document.getElementById('textoEncriptado');
    var arrayPalabras = [];

    function encriptar(){

        var textoEncriptado = arrayPalabras;

        for ( var i=0; i<texto.value.length; i++){
            //se asigna la palabra encriptada por vocal y se crea array de la palabra nuevas
            switch(texto.value[i]){
                case 'A':
                case 'a':
                    arrayPalabras[i]='ai'; 
                    break;
                case 'E':
                case 'e':
                    arrayPalabras[i]='enter';
                    break;
                case 'I':
                case 'i':
                    arrayPalabras[i]='imes';
                    break;
                case 'O':
                case 'o':
                    arrayPalabras[i]='ober';
                    break;
                case 'U':
                case 'u':
                    arrayPalabras[i]='ufat';
                    break;
                default:
                    arrayPalabras[i] = texto.value[i];
            }
        }

        document.getElementById("muneco").style.display = "none"; //oculta la imagen
        document.getElementById("tituloSinMensaje").style.display = "none"; //oculta el titulo
        document.getElementById("textoSinMensaje").style.display = "none"; //oculta el texto informativo

        informacion.innerHTML = textoEncriptado.join(''); //join ayuda a eliminar las comas de separación del array
        document.getElementById("textoEncriptado").style.display = "block"; //muestra el textarea. Por defecto oculto
        
    }




    const letras = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

    function desencriptar(){

        var textoDigitado = texto.value;
        
        let Encriptado = "";
        for (var obj in letras) {
            Encriptado = textoDigitado.replaceAll(letras[obj],obj);
            textoDigitado = Encriptado;        
        }

        document.getElementById("muneco").style.display = "none"; //oculta la imagen
        document.getElementById("tituloSinMensaje").style.display = "none"; //oculta el titulo
        document.getElementById("textoSinMensaje").style.display = "none"; //oculta el texto informativo

        informacion.innerHTML = Encriptado; //join ayuda a eliminar las comas de separación del array
        document.getElementById("textoEncriptado").style.display = "block"; //muestra el textarea. Por defecto oculto
    }


    function copiarTexto(){

        // Crea un campo de texto "oculto"
        var aux = document.createElement("input");

        // Asigna el contenido del elemento especificado al valor del campo
        aux.setAttribute("value", document.getElementById('textoEncriptado').innerHTML);

        // Añade el campo a la página
        document.body.appendChild(aux);

        // Selecciona el contenido del campo
        aux.select();

        // Copia el texto seleccionado
        document.execCommand("copy");

        // Elimina el campo de la página
        document.body.removeChild(aux);

        // Muestra mensaje que el texto se copio al portapapeles
        alert("Texto copiado al portapapeles");

        document.getElementById("textArea").value = ""; //limpia el textarea
        document.getElementById("textoEncriptado").value = ""; //limpia el textarea

        

    }
   

    var encriptarB = document.querySelector(".encriptar");
    encriptarB.onclick=encriptar;

    var desencriptarB = document.querySelector(".desencriptar");
    desencriptarB.onclick=desencriptar;

    var copiar = document.querySelector(".copiarTexto");
    copiar.onclick=copiarTexto;

    copiar.addEventListener('click', _ => { //refrescamos la página para que el usuario vuelva a utilizarla
        location.reload();
    })


