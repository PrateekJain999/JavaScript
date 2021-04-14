async function main(x){
    console.log('1');
    try{
       await delay(x)
    }
    catch(err){
       console.log(err)
    }
    console.log('2');
 }
 
 async function delay(x){
    return new Promise((res,rej)=>{
       setTimeout(() => {
          res();
       }, x);
    });
 }
 main(2000);