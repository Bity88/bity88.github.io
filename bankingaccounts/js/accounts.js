//let module = function(){
//    
//    "use strict";
//    let accountName;
//    let balance;
//    
//    function createAccount(name){
//        
//        accountName = name;
//        
//    }
//    
//    function deposit(bal){
//        balance = bal;
//    }
//    
//    return{
//        
//        account: function(account){createAccount(account);},
//        addbalance: function(bal){deposit(bal);},
//        value: function(){return "Account Name:"+ accountName+","+"Balance:"+balance;}
//    }
//    
//};
//              



//function load(){
//    
//let accountname = document.getElementById("account_name").value;
//let totalbalance = document.getElementById("deposit").value;
//document.getElementById("textarea").innerHTML = accountname;
//    
//}






const account =(function(){
    "use strict"
      const accountList=[];
      return{
           add:function(details){
               accountList.push(details);
           },
           display: function(){
             return accountList;
           }
      }
  })();
  
  document.getElementById("newAccount").onclick=function(){
    var account_name=document.getElementById("accountName").value;
    var deposit=document.getElementById("deposit").value;
    account.add({name: account_name, deposit: deposit});

      
    let x = account.display();
    account.display().forEach((element)=>{
      // console.log(element)
       document.getElementById("screen").value+=(`Account name: ${element.name}   Deposit: ${element.deposit}`+"\n");
    });
  }
  
  
  
  
  

  
  



