function fun1(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        const error=true
        if(!error){
          console.log("Resolve")
          resolve()
        }
        else{
          console.log("Reject")
          reject()
        }
      },2000)
    })
  }
  
  fun1().then(()=>{
      console.log("Promise Resolve")
  }).catch(()=>{
      console.log("Promise Reject")
  })