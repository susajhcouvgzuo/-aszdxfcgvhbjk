pizzaListArray = [];

function getmenu()
	{    
        // Dê um nome apropriado ao id como pizzaName
        var item = document.getElementById("        ").value; 
       
        //Adicione a função push() para empurrar itens dentro para da array
        pizzaListArray.      (item);
        
        var removeCommas = pizzaListArray.join("<br># ");
        document.getElementById("displayMenu").innerHTML =  "# " + removeCommas;
	}