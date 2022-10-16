
const main = document.querySelector('main');


function createChemistry() {
let data = {
    "elements": [
        {
            "name": "Hydrogen",
            "number": 1,
            "appearance": "colorless gas",
            "atomic_mass": 1.008,
            "image": {
                "title": "Vial of glowing ultrapure hydrogen, H2. Original size in cm: 1 x 5",
                "url": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Hydrogenglow.jpg",
                "attribution": "User:Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/hydrogen.php"
            }
        },
        {
            "name": "Helium",
            "appearance": "colorless gas, exhibiting a red-orange glow when placed in a high-voltage electric field",
            "atomic_mass": 4.0026022,
            "number": 2,
            "image":{
                "title": "Vial of glowing ultrapure helium. Original size in cm: 1 x 5",
                "url": "https://upload.wikimedia.org/wikipedia/commons/0/00/Helium-glow.jpg",
                "attribution": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/helium.php"
            }
        },
        {
            "name": "Lithium",
            "appearance": "silvery-white",
            "atomic_mass": 6.94,
            "number": 3,
            "image":{
                "title": "0.5 Grams Lithium under Argon. Original size of the largest piece in cm: 0.3 x 4",
                "url": "https://upload.wikimedia.org/wikipedia/commons/e/e2/0.5_grams_lithium_under_argon.jpg",
                "attribution": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lithium.php"
            }
        },
        {
            "name": "Beryllium",
            "appearance": "white-gray metallic",
            "atomic_mass": 9.01218315,
            "number": 4,
            "image":{
                "title": "Pure Beryllium bead, 2.5 grams. Original size in cm: 1 x 1.5",
                "url": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Beryllium_%28Be%29.jpg",
                "attribution": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/beryllium.php"
            }
        }
    ]
};

    // Populating the elements on the web page

    let elementsList = data['elements'];
    data.elements.forEach(element => {
        let section = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let appear = document.createElement('p');
        let mass = document.createElement('p');
        let number = document.createElement('h3');
        name.innerHTML = `${element.name}`;
        appear.innerHTML = `${element.appearance}`;
        mass.innerHTML = `Mass: ${element.atomic_mass}`;
        number.innerHTML = `${element.number}`;
        image.setAttribute('src', element.image.url);
        image.setAttribute('alt', `${element.image.title}`);
        section.append(name);
        section.append(number);
        section.append(mass);
        section.append(image);
        section.append(appear);
        main.appendChild(section);
    });
};











//createChemistry(data);



// Expiremental Code for Team Project
/*
    // API call to retrive the Periodic Table Information from 
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://periodic-table-elements-info.herokuapp.com/elements", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        return result;
        */


        /*let json = getJson();
        console.log(json); */


        /*
        function getJson() {
            fetch('./periodic_table.json')
            .then((response) => response.json())
            .then((json) => console.log(json));
         }
         */


         
       //import data from './periodic_table.json' assert {type: 'json'};