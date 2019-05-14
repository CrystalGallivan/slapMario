let activeCharacters = 0
const health = 100;
// let character = {
//   name: "Mario",
//   moves: ['normal', 'attack', 'knockout'],
//   health: 100,
//   hits: 0,
//   moveIndex: 0,
//   images: ['assets/mario1.png', 'assets/mario2.png', 'assets/mario3.png'],
//   items: []
// }
let characters1 = [{
  name: "Mario",
  moves: ['normal', 'attack', 'knockout'],
  health: 100,
  hits: 0,
  moveIndex: 0,
  images: ['assets/mario1.png', 'assets/mario2.png', 'assets/mario3.png'],
  items: []
},
{
  name: "Luigi",
  moves: ['normal', 'attack', 'knockout'],
  health: 100,
  hits: 0,
  moveIndex: 0,
  images: ['assets/luigi1.png', 'assets/luigi2.png', '/assets/luigi3.png'],
  items: []
},
{
  name: "Yoshi",
  moves: ['normal', 'attack', 'knockout'],
  health: 100,
  hits: 0,
  moveIndex: 0,
  images: ['assets/yoshi1.png', 'assets/yoshi2.png', 'assets/yoshi3.png'],
  items: []
}]
// chacacter2 array allows for a secondary character selection
let characters2 = [{
  name: "Wario",
  moves: ['normal', 'attack', 'knockout'],
  health: 100,
  hits: 0,
  moveIndex: 0,
  images: ['assets/wario1.png', 'assets/wario7.png', 'assets/wario4.png'],
  items: []
}, {
  name: "Bowser",
  moves: ['normal', 'attack', 'knockout'],
  health: 100,
  hits: 0,
  moveIndex: 0,
  images: ['assets/bowser1.png', 'assets/bowser2.png', 'assets/bowser3.png'],
  items: []
},
{
  name: "Shy Guy",
  moves: ['normal', 'attack', 'knockout'],
  health: 100,
  hits: 0,
  moveIndex: 0,
  images: ['assets/shy1.png', 'assets/shy2.png', 'assets/shy3.png'],
  items: []
}
]
// itemButtons & attacks librarys allows easy storage and access of variables
let itemButtons = {
  shell: { name: 'Shell', modifier: 2, description: 'OUCH!' },
  banana: { name: 'Banana', modifier: 8, description: 'Whoops!' },
  mushroom: { name: 'Mushroom', modifier: -5, description: 'Heal' }
}

let attacks = {
  slash: 1,
  rush: 5,
  crit: 10
}

function giveItemShell() {
  characters1[activeCharacters].items.push(itemButtons.shell)
}
function giveItemBanana() {
  characters1[activeCharacters].items.push(itemButtons.banana)
}
function giveItemMushroom() {
  characters1[activeCharacters].items.push(itemButtons.mushroom)

}

function addMods() {
  let combo = 0
  for (let index = 0; index < characters1[activeCharacters].items.length; index++) {
    let item = characters1[activeCharacters].items[index];
    combo += item.modifier
  }
  return combo
}

// function addMods2() {
//   let combo = 0
//   for (let index = 0; index < characters2[activeCharacters].items.length; index++) {
//     let item = characters2[activeCharacters].items[index];
//     combo += item.modifier

//   }
// }
function giveItemShell2() {
  characters2[activeCharacters].items.push(itemButtons.shell)
}
function giveItemBanana2() {
  characters2[activeCharacters].items.push(itemButtons.banana)
}
function giveItemMushroom2() {
  characters2[activeCharacters].items.push(itemButtons.mushroom)

}
function imgChange(num) {
  if (characters1[activeCharacters].health == 0 || characters2[activeCharacters].health == 0) {
    characters1[activeCharacters].moveIndex = 2;
    characters2[activeCharacters].moveIndex = 2;
  } else if (characters1[activeCharacters].health < 100 || characters2[activeCharacters].health < 100) {
    characters1[activeCharacters].moveIndex = 1;
    characters2[activeCharacters].moveIndex = 1;
  }
}
// function imgChange2(num) {
//   if (characters2[activeCharacters].health == 0) {
//     characters2[activeCharacters].moveIndex = 2;
//   } else if (characters2[activeCharacters].health < 100) {
//     characters2[activeCharacters].moveIndex = 1;
//   }
// }
function rushAttack(num) {

  characters1[activeCharacters].health -= attacks.rush + addMods();
  characters1[activeCharacters].hits++
  update()
  console.log(characters1[activeCharacters].health)
}
// alert(character.health)
function slashAttack(num) {

  characters1[activeCharacters].health -= attacks.slash + addMods();
  characters1[activeCharacters].hits++
  update()
  console.log(characters1[activeCharacters].health)

}
function critAttack(num) {
  characters1[activeCharacters].health -= attacks.crit + addMods();
  characters1[activeCharacters].hits++
  update()
  console.log(characters1[activeCharacters].health)
}

update()

function slashAttack2() {

  characters2[activeCharacters].health -= attacks.slash + addMods();
  characters2[activeCharacters].hits++
  update()
}

function rushAttack2() {
  characters2[activeCharacters].health -= attacks.rush + addMods();
  characters2[activeCharacters].hits++
  update()
}

function critAttack2() {
  characters2[activeCharacters].health -= attacks.crit + addMods();
  characters2[activeCharacters].hits++
  update()
}


function update() {

  resetButtons()
  imgChange()
  document.getElementById('health').innerText = characters1[activeCharacters].health.toString()
  document.getElementById('hits').innerText = characters1[activeCharacters].hits.toString()
  document.getElementById('name1').innerText = characters1[activeCharacters].name.toString()
  document.getElementById('Character1').setAttribute("src", characters1[activeCharacters].images[characters1[activeCharacters].moveIndex])
  document.getElementById('health1').innerText = characters2[activeCharacters].health.toString()
  document.getElementById('hits1').innerText = characters2[activeCharacters].hits.toString()
  document.getElementById('Character2').setAttribute("src", characters2[activeCharacters].images[characters2[activeCharacters].moveIndex])
  document.getElementById('name').innerText = characters2[activeCharacters].name.toString()
  // document.getElementById('progressBar2').style.width = characters2[activeCharacters].health


  if (characters1[activeCharacters].health == 0 || characters1[activeCharacters].health == 0) {
    document.getElementById('reset').innerText.disabled = true

  } else {
    document.getElementById('reset').innerText.disabled = false
  }
}
update()
function reset() {
  characters1[activeCharacters].health = 100
  characters2[activeCharacters].health = 100
  characters1[activeCharacters].hits = 0
  characters1[activeCharacters].moveIndex = 0
  characters2[activeCharacters].hits = 0
  characters2[activeCharacters].moveIndex = 0
  update()
}


function resetButtons() {
  let buttons = document.getElementsByClassName('but')
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    if (characters1[activeCharacters].health == 0 || characters2[activeCharacters].health == 0) {
      button.setAttribute('disabled', false)
    } else {
      button.removeAttribute('disabled')
    }
  }
}
// document.getElementById('progressBar1').style.width = character.health
function drawItemButtons() {
  let template = ''
  for (let i = 0; i < characters1[activeCharacters].length; i++) {
    let character = characters1[i];
    template += `
        <button class="btn btn-info" onclick="setActiveCat(${i})">${characters1[activeCharacters].name}</button>
           `
  }
  document.getElementById('characters1-buttons').innerHTML = template
}

drawItemButtons()

function setActiveCharacters(index) {
  activeCharacters = index
  update()
}
// function progressBar1() {
//   if (character.health <= ) {
//     document.getElementById('progressBar1').style.width = character.health
//   }
// }