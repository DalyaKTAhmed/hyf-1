let HyfReposHttps = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100";
let repositories = [];
function main() {

    fetchRepositories(repositories);
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
function fetchRepositories(data) {
    //repositories = JSON.parse();
    // console.log(
    //     `Received and parsed ${repositories.length} repositories from server.`
    // );
    fetchDataFromServer(HyfReposHttps).then(repositories => {
        repositories = data;
        showRepositoriesInSelect(repositories);
    }).catch(function (err) {
        console.log('ERROR presenting data from server', err);
    });
}


/**
 * Fetch  
 * 
 * @param {string} houseId- the house number 
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
      "onchange"," showRepository(this.value)"
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
    const selectedRepository = repositories.filter(repository => {
      return repository.id === Number.parseInt(repositoryId);
    })[0];
  
    const repositoryInfoElement = document.querySelector('.repository-info');
    removeChildNodes(repositoryInfoElement);
    repositoryInfoElement.innerHTML = `
      <ul>
        <li class="repository-info-item"><strong>Repository:</strong><span>${selectedRepository.name}</span></li>
        <li class="repository-info-item"><strong>Description:</strong><span>${selectedRepository.description}</span></li>
        <li class="repository-info-item"><strong>Forks:</strong><span>${selectedRepository.forks}</span></li>
        <li class="repository-info-item"><strong>Updated:</strong><span>${selectedRepository.updated_at}</span></li>
      </ul>
    `;
  }