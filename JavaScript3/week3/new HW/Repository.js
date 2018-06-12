'use strict';

/* global Util */

// eslint-disable-next-line no-unused-vars
class Repository {
  constructor(data) {
    this.data = data;
  }

  /**
   * Render the repository info to the DOM.
   * @param {HTMLElement} parent The parent element in which to render the repository.
   */
  render(parent) {
    //
    // Replace this comment with your code
    //
   

    parent.innerHTML = `
    <strong>Repository :</strong><p>${this.data.name}</p> <br>
    <strong>Description :</strong><p>${this.data.description}</p> <br>
    <strong>Forks :</strong><p>${this.data.forks}</p> <br>
    <strong>Updated :</strong><p>${this.data.updated_at}</p>`;  
  }

  /**
   * Returns an array of contributors as a promise
   */
  fetchContributors() {
    return Util.fetchJSON(this.data.contributors_url);
  }

  /**
   * Returns the name of the repository
   */
  name() {
    return this.data.name;
  }
}