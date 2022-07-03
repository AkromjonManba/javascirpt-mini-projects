let data = [
    {
        name:"Akromjon",
        age:15
    },
    {
        name:"Behruz",
        age:15
    },
    {
        name:"Mahliyo",
        age: 13
    },
    {
        name:"Anvar",
        age: 31
    },
    {
        name:"Aziza",
        age:17
    },
    {
        name:"Bekzod",
        age:23
    },
    {
        name:"Rustam",
        age:43
    },
    {
        name:"Jasur",
        age: 21
    },
]

const info = document.querySelector("#info")

let result = data.map((itemNameAndAge) => {
    return `<div>${itemNameAndAge.name} is ${itemNameAndAge.age} years old</div>`
});

info.innerHTML = result.join("\n");


// for(let i = 0; i < data.length; i++) {
//     const info = document.querySelector("#info");
//     let infoAppendDiv = document.createElement("div");
//     let teamMamabersName = document.createElement("h4");
//     let teamMamabersAge = document.createElement("p");
//     teamMamabersName.textContent = `My Name Is ${data.name}`
//     teamMamabersAge.textContent = `I'm ${data.age} years old`
//     infoAppendDiv.appendChild(teamMamabersName);
//     infoAppendDiv.appendChild(teamMamabersAge);
//     info.appendChild(infoAppendDiv);
// }
