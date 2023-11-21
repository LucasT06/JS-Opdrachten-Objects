//opdracht 1
let persoon = {
    voornaam: 'joe',
    achternaam: 'mama',
    leeftijd: 25,
    opleiding: 'Informatica',
    score: 85
};

//opdracht 2
let facebookPost = {
    gebruikersnaam: 'user123',
    titel: 'Mijn geweldige dag',
    verhaal: 'Vandaag was echt fantastisch!',
    datum: '2023-11-14',
    views: 150
};

//opdracht 3
let recepten = [
    {
      titel: 'Gezonde salade',
      beschrijving: 'Een heerlijke salade met verse groenten en vinaigrette.',
      gezond: true
    },
    {
      titel: 'Pasta carbonara',
      beschrijving: 'Romige pasta met spekjes en Parmezaanse kaas.',
      gezond: false
    },
    {
      titel: 'Gegrilde zalm',
      beschrijving: 'Zalmfilet gegrild met citroen en kruiden.',
      gezond: true
    }
  ];
  
  //opdracht 4
  let Versacepakje = {
    titel: "Versace pakje",
    description: "Versace pakje maat 68 (6-9mnd)",
    price: 80.00
  }

  //opdracht 5
  letitem1 = {
    title: 'Danerolles croissants',
    beschrijving: '240 g',
    actie: 'per blik 1.39',
    prijs: 1.39
}
let item2 = {
    title: "1 de Beste Elstar",
    beschrijving: '1,5 kilogram',
    actie: 'per zak 1.89',
    prijs: 1.89
}
let item3 = {
    title: "Zespri kiwi sungold nieuw-zeeland",
    beschrijving: '560 g',
    actie: 'per pack 5.78',
    prijs: 5.78
}

// opdracht 7
let receptenArray = [
    { titel: 'Gezonde salade', 
    beschrijving: 'Een heerlijke salade met verse groenten en vinaigrette.', 
    gezond: true },

    { titel: 'Pasta carbonara',
     beschrijving: 'Romige pasta met spekjes en Parmezaanse kaas.', 
     gezond: false },

    { titel: 'Gegrilde zalm', 
    beschrijving: 'Zalmfilet gegrild met citroen en kruiden.', 
    gezond: true }
  ];
  
  receptenArray.forEach(recept => console.log(recept));
  
  //opdracht 8
let aanbiedingenArray = [
    { title: 'Danerolles croissants', 
    beschrijving: '240 g', 
    actie: 'per blik 1.39', 
    prijs: 1.39 },

    { title: '1 de Beste Elstar', 
    beschrijving: '1,5 kilogram', 
    actie: 'per zak 1.89', 
    prijs: 1.89 },

    { title: 'Zespri kiwi sungold nieuw-zeeland', 
    beschrijving: '560 g', 
    actie: 'per pack 5.78', 
    prijs: 5.78 }
  ];
  
  aanbiedingenArray.forEach(aanbieding => console.log(aanbieding));

let receptenContainer = document.getElementById('receptenContainer');

receptenArray.forEach(recept => {
  let card = document.createElement('div');
  card.classList.add('card'); 
  card.innerHTML = `
    <h2>${recept.titel}</h2>
    <p>${recept.beschrijving}</p>
    <p>Gezond: ${recept.gezond ? 'Ja' : 'Nee'}</p>
  `;
  receptenContainer.appendChild(card);
});
  

// EXTRA

const result = document.querySelector(".receptenContainer")
let marketplace = [Versacepakje]

for (let index = 0; index < marketplace.length; index++) {
  const marketplace = marketplace [index];
  result.innerHTML = "<div> ${markertplace} </div>"
  
}