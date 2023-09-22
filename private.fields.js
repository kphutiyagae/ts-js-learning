class Car {
  #name;
  constructor(value) {
    this.#name = value;
  }

  get name() {
    return `This bad boy is a ${this.#name}`;
  }
}

const newCar = new Car("Ferrari");

console.log(newCar.name);

newCar.name = "Ford";

console.log(newCar.name); //Should still output Ferrari since the field is not accessable from outside of class without stter
