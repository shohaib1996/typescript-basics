{
  const name: string = "shohaib";
  const age: number = 22;
  let isStudent: boolean = true;

  isStudent = true;

  //   console.log(name, age, isStudent);

  function add(num1: number, num2: number) {
    return num1 + num2;
  }

  //   console.log(add(2, "3"));

  function greet(name: string, prefix: string = "Mr.") {
    return `Hello ${prefix} ${name}`;
  }
  console.log(greet("Shohaib", "Eng."));
}
