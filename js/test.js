'use strict'

const someCardsArray = [
  { name: "Antiseptic band-aid", lastUsed: new Date().getTime(), creationDate: new Date().getTime(), link: "https://tabletki.ua/%D0%9C%D0%BE%D1%8F-%D0%90%D0%BF%D1%82%D0%B5%D1%87%D0%BA%D0%B0/1051099/pharmacy/vinnitsa/" },
  { name: "Citramonum", lastUsed: new Date().getTime(), creationDate: new Date().getTime(), link: "https://tabletki.ua/%D0%A6%D0%B8%D1%82%D1%80%D0%B0%D0%BC%D0%BE%D0%BD-%D0%B4%D0%B0%D1%80%D0%BD%D0%B8%D1%86%D0%B0/6496/" },
  { name: "Aspirin", lastUsed: new Date().getTime(), creationDate: new Date().getTime(), link: "https://tabletki.ua/%D0%90%D1%86%D0%B5%D1%82%D0%B8%D0%BB%D1%81%D0%B0%D0%BB%D0%B8%D1%86%D0%B8%D0%BB%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BA%D0%B8%D1%81%D0%BB%D0%BE%D1%82%D0%B0-%D0%B4%D0%B0%D1%80%D0%BD%D0%B8%D1%86%D0%B0/12229/" },
  { name: "Carbo activatus", lastUsed: new Date().getTime(), creationDate: new Date().getTime(), link: "https://tabletki.ua/%D0%A3%D0%B3%D0%BE%D0%BB%D1%8C-%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9/1039181/pharmacy/vinnitsa/" },
  { name: "Paracetamol", lastUsed: new Date().getTime(), creationDate: new Date().getTime(), link: "https://tabletki.ua/%D0%9F%D0%B0%D1%80%D0%B0%D1%86%D0%B5%D1%82%D0%B0%D0%BC%D0%BE%D0%BB-%D0%B4%D0%B0%D1%80%D0%BD%D0%B8%D1%86%D0%B0/26743/pharmacy/vinnitsa/" },
  { name: "Chlorohexidine", lastUsed: new Date().getTime(), creationDate: new Date().getTime(), link: "https://tabletki.ua/%D0%A5%D0%BB%D0%BE%D1%80%D0%B3%D0%B5%D0%BA%D1%81%D0%B8%D0%B4%D0%B8%D0%BD/31636/pharmacy/vinnitsa/" },
  { name: "Naphthyzin", lastUsed: new Date().getTime(), creationDate: new Date().getTime(), link: "https://tabletki.ua/%D0%9D%D0%B0%D1%84%D1%82%D0%B8%D0%B7%D0%B8%D0%BD/14767/pharmacy/vinnitsa/" },
  { name: "Corvalol", lastUsed: new Date().getTime(), creationDate: new Date().getTime(), link: "https://tabletki.ua/%D0%9A%D0%BE%D1%80%D0%B2%D0%B0%D0%BB%D0%BE%D0%BB/27043/pharmacy/vinnitsa/" },  
]

const listEl = document.getElementById("list");
const buttonEL = document.getElementById("sort");

createMarkup();

listEl.addEventListener("click", addCard);
buttonEL.addEventListener('click', sortByUsed);

function addCard(event) {  
  if (event.target.nodeName === 'UL') {
    return
  }

    someCardsArray.forEach((element) => {
      if (event.target.closest('li').id === element.name) { element.lastUsed = new Date().getTime() }
    });
};

function createMarkup() {  
  const markup = someCardsArray.map(({ name, link }) =>
      ` 
        <li class="list__item" id="${name}">          
            <div class="list__box">
              <img class="list__icon" src="./img/pills.svg" alt="pills" width="60">
              <p class="list__text">
                <a href="${link}" class="list__link" target=blank>${name}</a>
              </p>
            </div>          
        </li>
      `
  ).join("");

  listEl.innerHTML = markup;
}

function sortByUsed() {  
  someCardsArray.sort((firstCard, secondCard) => secondCard.lastUsed - firstCard.lastUsed);  
  createMarkup();
};


// 1. При нажатии на кнопку Sort картинки должны перерендириться в 
// соответствии с ключем обьекта lastUsed(последнее использование lastUsed должно быть сверху списка)