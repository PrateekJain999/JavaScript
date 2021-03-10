const me={
    name:"Prateek",
    uid:"17BCS4110"
  }
  
  const you={
    name:"Prateek",
    uid:"17BCS4110"
  }
  
  const we=me
  
  console.log(Object.is(me,you))
  console.log(Object.is(me,we))