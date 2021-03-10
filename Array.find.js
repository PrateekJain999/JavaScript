const ar=[1,2,3,4]

a=ar.find((ele)=>{
  return ele>1
})

const check=(n)=>{
  if(n>2){
    return n;
  }
}
b=ar.find(check)
console.log(a)
console.log(b)
console.log(ar)