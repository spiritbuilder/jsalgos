class myself {
  name: string;
  Age: number;
  originalAge: number;
  constructor(name = "timothy", Age = 45) {
    this.name = name;
    this.Age = Age;
    this.originalAge = Age;
  }
  incrementAge(number = 1) {
    let { Age, name } = this;
    if (Age - this.originalAge < 3 && Age < 45) {
      this.Age = Age + number;
      console.log(this.Age, name);
    } else {
      console.log("cant increase Age any more", name);
    }
  }

  decrementAge(number = 1) {
    let { Age, name } = this;
    let newAge = Age - number;
    if (Age > 20 && Age < 50 && newAge > 20) {
      this.Age = newAge;
      console.log(this.Age, name, " from ", Age);
    } else {
      console.log("cant decrease Age any more", name);
    }
  }
}

let me = new myself("Tim", 27);
let another = new myself("Mike", 46);

const makeSomethingHappen = (
  obj: { Age: number; decrementAge: (num: number) => void; name: string },
  num: number = 1
) => {
  obj.decrementAge(num);
};

export { me, another, makeSomethingHappen };
