class User {
  constructor(_firstName, _lastName, _age, _location = []) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  ageComparison(y) {
    if (this.age > y.age) {
      return `Il signor ${this.firstName} è più vecchio di ${y.firstName}`;
    } else if (this.age < y) {
      return `Il signor ${this.firstName} è più giovane di ${y.firstName}`;
    } else {
      return `Il signor ${this.firstName} è  coetaneo con di ${y.firstName}`;
    }
  }
}

const utente1 = new User("Ciccio", "Pasticcio", 38, "Calisota");

const utente2 = new User("Marpo", "Cirop", 79, "Quebec");
const utente3 = new User("Donaldo", "Trampolo", 79, "Nuova Yorka");

console.log(utente1.ageComparison(utente2));
console.log(utente2.ageComparison(utente1));
console.log(utente3.ageComparison(utente2));
