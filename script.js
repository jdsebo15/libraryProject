//i probably broke everything

function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}




















function library(title, author, pages, read){
    event.preventDefault();
    let form = document.getElementById('inputs');
    for(let i = 0; i < myLibrary.length; i++){
        if (this.title.value == myLibrary[i].title){
            alert("This title already exists");
            return false
        }
    }
    let newBook = new book(form.title.value, form.author.value, form.pages.value, form.hasRead.value);
    myLibrary.push(newBook);
    let libDiv = document.querySelector(".library");
    let div = document.createElement("div");        
    let card = document.getElementById("library");
    card.appendChild(div);
    div.classList.add('card');
    div.setAttribute('id',`${newBook.title}`);
    populateCard(newBook);

}
function populateCard(newBook){
    let card = document.getElementById(`${newBook.title}`);
    let title = document.createElement("div");
    let author = document.createElement("div");
    let pages = document.createElement("div");
    let hasRead = document.createElement("div");
    let hasReadBtn = document.createElement('button');
    let removeBtn = document.createElement('button');
    hasRead.setAttribute('id',`${newBook.title}HRstatus`);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(hasRead);
    card.appendChild(hasReadBtn);
    card.appendChild(removeBtn);
    title.innerText = `${newBook.title}`;
    author.innerText = `${newBook.author}`;
    pages.innerText = `${newBook.pages}`;
    hasRead.innerText = `${newBook.read}`;
    if(newBook.read == 'yes'){
        hasReadBtn.innerText = 'Mark as Unread';
    } else {
        hasReadBtn.innerText = 'Mark as Read';
    }

    removeBtn.innerText = 'Remove';
    hasReadBtn.setAttribute('id', `${newBook.title}HRbtn`);
    removeBtn.setAttribute('id', `${newBook.title}RMbtn`);
    hasReadBtn.addEventListener('click', updateHasRead);
    removeBtn.addEventListener('click', removeItem);
    libDiv.style.display = 'grid';
    formDiv.style.display = 'none';


}
function openForm(){
    libDiv.style.display = 'none';
    formDiv.style.display = 'flex'
}
function updateHasRead(){
    for(items in myLibrary){
        if(this.id == myLibrary[items].title+'HRbtn'){
            let hrStatus = document.getElementById(`${myLibrary[items].title}HRstatus`);
            if(myLibrary[items].read == 'yes'){
                myLibrary[items].read = 'no';
                this.innerText = 'Mark as Read';
                hrStatus.innerText = 'no';
            } else {
                myLibrary[items].read = 'yes';
                this.innerText = 'Mark as Unread';
                hrStatus.innerText = 'yes';
            }
            
    }

}
}
function removeItem(){
    for(items in myLibrary){
        if(this.id == myLibrary[items].title+'RMbtn'){
            myLibrary.splice(items, 1);
        }
    }
    let id = this.id.replace('RMbtn', '');
    let card = document.getElementById(id);
    card.remove();
}
        
//variable declarations
let myLibrary = [];
//element selectors
const libDiv = document.getElementById("library");
const button = document.getElementById("newButton");
const formDiv = document.getElementById('bookForm');
const form = document.getElementById('inputs');
//event listeners
button.addEventListener("click",openForm);
form.addEventListener('submit', library)

//refactor considerations:
//change the way the way you use ID's to identify which card was clicked on to 
//contain a data-attribute that contains the index of the library array.
