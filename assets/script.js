
   document.getElementById('submit').onclick =  function Check() {

    
       var Result = 0;
       if (document.getElementById('option12').checked == true) {
           Result++;
       }
        
        else Result += 0;
       
        if (document.getElementById('option23').checked == true) {
           Result++;
       }
       
          else Result += 0;
        
        if (document.getElementById('option31').checked == true) {
           Result++;
       }
       
          else Result += 0;
        
        console.log(Result);
        
        document.getElementById("result").innerHTML = Result;
       
        
        document.getElementsByName('radio').checked = false;
    }