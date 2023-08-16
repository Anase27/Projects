let myLibrary = [];
let addBook = document.querySelector('#addBook');
let bookDialog = document.querySelector('#bookDialog');
let submitBook = document.querySelector('#submitBook');
let cancelBook = document.querySelector('#cancelBook');
let form = document.querySelector('form');
let bookContainer = document.querySelector('.book-container');



addBook.addEventListener('click', (e) => {
    bookDialog.showModal();
    form.removeAttribute('novalidate', false);
    form.reset();
});

submitBook.addEventListener('click', (e) => {
    if(document.querySelector('#title').value != '' && document.querySelector('#author').value != '' && document.querySelector('#pages').value != ''){
        createBook();
        bookDialog.close();
        
        // form.reset(); DON'T KNOW WHY IT ISN'T WORKING HERE.
    }

});
cancelBook.addEventListener('click', (e) => {
    // form.reset();
    form.setAttribute('novalidate', true);
    bookDialog.close();
});


function Book(title, author, pages, readStatus){
    let book = new Object;
    
    book.title = title;
    book.author = author;
    book.pages = pages;
    book.readStatus = readStatus;    

    return book;
}

function createBook() {
    let name = document.querySelector('#title');
    let author = document.querySelector('#author');
    let pages = document.querySelector('#pages');
    let readStatus = document.querySelector('#status');

    if(myLibrary.findIndex((obj) => obj.title === name.value) == -1)
    {
        // console.log(myLibrary.findIndex((obj) => obj.title === name));
        let x = Book(name.value,author.value,pages.value,readStatus.checked);
        // name.value = null;
        // author.value = null;
        // pages.value = null;
        // readStatus.checked = false;
        // form.reset();
        addBookToLibrary(x);
    }
    else{
        alert('book already exist');
    }
}
function addBookToLibrary(x){
    myLibrary.push(x);
    // myLibrary.forEach(e => {
         
    // });

    let newDiv = document.createElement('div');
    newDiv.setAttribute("data-name",`${x.title}`);
    newDiv.setAttribute("class",'book-card');

    let buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button-div');

    let bookName = document.createElement('p');
    let bookAuthor = document.createElement('p');
    let bookPages = document.createElement('p');
    let removeButton = document.createElement('button');
    let readStatusButton = document.createElement('button');

    bookName.textContent = `${x.title}`;
    bookAuthor.textContent = `${x.author}`;
    bookPages.textContent = `${x.pages}`;

    removeButton.textContent = 'Remove';
    removeButton.setAttribute('id','remove');
    removeButton.addEventListener('click', removeBook);

    let bookReadStatus = (x.readStatus)? 'Read' : 'Not Read';
    readStatusButton.textContent = bookReadStatus;
    // readStatusButton.textContent = 'Read';
    readStatusButton.setAttribute('id', 'Status');
    readStatusButton.classList.add((x.readStatus)? 'Read' : 'Not-Read');
    readStatusButton.addEventListener('click', toggleRead);


    [bookName, bookAuthor, bookPages, buttonDiv].forEach(e => {
        newDiv.appendChild(e);
    });
    // change last array element to button div


    [removeButton, readStatusButton].forEach((e) => {
        buttonDiv.appendChild(e);
    });

    bookContainer.appendChild(newDiv);
}

function removeBook() {
    
    let element = this.parentNode.parentNode;
    bookContainer.removeChild(element);
    
    let index = myLibrary.findIndex((obj) => obj.title === `${element.dataset.name}`);

    myLibrary.splice(index,1);
}

function toggleRead() {
    this.classList.toggle('read');
    let e = this.parentNode.parentNode;
    // console.log(e);

    if(this.classList.contains('read'))
    {
        this.textContent = 'Read';
    }
    else{
        this.textContent = 'Not Read';
    }
    let index = myLibrary.findIndex((obj) => obj.title === `${e.dataset.name}`);

    if (myLibrary[index].readStatus) {
        myLibrary[index].readStatus = false;
    }
    else{
        myLibrary[index].readStatus = true;
    }
}