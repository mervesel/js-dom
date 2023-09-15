document.addEventListener('DOMContentLoaded',function()
{
  // const list = document.querySelector('#book-list ul');

// // delete books
// list.addEventListener('click', (e) => {
//   if(e.target.className == 'delete'){
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   }
// });


//tutorial 1- get elements by id
var banner=document.getElementById("page-banner");
console.log(banner);

var bookList=document.getElementById("book-list");
console.log(bookList);

//tutorial 2 - get elements by classname
var titles=document.getElementsByClassName("title");
console.log(titles); //dizinin elemanlarına ayrı ayrı ulaşmak için index numaralrıyla çağırıyoruz
console.log(titles[0]);
console.log(titles[1]);

for(i=0;i<titles.length;i++){ //dizinin elemanlarını tek seferde konsolda görebiliriz.
  console.log(titles[i]);
}
//for'a alternatif foreach ile de elemanlarını çağırabiliriz.
console.log(Array.isArray(titles)); //false
console.log(Array.isArray(Array.from(titles))); //true
Array.from(titles).forEach(function(item){
  console.log(item);
})

// get elements by tag name
var lis=document.getElementsByTagName("li");
console.log(lis);
console.log(lis[0]);
console.log(lis[1]);
console.log(lis[2]);
console.log(lis[3]);

//tutorial 4 - the query selector
var banner=document.querySelector("#page-banner");
console.log(banner);

const wrapper=document.querySelector("#wrapper");
console.log(wrapper);

const wmf=document.querySelector("#book-list li:nth-child(2) .name");
console.log(wmf);

var books=document.querySelectorAll("#book-list li .name");
// console.log(books[0]);
// console.log(books[1]);
// console.log(books[2]);
// console.log(books[3]);

Array.from(books).forEach(function(book){
  console.log(book);
})

//tutorial 5 - changing text & html content
//innerHtml,textContent,innerText
var books=document.querySelectorAll("#book-list li .name"); //birden fazla aynı eleman varsa querySelectorAll kullanırız.querySelectorAll da Array.from kullanmak zorunda değilsin çünkü bu zaten dizi
books.forEach(function(book){
  // console.log(book.textContent);
  // book.textContent += '(book title)';
})


// var booksList=document.querySelector("#book-list");
// bookList.innerHTML="<h2>Books and more books...</h2>";
// bookList.innerHTML += "<p>This is how you add html</p>"

//tutorial 6- nodes
//everything in the document,page is node
var banner=document.querySelector("#page-banner");
console.log(banner.nodeType); //1
console.log(banner.nodeName); //DIV
console.log(banner.hasChildNodes()); //true

const clonedBanner=banner.cloneNode(true);
console.log(clonedBanner); //divin içeriği ,childi her şeyiyle consolda gözükür.false yaparsak sadece kendisi gözükür

//tutorial 7 -  dom traversal (parent & child)
//bir elementten diğerine nasıl geçiş yapabileceğiz
var bookList=document.querySelector("#book-list");
// console.log(bookList.parentNode);
// console.log(bookList.parentElement);
// console.log(bookList.parentElement.parentElement); //body
console.log(bookList.childNodes);
console.log(bookList.children);



// tutorial 8- traversing the dom (siblings)
//nextElementSibling & previousElementSibling
var bookList=document.querySelector("#book-list");
console.log(bookList.nextElementSibling);
console.log(bookList.previousElementSibling);

//tutorial 9 - events
// var h2=document.querySelector('#book-list');
// h2.addEventListener('click',function(e){
//   console.log(e);
//   console.log(e.target);

// })

//delete butonuna event yazacağız
var btns=document.querySelectorAll('#book-list .delete');

btns.forEach(function(btn){
  btn.addEventListener('click',function(e){
    const li=e.target.parentElement;
    li.parentNode.removeChild(li);
  })

  
})

//index.html'de a linki ekledik ve onun varsayılan özelliğini kapatma eventi yazacağız

// var link=document.querySelector("#page-banner a");

// link.addEventListener("click",function(e){
//   e.preventDefault();
//   console.log("navigation to ",e.target.textContent ," was prevented.");
// })

//tutorial 10 - event bubbling
const list=document.querySelector("#book-list ul");
list.addEventListener('click',function(e){
  if(e.target.className=='delete'){
    const li=e.target.parentElement;
    list.removeChild(li);
  }
})

//tutorial 11 -interacting with forms
// document.forms
//document.forms[0] 
//document.forms['search-books']
//document.forms['add-book']

//add books
const addForm=document.forms['add-book'];
addForm.addEventListener('submit',function(e){
  e.preventDefault();
  const value=addForm.querySelector('input[type="text"]').value;

//tutorial 12- creating elements
//bir tane li , iki tane de span elemanı oluşturmalıyız.

//create elements
  const li=document.createElement('li');
  const bookName=document.createElement('span');
  const deleteBtn=document.createElement('span');

//add content
deleteBtn.textContent='delete';
bookName.textContent=value;

//add classes
bookName.classList.add('name');
deleteBtn.classList.add('delete');

//append to document
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);
})

//tutorial 14 - attributes
//getAttribute('')
//setAttribute('')
//hasAttribute('')
//removeAttribute('')

//tutorial 15 - checkboxes & change events
//hide books
const hideBox=document.querySelector('#hide');
hideBox.addEventListener('change',function(e){
  if(hideBox.checked){
    list.style.display='none';
  }
  else{
    list.style.display="initial";
  }
})

//tutorial 16 - custom search filter
const searchBar=document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
  const term=e.target.value.toLowerCase();
  const books=list.getElementsByTagName('li');
  Array.from(books).forEach(function(book){
    const title=book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) !=-1){
      book.style.display="block";
    }else{
      book.style.display="none";
    }
  })
})

//tutorial last - DOMContentLoaded event
//script js dosyamız body tagı arsında olduğunda sayfanın çalışmasında herhangi bir sıkıntı yok ama bu scripti head etiketi içine aldığımızda js çalışmıyor.bunu düzeltelim.

//document.addEventListener('DOMContentLoaded',function(){
  //tüm js kodlarını bunun içine alıyoruz

// })






})

