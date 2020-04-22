
const name = 'Bartek Świder';
const age = 29;

console.log(`Witaj w consoli na tej stronie ja nazywam się ${name} i mam ${age} lat. Miło cię poznać`);

function welcome(name, lastName) {
    const name1 = name;
    const lastName1 = lastName;

    alert (`Witaj ${name1} ${lastName1} na mojej stronie`);
}

welcome(prompt("Podaj swoje imię"), prompt("Podaj swoje Nazwisko"));
