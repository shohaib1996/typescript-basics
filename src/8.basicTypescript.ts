{
  //   interface Animal {
  //     name: string;
  //   }
  //   interface Dog extends Animal {
  //     breed: string;
  //   }
  //   const dog: Dog = { name: "Dog", breed: "Pug" };

  interface User {
    id: number;
    name: string;
    email: string;
  }
  const updateUser: Partial<User> = { name: "Farah" };
}
