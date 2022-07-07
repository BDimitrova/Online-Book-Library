import { getMybooks } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';
import { bookPreview } from './common.js';

const myBooksTemplate = (books) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    ${books.length == 0
        ? html`<p class="no-books">No books in database!</p>`
        : html`<ul class="my-books-list">${books.map(bookPreview)}</ul>`}
</section>`;

export async function myBooksPage(ctx) {
    const userData = getUserData();
    const books = await getMybooks(userData.id);
    ctx.render(myBooksTemplate(books));
}