{
  function printId(id: number | string) {
    if (typeof id === "number") {
      console.log("ID: is a number" + id);
    } else {
      console.log("ID: is a string" + id);
    }
  }

  console.log(printId("101"));
}
