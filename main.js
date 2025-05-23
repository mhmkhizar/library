const myLibrary = [
  {
    title: `The Stranger`,
    author: `Albert Camus`,
    pages: 720,
    readStatus: false,
    id: crypto.randomUUID(),
  },
  {
    title: `1984`,
    author: `George Orwell`,
    pages: 304,
    readStatus: true,
    id: crypto.randomUUID(),
  },
  {
    title: `Sapiens`,
    author: `Yuval Noah Harari`,
    pages: 144,
    readStatus: false,
    id: crypto.randomUUID(),
  },
];

const tableBody = document.querySelector(`#tableBody`);
const showModalBtn = document.querySelector(`#showModalBtn`);
const addBookModal = document.querySelector(`#addBookModal`);

const ICONS = {
  check: `<svg class="icon check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>check-circle</title>
      <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
    </svg>`,
  uncheck: `<svg class="icon uncheck-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>radiobox-blank</title>
      <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
    </svg>`,
  delete: `<svg class="icon delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>trash-can-outline</title>
      <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/>
    </svg>`,
};

function renderLibrary(library) {
  tableBody.innerHTML = ``;
  library.forEach((book, index) => {
    const row = createTableRow(index + 1, book);
    tableBody.appendChild(row);
  });
}

function createTableRow(serial, book) {
  const row = document.createElement(`tr`);
  row.classList.add(`table-row`);

  const cells = [
    createCell(String(serial).padStart(2, 0)),
    createCell(book.title),
    createCell(book.author),
    createCell(book.pages),
    createCell(book.readStatus ? ICONS.check : ICONS.uncheck, true),
    createCell(ICONS.delete, true),
  ];

  row.append(...cells);
  return row;
}

function createCell(content, isHTML = false) {
  const cell = document.createElement(`td`);
  cell.classList.add(`table-data`);
  isHTML ? (cell.innerHTML = content) : (cell.textContent = content);
  return cell;
}

window.addEventListener(`click`, (e) => {
  const btnIds = [`showModalBtn`, `closeModalBtn`, `addModalBtn`];
  if (!btnIds.includes(e.target.id)) return;

  const btnId = e.target.id;

  switch (btnId) {
    case `showModalBtn`:
      addBookModal.showModal();
      break;
    case `closeModalBtn`:
      addBookModal.close();
      console.log(addBookModal.returnValue);
    default:
      console.log(`Error!`);
      break;
  }
});

renderLibrary(myLibrary);

// function Book(title, author, pages, readStatus) {
//   if (!new.target) {
//     throw Error`You must use the 'new' operator to call the constructor.`;
//   }

//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.readStatus = readStatus;
//   this.id = crypto.randomUUID();
// }

// function addBookToLibrary(title, author, pages, readStatus) {
//   const book = new Book(title, author, pages, readStatus);
//   myLibrary.push(book);
// }
