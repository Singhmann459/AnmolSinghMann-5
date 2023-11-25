class Car {
    constructor(brand, model, year, color, price, gas) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
      this.price = price;
      this.gas = gas;
    }
  
    honk() {
      console.log("Tuut tuut");
      console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: ${this.price}`);
    }
  
    race() {
      for (let i = 0; i < 7; i++) {
        let gasLoss = 5;
        if (new Date().getFullYear() !== this.year) {
          const yearsDifference = new Date().getFullYear() - this.year;
          gasLoss += yearsDifference;
        }
        this.gas -= gasLoss;
        console.log(`After turn ${i + 1}, ${this.brand} ${this.model} has ${this.gas} litres of gas remaining.`);
      }
    }
  }
  
  // Create instances of Car
  const honda = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
  const ford = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
  const bmw = new Car("BMW", "X5", 2022, "Green", 60000, 65);
  const mazda = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
  const audi = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
  const kia = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);
  
  // Invoke the honk method for each car
  honda.honk();
  ford.honk();
  bmw.honk();
  mazda.honk();
  audi.honk();
  kia.honk();
  
  // Perform the race for each car
  honda.race();
  ford.race();
  bmw.race();
  mazda.race();
  audi.race();
  kia.race();
  