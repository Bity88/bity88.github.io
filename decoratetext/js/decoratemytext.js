/**
 * 
 */
let a = function blingFunction(){
    'use strict';
        let bling = document.getElementById("bling");
        let textArea = document.getElementById("mytext");
     
            if(bling.checked ===true){
                textArea.style.fontWeight = "bold";
                textArea.style.color = "green";
                textArea.style.textDecoration = "underline";
            }  
    
            else{
                textArea.style.fontWeight = "Normal";
            }
    
    
    };
    
    a;
    
    
    
    let button = document.getElementById("ok");
    let click = false;
    let timer;
      
        button.onclick = function(){
        'use strict';
            if (click) {
                click = false;
                clearInterval(timer);
                
    
                
                }
            
           else{
            click = true;
                 timer = setInterval(b, 2000);
                
           }
        };
    
        
    
    
           
               
        
    
    /**
     * 
     */
        let b = function myFunction(){
            'use strict';
            let textArea = document.getElementById("mytext");
           
           
            let fontsize = window.getComputedStyle(textArea,null).getPropertyValue("font-size");
             textArea.style.fontSize = parseInt(fontsize) + 2 + "px";
        
        
        
        };
    
    
    
    
    
    
        
    
    
    
    
    
    
    
               
            
    
           
    
           
        
    
           
    
        
    
      
            
        
        
    
    
    
    
    