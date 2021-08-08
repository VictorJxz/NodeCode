
const herox = {
    username : 'Wade',
    surname : 'Winston',
    power : 'Regeneration',
    getUsername() {
        return `${ this.username } ${this.username}  ${this.power}`;
    }
}


/* const username = hero.username;
const surname = hero.surname;
const power = hero.power; */

function printHero({username, surname, power, age = 0}) {
    username = 'Test';
    console.log( username, surname, power, age);
}

// printHero( herox );

const heroes = ['Deadpool','Superman', 'Batmant'];
/* const hero1 = heroes[0];
const hero2 = heroes[1];
const hero3 = heroes[2]; */
const [, , hero3] = heroes;


console.log( hero3 );


