
var createBicyclePrototype = function(){
     "use strict";
    let speed;
    return{
    speed: 0,

    applybrake:function(brake){
         this.speed-=brake;
         console.log(this.speed);
    },


    speedup: function(up){
         this.speed+=up;
         console.log(this.speed);
    }

    };
};






const createMountainBikePrototype = function(prototype){
     let obj = Object.create(prototype);
    
         obj.gear = 1;
          obj.setGear = function(value){
               this.gear = value;
               console.log(this.gear);
          }
     

     return obj;



     }


const start = function(){
     'use strict';
     

          let bicycleprototype = new createBicyclePrototype();
     
          let mountainBikePrototype = new createMountainBikePrototype(bicycleprototype);
     
        // console.log(bicycleprototype.applybrake(1));

          let bicycle = Object.create(bicycleprototype);
          let bike = Object.create(mountainBikePrototype);

          bicycle.applybrake(2);
          bicycle.speedup(5);

          bike.setGear = 4;

          
          


};

start();


    
