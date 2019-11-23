function Father(bloodType) {
    this.bloodType = bloodType;
}
Father.prototype.wife = "miss"
function Son(name,age,phone){
    Father.call(this,"A");
    this.name = name;
    this.age = age;
    this.mother = Father.prototype.wife;
    this.phone = phone;
}
function Daughter(name,age,phone){
    Father.call(this,"A");
    this.name = name;
    this.age = age;
    this.mother = Father.prototype.wife;
    this.phone = phone;
}
let Son1 = new Son("mike","5","15110518746");
Object.defineProperties(Son1,{
    "name" : {configurable: false,
        enumerable: false,
        writable: false},
    "bloodType" : {
        configurable: false,
        enumerable: false,
        writable: false}
})
let Daughter1 = new Daughter("mier","15","15110518746")
Object.defineProperties(Daughter1,{
    "name" : {configurable: false,
        enumerable: false,
        writable: false},
    "bloodType" : {
        configurable: false,
        enumerable: false,
        writable: false}
})
console.log(Son1)
console.log(Daughter1)