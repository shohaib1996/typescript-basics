{
  function display(id: string | number | boolean) {
    console.log(`ID: ${id}`);
  }

  display("21");
  display(21);
  display(true);

  let direction: "right" | "left";
  direction = "right";
}
