    
let boton = document.getElementById('boton-busqueda');
let botonDesplegable = document.getElementById('boton-desplegable');


botonDesplegable.onclick=(event)=>{
    event.preventDefault();
    console.log('pruebas');
    nombreDeLista();
}
let indicaNombre=document.getElementById('personajes')

function nombreDeLista(){
    
    //console.log('pruebas1');
    fetch (`https://www.potterapi.com/v1/characters?key=$2a$10$/o8X0d0joxtMcw8aNKMWFOWQ4mKd0KMmfekqCUzp4qugGffmZwc4C&name=${indicaNombre.value}`)
    .then(response=>response.json())
    .then(data=>{console.log(data)
    
        document.getElementById('personaje').innerHTML = data[0].name;
        document.getElementById('rol').innerHTML = data[0].role;
        document.getElementById('casa').innerHTML = data[0].house;
        document.getElementById('sangre').innerHTML = data[0].blood;
        document.getElementById('especie').innerHTML = data[0].species;
        document.getElementById('ministerio').innerHTML = data[0].ministryOfMagic;
        document.getElementById('fenix').innerHTML = data[0].orderOfThePhoenix;
        document.getElementById('dumbledore').innerHTML = data[0].dumbledoresArmy;
    
    });
}
   
boton.onclick=(event)=>{
    event.preventDefault();//sirve para que no haga un reload de la pagina
//console.log("hola",event)
    busquedaNombre()
} 
let persoBusca = document.getElementById('busqueda');

function busquedaNombre(){

    
    fetch(`https://www.potterapi.com/v1/characters?key=$2a$10$/o8X0d0joxtMcw8aNKMWFOWQ4mKd0KMmfekqCUzp4qugGffmZwc4C&name=${persoBusca.value}`)
    .then (response=>response.json())
    .then (data=>{ console.log(data)
        
        document.getElementById('personaje').innerHTML = data[0].name;
        document.getElementById('rol').innerHTML = data[0].role;
        document.getElementById('casa').innerHTML = data[0].house;
        document.getElementById('sangre').innerHTML = data[0].blood;
        document.getElementById('especie').innerHTML = data[0].species;
        document.getElementById('ministerio').innerHTML = data[0].ministryOfMagic;
        document.getElementById('fenix').innerHTML = data[0].orderOfThePhoenix;
        document.getElementById('dumbledore').innerHTML = data[0].dumbledoresArmy;
        
    })
    
}
    