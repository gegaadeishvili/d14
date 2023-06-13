const characters = [
    {
      name: "gega",
      height: "172",
      mass: "77",
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "murtazi",
      height: "202",
      mass: "136",
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leila",
      height: "150",
      mass: "49",
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "malxazi",
      height: "188",
      mass: "84",
      eye_color: "blue",
      gender: "male",
    },
  ];
  
  function findCharacter(name) {
    const character = characters.find((char) => char.name === name);
  
    if (character) {
      console.log(`${name} has been found.`);
      console.log(`Age: ${character.height}`);
      console.log(`Eye color: ${character.eye_color}`);
    } else {
      console.log(`${name} not found in the array.`);
    }
  }
  
  
  findCharacter("Leila");
  