function wxSignature(noncestr,jsapi_ticket,timestamp,url){
	     var  array = [noncestr,jsapi_ticket,timestamp,url];
	     var  key = [4];
	     key[array[0]]='noncestr';
	     key[array[1]]='jsapi_ticket';
	     key[array[2]]='timestamp';
	     key[array[3]]='url';
	     strSort(array);
	     var  str = "";
	     for(k=0;k<array.length;k++){
	    	    str+=key[array[k]]+'='+array[k];
	    	    if(k<array.length-1){
	    	    	 str+='&';
	    	    }
	     }
	     alert(str)
	     return $.sha1(str);
}

function strSort(array){
	   for( i=0;i<array.length-1;i++){
		      for(j=i+1;j<array.length;j++){
		    	      if(array[i]>array[j]){
		    	    	  var  temp = array[i];
		    	    	   array[i]=array[j];
		    	    	   array[j]=temp;
		    	      }
		      }
	   }
}