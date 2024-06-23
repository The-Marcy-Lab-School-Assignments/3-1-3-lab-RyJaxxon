export const renderBookList = (bookListEl, books) => {
    bookListEl.innerHTML = '';
    let htmlContent = '';
    books.forEach((book) => {
        const authorObj = book.author;
        htmlContent += `
        <li>
            <img src="${book.coverUrl}" alt = "An old cover of ${book.title}">
            <p>Title: ${book.title}</p>
            <button data-author-url-key=${authorObj.urlKey}>View ${authorObj.name}</button>
        </li>
        `;
    });
    bookListEl.innerHTML = htmlContent;
}
// renderBookList();

export const renderAuthorInfo = (authorInfoEl, author) => {
    authorInfoEl.innerHTML = '';
    const htmlContent = `
    <h2>${author.name}</h2>
    <img src="${author.pictureUrl}" alt = "A picture of ${author.name}">
    <p>Born: ${author.birthDate}</p>
    <p>${author.bio}</p>
    <a href="${author.wikipediaUrl}" target="_blank">Wikipedia Link</a>
    `;
    authorInfoEl.innerHTML = htmlContent;
};

export const renderNewUserForm = (newUserFormEl) => {
    newUserFormEl.innerHTML = `
    <label for="username">Username</label>
    <input id="username" name="username" type="text">
        
    <label for="is-cool">Is this user cool?</label>
    <input id="is-cool" name="isCool" type="checkbox">
        
    <label for="favorite-language">Favorite Language</label>
    <select id="favorite-language" name="favoriteLanguage">
        <option value="None">None</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Ruby">Ruby</option>
    </select>
    
    <button type="submit">Create User</button>
    `;
}

export const renderNewUser = (newUserEl, newUser) => {
    newUserEl.innerHTML = '';
    let htmlContent = `<h2 data-user-id=${newUser.id}>${newUser.username}</h2>`
    newUser.isCool ? htmlContent += `<p>The hippest in the house!</p>` : htmlContent += `<p>A real square</p></p>`;
    htmlContent += `<p>Favorite Language: ${newUser.favoriteLanguage}</p>`
    newUserEl.innerHTML = htmlContent;
}
