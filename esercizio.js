class User {
  constructor(_firstName, _lastName, _age, _location = []) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  ageComparison(y) {
    if (this.age > y) {
      return `Il signor ${this.firstName} è più vecchio dell'altro tizio`;
    } else if (this.age < y) {
      return `Il signor ${this.firstName} è più giovane dell'altro tizio`;
    } else {
      return `Il signor ${this.firstName} è  coetaneo dell'altro tizio`;
    }
  }
}

const utente1 = new User("Ciccio", "Pasticcio", 38, "Calisota");

const utente2 = new User("Marpo", "Cirop", 79, "Quebec");
const utente3 = new User("Donaldo", "Trampolo", 79, "Nuova Yorka");

console.log(utente1.ageComparison(utente2.age));
console.log(utente2.ageComparison(utente1.age));
console.log(utente3.ageComparison(utente2.age));
