const nobelPrizeWinnersHttps = "http://api.nobelprize.org/v1/prize.json?year=2017";
let prizeWinners = [];
let timerId = null;
let arrayOfCategories = [];
let sortedCategories =null;


function main() {
    fetchNobelPrizeWinners();
    hideDiv();
    openModal();
}

/**
 * Remove all child nodes to specified parent node.
 * 
 * @param {string} parentNode 
 */
function removeChildNodes(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

/**
* Fetch the winners list.
* 
*/
async function fetchNobelPrizeWinners() {
    try {
        const data = await fetchDataFromServer(nobelPrizeWinnersHttps)
        prizeWinners = data.prizes;
        showNobelPrizeCategoriesInSelect(prizeWinners);
    } catch(error) {
      console.log('ERROR presenting data from server',error);
    }
  }

/**
 * Fetch the nobel prize winners from the server using (async/await) and (try/catch)
 * 
 * @param {String} nobelPrizeUrl API end point. 
 */
  async function fetchDataFromServer(nobelPrizeUrl) {
    try {
      const serverResponse = await fetch(nobelPrizeUrl);
      if (!serverResponse.ok) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                return serverResponse.json();
    } catch(error) {
      console.log('ERROR fetching from server',error);
    }
  }

/**
 * Sort values in array of objects and return an array of sorted values
 * 
 * @param {Array} prizeWinners - array of object 
 * 
 * @returns {Array} sortedCategories - array of strings
 */
function sortCategories(prizeWinners){
    prizeWinners.forEach((prize)=>{
        arrayOfCategories.push(prize.category)   
    })
    sortedCategories = arrayOfCategories.sort();
    return  sortedCategories;
}

/**
 * Shows (renders to the DOM) all nobel prize categories in a select element.
 * 
 * @param {Array} prizeWinners Array of prizes objects. 
 */
function showNobelPrizeCategoriesInSelect(prizeWinners) {
    sortedCategories = sortCategories(prizeWinners);
    const categoriesSelectElement = document.querySelector("#categories");
   
    categoriesSelectElement.setAttribute(
        "onchange", " getWinners(this.value);showCategory(this.value);showDiv()"
    );
    sortedCategories.forEach(category => {
        const optionElement = document.createElement("option");
        optionElement.setAttribute("value", category);
        optionElement.innerText = category;
        categoriesSelectElement.appendChild(optionElement);
    });
}

/**
* Shows (renders to the DOM) information about a category
* 
* @param {String} categoryName Unique category identifier.
*/
function showCategory(categoryName) {
    closeModal();
    const selectedCategory = prizeWinners.find(category => {
        return category.category === categoryName;
    });

    const categoryInfoElement = document.querySelector('.category-info');
    removeChildNodes(categoryInfoElement);
    categoryInfoElement.innerHTML = `
      <ul>
        <li><strong>Category:</strong><span>${selectedCategory.category}</span></li>
        <li><strong>Year:</strong><span>${selectedCategory.year}</span></li>
      </ul>
    `;
}

/**
 * Gets all winners for a category.
 * 
 * @param {String} categoryName .
 */
function getWinners(categoryName) {
    const selectedCategory = prizeWinners.find(category => {
        return category.category === categoryName;
    });
    let winners = selectedCategory.laureates;
    console.log(winners);
    showWinners(winners);

}

/**
 * Shows (renders to the DOM) a list of winners.
 * 
 * @param {Array} winnersArray Information about winners 
 */
function showWinners(winnersArray) {
    const contributorsListElement = document.querySelector(".winners-list");
    removeChildNodes(contributorsListElement);

    winnersArray.forEach(winner => {
        const listItemElement = document.createElement("li");
        listItemElement.innerHTML = `
      <ul>
          <li><span><strong>Winner Name: </strong>${winner.firstname}</span><span>${winner.surname}</span></li>
          <li><span><strong>Motivation: </strong>${winner.motivation}</span></li>
          <li><span><strong>Share: </strong>${winner.share}</span></li>
        </ul>
      `;

        contributorsListElement.appendChild(listItemElement);
    });
}

/**
* Show divisions when category is selected
*/
function showDiv() {
    let categoryDiv = document.querySelector(".category-info");
    categoryDiv.style.display = 'block';
    let winnersDiv = document.querySelector(".winners");
    winnersDiv.style.display = 'block';

}

/**
 * Hide divisions when the page is loaded
 */
function hideDiv() {
    let categoryDiv = document.querySelector(".category-info");
    categoryDiv.style.display = 'none';
    let winnersDiv = document.querySelector(".winners");
    winnersDiv.style.display = 'none';

}

/**
 * Open a pop-up window which contains a loader after 1s 
 */
function openModal() {
    timerId = window.setTimeout(() => { document.getElementById('modal').style.display = 'block'; }, 1000);
}

/**
 * Close the pop-up window that contains the loadeer
 */
function closeModal() {
    window.clearTimeout(timerId);
    document.getElementById('modal').style.display = 'none';
}