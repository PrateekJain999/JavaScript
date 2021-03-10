const a=[1,2,3,4]

c=a.reduce((sum,ele)=>{
  return sum+ele
})

d=a.reduce((sum,ele)=>{
  return sum+ele
},5)


console.log(c)
console.log(d)