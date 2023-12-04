/*
class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }

    ageComparison(User) {
        if (this.age > User.age) {
            console.log(`${this.firstName} più grande di ${User.firstName}`);
        } else if (this.age < User.age) {
            console.log(`${this.firstName} più giovane di ${User.firstName}`);
        } else {
            console.log(`${this.firstName} e ${User.firstName} hanno la stessa età`);
        }
    }
}

const utente1 = new User('Giovanni', 'Muciaccia', 25, 'Milano');
const utente2 = new User('Ernesto', 'Manolesto', 25, 'Napoli');

utente1.ageComparison(utente2);
*/

class pet {
  constructor(_petName, _ownerName, _species, _breed){
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
}

