//encapsulation using well_accepted conventions
class Animal{
    constructor(legs){
        this._legs = legs;
    }
    getLegs = () => this._legs

    setLegs =(value)=>{
        if (typeof value === "number")
            this._legs = value;
        else
            console.log("The number of legs has to be numerical.")
    }
}

const cat = new Animal(4)
console.log(cat._legs)

cat.setLegs("8")
console.log(typeof cat._legs)


//Encapsulation using closures
class Dog extends Animal{
    constructor(legs, animalName) {
        super(legs)
        let name = animalName
        this.getName = () => name
        this.setName = (value) => name = value
    }
}

const cerberus = new Dog(4, "Cerberus")
console.log(cerberus.name) //logs undefined
console.log(cerberus.getName()) //logs value of the name property
console.log(cerberus.getLegs()) //since the Dog class extends the 
                                //parent animal class, it has access
                                //to the parent getLegs function.


class Snake extends Dog{
    constructor(legs, animalName, animalLength, yearsLived){
        super(legs, animalName);
        let _length = animalLength;
        let _yearsLived = yearsLived;
        let _randomConstant = 10;

        this.setLength = (value)=> _length = value          
        

        this.getLength = () => _length

        this.setYearsLived=()=>{
             _yearsLived = this.getLength()/_randomConstant;
        }

        this.getYearsLived = () => _yearsLived
    }
}