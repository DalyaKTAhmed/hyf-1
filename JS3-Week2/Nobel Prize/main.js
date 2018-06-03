let nobelPrizeWinnersHttps = "http://api.nobelprize.org/v1/prize.json?year=2017";
let prizeWinners = [];
function main() {
    fetchWinners();
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
function fetchWinners() {
    fetchDataFromServer(nobelPrizeWinnersHttps).then(data => {
        prizeWinners = data.prizes;
        showNobelPrizeCategoriesInSelect(prizeWinners);
    }).catch(function (err) {
        console.log('ERROR presenting data from server', err);
    });
}

/**
 * Fetch the nobel prize winners from the server.
 * @param {String} nobelPrizeUrl API end point. 
 */
function fetchDataFromServer(nobelPrizeUrl) {
    let serverResponse = fetch(nobelPrizeUrl).then((response) => {
        if (!response.ok) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }
        return response.json();
    }).catch(err => {
        console.log('ERROR fetching from server', err);
    });
    return serverResponse;
}
/**
 * Shows (renders to the DOM) all nobel prize categories in a select element.
 * 
 * @param {Array} prizeWinners Array of prizes objects. 
 */
function showNobelPrizeCategoriesInSelect(prizeWinners) {
    const categoriesSelectElement = document.querySelector("#categories");

    categoriesSelectElement.setAttribute(
        "onchange", " getWinners(this.value);showCategory(this.value)"
    );

    prizeWinners.forEach(prize => {
        const optionElement = document.createElement("option");
        optionElement.setAttribute("value", prize.category);
        optionElement.innerText = prize.category;

        categoriesSelectElement.appendChild(optionElement);
    });
}
/**
* Shows (renders to the DOM) information about a category
* 
* @param {String} categoryName Unique category identifier.
*/
function showCategory(categoryName) {
    const selectedCategory = prizeWinners.filter(category => {
        return category.category === categoryName;
    })[0];

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
    const selectedCategory = prizeWinners.filter(category => {
        return category.category === categoryName;
    })[0];
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