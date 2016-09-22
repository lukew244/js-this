function exclaimName() {
  // What is the value of `this` the first time `exclaimName` is run?
  // What about the second time?
  // What about the third time?
  // Research project: what's the difference between call and apply?

  return this.name + "!";
};

console.log(exclaimName());

var exclaimMary = exclaimName.call({ name: "Mary" });
console.log(exclaimMary);

var exclaimIsla = exclaimName.apply({ name: "Isla" });
console.log(exclaimIsla);
