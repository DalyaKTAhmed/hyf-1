//'use strict';

/* global Util */

// eslint-disable-next-line no-unused-vars
class Contributor {
  constructor(data) {
    this.data = data;
  }

  /**
   * Render the contributor info to the DOM.
   * @param {HTMLElement} contributorList The parent element in which to render the contributor.
  */
  render(contributorList) {
    // Replace this comment with your code
    contributorList.innerHTML = `
    <li>
    <img width="100px" src="${contributor.avatar_url}">
    <p class="contributor-login">${contributor.login}</p>
    <span class="contributor-contributions">${contributor.contributions}</span>
    </li>
`;
  }
}