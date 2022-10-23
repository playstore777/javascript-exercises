const findTheOldest = function(people) {
    let oldestPerson = '';
    let oldestPersonAge = -Infinity;
    people.forEach(person => {
        let DOB = person.yearOfBirth;
        let DOD = person?.yearOfDeath ?? new Date().getFullYear(); // if DOD not available then current year!
        let personAge = DOD - DOB;

        if (personAge > oldestPersonAge) {
            oldestPersonAge = personAge;
            oldestPerson = person;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
