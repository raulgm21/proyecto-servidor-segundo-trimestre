var formu = document.getElementById("user-form"); 
alert(formu);

formu.onsubmit = e => {
        
    e.preventDefault();  
    alert("Entro");          
}
