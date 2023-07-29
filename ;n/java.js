// const wrapper = document.querySelector(".wrapper")
// const button = document.querySelector('.btn')
//
// console.log(wrapper)
// console.log(button)
//
// const getUsers = async () => {
//     try {
//         const response = await fetch(`people.json`)
//         return await response.json()
//     }
//     catch (error){console.error(error)}
// }
//
// const renderUsers = () => {
//     getUsers().then(data => {
//         console.log(data)
//         data.map((user) => {
//             const userCard = document.createElement('div')
//             userCard.classList.add('card')
//             userCard.innerHTML = `
//                 <h2>${user.name}</h2>
//                 <h2>${user.age}</h2>
//             `
//             wrapper.appendChild(userCard)
//         })
//     })
// }
//
// button.onclick = () => {
//     renderUsers()
// }
//
// let button = document.getElementsByClassName('btn')
// let wrapper = document.getElementById('people__container')
// button.onclick = () => {
//     const request = new XMLHttpRequest()
//     request.open("GET","people.json")
//     request.setRequestHeader("Content-type","Application/json")
//     request.send()
//
//     const users = request.response
//     console.log(users)
//
//     users.map((item) => {
//         console.log(item)
//         const people_card = document.createElement("div")
//         people_card.innerHTML = `
//             <h2>${item.name}</h2>
//         `
//         wrapper.appendChild(people_card)
//     })

// let wrapper = document.getElementById('people__container');
// // let button = document.getElementsByClassName('btn');
// //
// // button.onclick = () => {
// //     const request = new XMLHttpRequest();
// //     request.open("GET", "people.json");
// //     request.setRequestHeader("Content-type", "application/json");
// //
// //     request.onreadystatechange = () => {
// //         if (request.readyState === 4 && request.status === 200) {
// //             const users = JSON.parse(request.response);
// //             console.log(users);
// //
// //             users.map((item) => {
// //                 console.log(item);
// //                 const people_card = document.createElement("div");
// //                 people_card.innerHTML = `
// //             <h2>${item.name}</h2>
// //         `;
// //                 wrapper.appendChild(people_card);
// //             });
// //         }
// //     };
// //
// //     request.send();
// // };


const wrapper = document.getElementById('people__container');
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    const ppl = new XMLHttpRequest();
    ppl.open('GET', 'people.json', true);
    ppl.responseType = 'json'
    ppl.send()

    ppl.onload = function() {
        if (ppl.status === 200) {
            const data = ppl.response;
            data.forEach(person => {
                const card = document.createElement('div');
                card.classList.add('card');

                const name = document.createElement('h2');
                name.textContent = person.name;
                card.appendChild(name);

                const personAge = document.createElement('p');
                personAge.textContent = `Age: ${person.age}`
                card.appendChild(personAge);

                wrapper.appendChild(card);
            });
        } else {
            console.error('Error loading data');
        }
    };
});