const a=[1,2,3,4]

c=a.reduceRight((sum,ele)=>{
  return sum+ele
})

d=a.reduceRight((sum,ele,cv,ci)=>{
  return sum+ele
},5)


console.log(c)
console.log(d)