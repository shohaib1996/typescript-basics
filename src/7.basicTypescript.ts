{
  function identify<T>(value: T): T {
    return value;
  }

  console.log(identify<string>("Hello, World!"));
  console.log(identify<number>(43));
}
