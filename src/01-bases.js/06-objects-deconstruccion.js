const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}

/* ---------------------------------------------------------------------- */

// const {name, age, codeName, power = 'No tiene poder'} = person;

// console.log(name);
// console.log(age);
// console.log(codeName);
// console.log(power);

/* ---------------------------------------------------------------------- */

const createHero = ({name:nombre, age, codeName, power = 'El del dinero'}) => 
    ({
        id: 11231941156,
        nombre,
        age,
        codeName,
        power,
    });

console.log(createHero(person));

/* ---------------------------------------------------------------------- */