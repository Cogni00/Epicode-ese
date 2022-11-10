stampa = []; 

fetch("http://localhost:3000/minestrone").then(res=>res.json()).then((data)=>{
    stampa = data; 
    stampa.map((minestrone)=>{
        document.getElementById('data').innerHTML += `${minestrone.verdura} <br>`; 
    })

})

