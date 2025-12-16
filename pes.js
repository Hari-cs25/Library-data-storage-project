let myLibrary = [];
let deleteStack = [];
let objectName;
function Book(title, author, pages, read) {
     if(read === 'reader')
        read = 'Readed';
    else if(read === 'not reader')
        read = 'Not Readed';
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
};
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 310, "not readed");
const container = document.querySelector('.container');
const bookList = document.querySelector('.bl');
console.log('checking: ', bookList);

function addBookToLibrary(objectName,title, author, pages, read){
    objectName = new Book(title, author, pages, read);
    myLibrary.push(objectName);
    //DOM manipulation
    let bkbuttoncontainer = document.createElement('div');
    bkbuttoncontainer.setAttribute('style' , 'width:auto; height:auto; boarder:1px solid black;');
    bkbuttoncontainer.className = 'bookbtncontainer';
    bookList.appendChild(bkbuttoncontainer);
    let div1 = document.createElement('div');
    div1.setAttribute('id', crypto.randomUUID());
    div1.setAttribute('style', 'border:1px solid black;margin:10px; padding:8px; width:200px;');
    bkbuttoncontainer.appendChild(div1);
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    btn1.className = 'removebtn';
    btn2.className = 'readstatusbtn';
    btn1.textContent = 'Remove Book';
    if(read === 'reader')
        read = 'Readed';
    else if(read === 'not reader')
        read = 'Not Readed';
    btn2.textContent = read;
    btn2.addEventListener('click', function(){
        //alert('clicked');
        if(objectName.read === 'Readed'){
            objectName.read = 'Not Readed';
            btn2.textContent = 'Not Readed';
        }
        else{
            objectName.read = 'Readed';
            btn2.textContent = 'Readed';
        }
        if(btn2.textContent === 'Not Readed')
            btn2.textContent = 'Readed';
        else
            btn2.textContent = 'Not Readed';
    });

     btn1.addEventListener('click', function(){
        deleteStack.push(objectName);
        myLibrary.pop();
        console.log('delete stack: ', deleteStack);

        bkbuttoncontainer.removeChild(btn1);
         bkbuttoncontainer.removeChild(btn2);
         bkbuttoncontainer.removeChild(div1);
         bookList.removeChild(bkbuttoncontainer);
    });
    bkbuttoncontainer.appendChild(btn1);
    bkbuttoncontainer.appendChild(btn2);
    div1.textContent = objectName.title;

    const secdiv = document.createElement('div');
    container.appendChild(secdiv);
   /* const titlefeild = document.createElement('input');
    secdiv.appendChild(titlefeild);
    titlefeild.setAttribute('placeholder' , 'Enter Book Title')*/
}

 const outercontainer = document.querySelector('.outercontainer');

// INPUT FEILDS DECLARATION
  const titlefeild = document.createElement('input');
  const authorfeild = document.createElement('input');
  const pagefeild = document.createElement('input');
  const lable1 = document.createElement('label');
    lable1.textContent = 'Read Status: ';
   
  const readstatusfeild = document.createElement('select');
    const option1 = document.createElement('option');
    option1.textContent = 'Readed';
    readstatusfeild.appendChild(option1);
    const option2 = document.createElement('option');
    option2.textContent = 'Not Readed';
    readstatusfeild.appendChild(option2);
//FORM CONTAINER DECLARATION
//const formcontainer = document.createElement('div');

//ADD BOOK BUTTON
 const addbutton = document.querySelector('#addbutton');

    addbutton.addEventListener('click', function(){
        //FORM ELEMENT
        const formcontainer = document.createElement('div');
        formcontainer.className = 'formcontainer';
        container.appendChild(formcontainer);
      //  formcontainer.setAttribute('style', );

       // const titlefeild = document.createElement('input');
        titlefeild.className = 'title';
        formcontainer.appendChild(titlefeild);
        titlefeild.setAttribute('placeholder' , 'Enter Book Title')

         //const authorfeild = document.createElement('input');
        authorfeild.className = 'author';
        formcontainer.appendChild(authorfeild);
        authorfeild.setAttribute('placeholder' , 'Enter Author Name')

       // const pagefeild = document.createElement('input');
        pagefeild.setAttribute('type', 'number');
        pagefeild.className = 'page';
        formcontainer.appendChild(pagefeild);
        pagefeild.setAttribute('placeholder' , 'Enter Number of Pages');

       // const readstatusfeild = document.createElement('input');
        readstatusfeild.className = 'readstatus';
        formcontainer.appendChild(lable1);
        lable1.appendChild(readstatusfeild);

        readstatusfeild.setAttribute('placeholder' , 'Enter Read Status');

        const formbtncontainer = document.createElement('div');
        formbtncontainer.className = 'formbtncontainer';
        formcontainer.appendChild(formbtncontainer);


        const submitbutton = document.createElement('button');
        submitbutton.textContent = 'Submit';
        submitbutton.addEventListener('click', function(){
           // submitData();
        addBookToLibrary(`book${myLibrary.length + 1}`, titlefeild.value, authorfeild.value, pagefeild.value, readstatusfeild.value);
        titlefeild.value = '';
        authorfeild.value = '';
        pagefeild.value = '';
        container.removeChild(formcontainer);

        });
        formbtncontainer.appendChild(submitbutton);
        const cancelbutton = document.createElement('button');
        cancelbutton.textContent = 'Cancel';
        cancelbutton.addEventListener('click', function(){
            container.removeChild(formcontainer);
        });
        formbtncontainer.appendChild(cancelbutton);
        submitbutton.className = 'submitbtn';
        cancelbutton.className = 'cancelbtn';

        console.log('checking container: ',container)
        console.log('checking formcontainer: ', formcontainer);
    });

    // UNDO BUTTON 

        const undobutton = document.querySelector('#undo');
        undobutton.addEventListener('click', function(){
            if(deleteStack.length === 0){
             alert('Nothing to restore!');
            }else{
                myLibrary.push(deleteStack[deleteStack.length - 1]);
                addBookToLibrary(`book${myLibrary.length}`, deleteStack[deleteStack.length - 1].title, deleteStack[deleteStack.length - 1].author, deleteStack[deleteStack.length - 1].pages, deleteStack[deleteStack.length - 1].read);
                deleteStack.pop();
                console.log('deleted stack:', deleteStack);
            }
        });

addBookToLibrary('book1','Harry potter', 'Hari phishp', 908, 'Readed');
addBookToLibrary('book2', 'The Alchemist' , 'paulo coelho' , 678 , 'Not Readed');
addBookToLibrary('book3', 'The Hobbit', 'J.R.R. Tolkien', 310, 'not readed');
addBookToLibrary('book3', 'The Hobbit', 'J.R.R. Tolkien', 310, 'not readed');

