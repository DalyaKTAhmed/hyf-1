'use strict';
{
  let HyfReposHttps = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  let repositories = [];
  let contributors = [];

  class Repository {
    constructor(data) {
      this._data = data;
    }
    /**
   * Returns an array of repositories as a promise
  */
    fetchRepositories(repositoryId) {
      // Add your code here
      const selectedRepository = repositories.find(repository => {
        return repository.id === Number.parseInt(repositoryId);
      });
      fetchJSON(selectedRepository).then(data => {
        return data;
      });
    }
    /**
   * Remove all child nodes to specified parent node.
   * 
   * @param {string} parentNode 
   */

    removeChildNodes(parentNode) {
      while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
      }
    }
    /**
     * Render the repository info to the DOM.
     * @param {HTML element} parent The parent element in which to render the repository.
     * info.
     */
    render(parent) {
      // Add your code here.
      // This method should render the repository data stored in the '_data' property
      // as HTML elements and append them to the `parent` element.
      repositories = this.data;
      const selectedRepository = repositories.find(repository => {
        return repository.id === Number.parseInt(repositoryId);
      });
      removeChildNodes(parent);
      parent.innerHTML = `
    <strong>Repository :</strong><p>${selectedRepository.name}</p> <br>
    <strong>Description :</strong><p>${selectedRepository.description}</p> <br>
    <strong>Forks :</strong><p>${selectedRepository.forks}</p> <br>
    <strong>Updated :</strong><p>${selectedRepository.updated_at}</p>`;
    }


    /**
     * Returns an array of contributors as a promise
    */
    fetchContributors(repositoryId) {
      // Add your code here
      const selectedRepository = repositories.find(repository => {
        return repository.id === Number.parseInt(repositoryId);
      });
      fetchJSON(selectedRepository.contributors_url).then(data => {
        return data;
      });
    }
  }

  class Contributor {
    constructor(data) {
      this._data = data;
    }

    /**
     * Render the contributor info to the DOM.
     * @param {HTML element} parent The parent element in which to render the contributor.
     * info.
     */
    render(parent) {
      // Add your code here.
      // This method should render the contributor data stored in the 'data' property
      // as HTML elements and append them to the `parent` element.
      removeChildNodes(parent);
      contributors.forEach(contributor => {
        const listItemElement = document.createElement("li");
        listItemElement.innerHTML = `
            <img width="100px" src="${contributor.avatar_url}">
            <p class="contributor-login">${contributor.login}</p>
            <span class="contributor-contributions">${contributor.contributions}</span>
        `;

        parent.appendChild(listItemElement);
      });
    }
  }

  class View {
    constructor() {
      this.initialize();
    }

    /**
     * View initialization
     */
    async initialize() {
      // Add code here to initialize your app
      // 1. Create the fixed HTML elements of your page
      // 2. Make an initial XMLHttpRequest to populate your <select> element
      try {
        const response = await fetch(theUrl)
        const data = await response.json()
        repositories = data;
        console.log("Success!", repositories);
        showRepositoriesInSelect(repositories);
      }

      catch (err) {
        function renderError(err) {
          console.log(err);
        }
      }
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
    }

    /**
     * Fetch information for the selected repository and render the
     * information as HTML elements in the DOM
     * @param {*} repoName The name of the selected repository
     */
    async fetchAndRender(repoName) {
      const leftDiv = document.querySelector(".repository-info");
      const rightDiv = document.querySelector(".contributors-list");

      try {
        const repositories = await repo.fetchRepositories();
        repo.render(rightDiv);
        repositories
          .map(repository => new repository(repository))
          .forEach(repository => repository.render(repositoriesList));
      }
      catch (error) {
        createAndAppend('div', container, { html: error.message, class: 'alert alert-error' });
      }
      try {
        const contributors = await repo.fetchContributors();
        repo.render(leftDiv);
        contributors
          .map(contributor => new Contributor(contributor))
          .forEach(contributor => contributor.render(contributorList));
      }
      catch (error) {
        createAndAppend('div', container, { html: error.message, class: 'alert alert-error' });
      }
    }



    /**
     * Fetch API data as JSON data in a promise
     * @param {string} url The URL of the API endpoint.
     * @returns A promise.
     */
    fetchJSON(url) {
      // Add your code here
      let serverResponse = fetch(url).then((response) => {
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

  }
  window.onload = () => new View();
}
