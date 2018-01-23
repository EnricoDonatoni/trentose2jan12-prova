exports.getArea = function(lati){
	
	var errore=0;

	if(lati.length==2){
		for(i=0; i<lati.length; i++){
			if(typeof(lati[i]) == "undefined"){
				errore=1;
			}
			else{
				if(lati[i] != parseInt(lati[i]) || lati[i] == "" || isNaN(lati[i])){
					errore=1;
				}
				else{
					if(lati[i]<0){
						errore=1;
					}

				}
			}
		}

	}
	else{
		errore=1;
	}

	if(errore==1){
		return (-1);
	}
	else{
		return (lati[0]*lati[1]);
	}


	
}