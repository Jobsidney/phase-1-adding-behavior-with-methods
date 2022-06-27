// Your code here

class Cat{
    constructor(name){
        this.name = name;
    }
    speak(){
        return`${this.name} says meow!`
    }
}
class Dog{
    constructor(name){
        this.name = name;
    }
    speak(){
        return `${this.name} says woof!`
    }
}
class Bird{
    constructor(name){
        this.name = name;
    }
    speak(){
        return `${this.name} says squawk!`
    }
}
const bird=new Bird('Pablo')
bird.speak()
const bird2=new Bird('Mable')
bird2.speak()
const dog=new Dog('Ruffio')
dog.speak()
const cat=new Cat('sasha')
cat.speak()