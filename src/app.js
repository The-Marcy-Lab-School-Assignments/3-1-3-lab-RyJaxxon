import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  // Render the form!
  renderNewUserForm(newUserFormEl);

  // Fetch and render the books!
  renderBookList(bookListEl, await getFirstThreeFantasyBooks());

  // Fetch and render author test
  // getAuthor(`/authors/OL22098A`).then((author) => renderAuthorInfo(authorInfoEl, author))

  bookListEl.addEventListener('click', (e) => {
    e.preventDefault();
    const urlKey = e.target.dataset.authorUrlKey;
    getAuthor(urlKey).then((author) => renderAuthorInfo(authorInfoEl, author))
  })

  newUserFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const formObject = Object.fromEntries(formData);
    createNewUser(formObject).then((newUser) => {
      console.log(newUser);
      renderNewUser(newUserEl,newUser)
  });
    newUserFormEl.reset();
  })
}
