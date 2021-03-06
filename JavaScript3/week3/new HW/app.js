'use strict';

/* global Util, Repository, Contributor */

class App {
    constructor(url) {
        this.initialize(url);
    }

    /**
     * Initialization
     * @param {string} url The GitHub URL for obtaining the organization's repositories.
     */
    async initialize(url) {

        try {

            const repos = await Util.fetchJSON(url);

            console.log(repos);

            this.showRepositoriesInSelect(repos);

            this.repos = repos.map(repo => new Repository(repo));

        } catch (error) {
            this.renderError(error);
        }
    }


    /**
     * Shows (renders to the DOM) all repositories in a select element.
     * 
     * @param {Array} repositories 
     */

    showRepositoriesInSelect(repositories) {
        
        const repositoriesSelectElement = document.querySelector("#repositories");
        repositoriesSelectElement.addEventListener("change", e => this.fetchContributorsAndRender(e.target.value));

        // repositoriesSelectElement.setAttribute(
        //     "onchange", "App.fetchContributorsAndRender(this.value)"
        // );
        repositories.forEach(repository => {
            const optionElement = document.createElement("option");
            optionElement.setAttribute("value", repository.id);
            optionElement.innerText = repository.name;

            repositoriesSelectElement.appendChild(optionElement);
        });


    }

    /**
       * Fetch contributor information for the selected repository and render the
       * repo and its contributors as HTML elements in the DOM.
         * @param {number} repoId The id of selected repository
       */

    async fetchContributorsAndRender(repoId) {


        const repo = this.repos.find(repository => {

            return repository.data.id === Number.parseInt(repoId);//data?
        });

        console.log(repo);

        try {
            //const repo = this.repos[index];?

            const contributors = await repo.fetchContributors();

            const container = document.getElementById('container');

            // Erase previously generated inner HTML from the container div
            container.innerHTML = '';

            const leftDiv = Util.createAndAppend('div', container);
            const rightDiv = Util.createAndAppend('div', container);

            leftDiv.setAttribute("class", "leftDiv");
            rightDiv.setAttribute("class", "rightDiv");

            const contributorList = Util.createAndAppend('ul', rightDiv);

            repo.render(leftDiv);

            contributors
                .map(contributor => new Contributor(contributor))
                .forEach(contributor => contributor.render(contributorList));

        } catch (error) {

            this.renderError(error);
        }

    }

    /**
     * Render an error to the DOM.
     * @param {Error} error An Error object describing the error.
     */

    renderError(error) {

        console.log("You have this error", error);
    }

}

const HYF_REPOS_URL = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

window.onload = () => new App(HYF_REPOS_URL);
//window.addEventListener("load", () => new App(HYF_REPOS_URL));