function valider(){
    var nbr = parseInt(document.getElementById("age").value)

    if (nbr>=18) { 
        alert("vous etes majeur")
        
    } else {
        alert("vous etes mineur")
    }

}

