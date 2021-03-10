class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    detail() {
        console.log(this.id + " " + this.name)
    }
}
var e1 = new Employee(101, "Martin Roy");
var e2 = new Employee(102, "Duke William");
e1.detail();
e2.detail();

////////////////////////////////////////////////////////////////
var emp1= class Employee{
    constructor(name){
      this.name=name;
    }
    getName(){
      console.log(this.name)
    }
  }
  
  const e1= new emp1("Prateek")
  e1.getName()
  
  var emp1=class  Employee{
    constructor(Uid){
      this.Uid=Uid;
    }
    getUid(){
      console.log(this.Uid)
    }
  }
  
  const e2= new emp1("17BCS4110")
  e2.getUid()