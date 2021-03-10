const ar=[1,[2],[3],]

a=ar.flatMap((ele)=>{
  return ele*2
})
document.write(JSON.stringify(a))
