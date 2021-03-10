const a=[1,2,3,4]

c=a.some((ele)=>{
  return ele>5
})

console.log(c)

d=a.some((ele)=>{
  return ele>3
})

console.log(d)