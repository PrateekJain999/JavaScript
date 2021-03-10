const me = {};  

me.uid = "17BCS4110";  
  
console.log(  
    me.hasOwnProperty("uid")  
);   

Object.preventExtensions(me);  
me.name = "Prateek";  
  
console.log(  
    me.hasOwnProperty("name")  
);   