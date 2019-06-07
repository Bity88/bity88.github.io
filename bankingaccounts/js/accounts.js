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






const account = (function(){
    "use strict";
    
    let accountInfolist = [];
    
    return{
        
        createAccount: function(accountinfo){
            return accountInfoList.push(accountinfo);
        },
        
        display: function(){
        
            return accountInfoList;
        }
      
        
    }
});

document.getElementById("button").onclick = function(){
    
    "use strict";
    
    let accName = document.getElementById("account_name").value;
    let bal = document.getElementById("deposit").value;

    console.log(accName);
    
    account.createAccount({name: accName, deposit: bal});
    
    account.display()
        .forEach((element)=>
                 document.getElementById("textarea").value += ("Account Name:"+element.name+ "Balance:" + element.balance));
    
    
}









