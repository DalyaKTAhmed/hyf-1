let HyfReposHttps = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
let repositories = [];
let contributors = [];
function main() {
fetchRepositories();

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
* Callback that handles response from server when getting repositories.
* 
* @param {String} data Data from server in JSON format.
*/
function fetchRepositories() {
    fetchDataFromServer(HyfReposHttps).then(data => {
        repositories = data;
        console.log(repositories);
        showRepositoriesInSelect(repositories);
    }).catch(function (err) {
        console.log('ERROR presenting data from server', err);
    });
}


/**
 * Fetch  
 * 
 * @param {string} repositoriesUrl
 */
function fetchDataFromServer(repositoriesUrl) {
    let serverResponse = fetch(repositoriesUrl).then((response) => {
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
 * Shows (renders to the DOM) all repositories in a select element.
 * 
 * @param {Object[]} repositories Array of repository objects. 
 */
function showRepositoriesInSelect(repositories) {
    const repositoriesSelectElement = document.querySelector("#repositories");

    repositoriesSelectElement.setAttribute(
        "onchange", " showRepository(this.value),fetchContributors(this.value)"
    );

    repositories.forEach(repository => {
        const optionElement = document.createElement("option");
        optionElement.setAttribute("value", repository.id);
        optionElement.innerText = repository.name;

        repositoriesSelectElement.appendChild(optionElement);
    });
}
/**
* Shows (renders to the DOM) information about a repository.
* 
* @param {String} repositoryId Unique repository identifier.
*/
function showRepository(repositoryId) {
    const selectedRepository = repositories.find(repository => {
        return repository.id === Number.parseInt(repositoryId);
    });
    const repositoryInfoElement = document.querySelector('.repository-info');
    removeChildNodes(repositoryInfoElement);
    repositoryInfoElement.innerHTML = `
    <strong>Repository :</strong><p>${selectedRepository.name}</p> <br>
    <strong>Description :</strong><p>${selectedRepository.description}</p> <br>
    <strong>Forks :</strong><p>${selectedRepository.forks}</p> <br>
    <strong>Updated :</strong><p>${selectedRepository.updated_at}</p>`;
}
/**
 * Gets all contributors for a repository.
 * 
 * @param {String} repositoryId Unique repository identifier.
 */
function fetchContributors(repositoryId) {
    const selectedRepository = repositories.find(repository => {
        return repository.id === Number.parseInt(repositoryId);
    });
   
  
   fetchDataFromServer(selectedRepository.contributors_url).then(data => {
      showContributors(data);
    });
  }


/**
 * Shows (renders to the DOM) a list of contributors.
 * 
 * @param {String} contributorsData Data about contributors in JSON format.
 */
function showContributors(contributorsData) {
    const contributors = contributorsData;
    const contributorsListElement = document.querySelector(".contributors-list");
    removeChildNodes(contributorsListElement);
  
    contributors.forEach(contributor => {
      const listItemElement = document.createElement("li");
      listItemElement.innerHTML = `
          <img width="100px" src="${contributor.avatar_url}">
          <p class="contributor-login">${contributor.login}</p>
          <span class="contributor-contributions">${contributor.contributions}</span>
      `;
  
      contributorsListElement.appendChild(listItemElement);
    });
  }