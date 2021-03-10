function display(sum){
    console.log(sum)
  }
  function sum(a,b){
    return display(a+b)
  }
  
  sum(3,4,display)
  
  ///////////////////////////////////////////////


  function display(a,b,sum){
    console.log(sum(a,b))
  }
  function sum(a,b){
    return a+b
  }
  
  display(3,4,sum)