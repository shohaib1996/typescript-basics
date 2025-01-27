{
  function add(a: number, b: number): number {
    return a + b;
  }

  //   console.log(add(5, 5));
  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    greet(): void {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    }
  }
  const person = new Person("John", 25);
  console.log(person.greet());
}
