function giraffe(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "Giraffe";
    this.image = "giraffe.png";
  }

function dolphin(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "Dolphin";
    this.image = "dolphin.png";
  }

  function monkey(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "Monkey";
    this.image = "monkey.png";
  }

let animals = [new giraffe(), new dolphin(), new monkey()];
let names = ["bonnie", "danny", "george", "josh", "bella", "chloe"];

function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomAnimal() {
  let randomIndex = generateRandomIndex(animals.length);
  let randomAnimal = animals[randomIndex];

  if (randomAnimal instanceof giraffe) 
  {
    return new giraffe(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof dolphin) 
  {
    return new dolphin(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof monkey) 
  {
    return new monkey(generateRandomName(), generateRandomAge());
  }
}

function generateRandomName() {
  let randomIndex = generateRandomIndex(names.length);
  return names[randomIndex];
}

function generateRandomAge() {
  return generateRandomIndex(5);
}

function onLoad() {
  let animal = generateRandomAnimal();
  console.log(animal);
  document.getElementById("animal-properties").textContent = animal.name + " " + animal.age + " years old";
  let imageTag = document.getElementById("animal-img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);
}