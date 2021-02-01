//Random User Generator



// function fetchBooks(value) {

//     fetch('https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyDOL_yKJFl_JfQAq8aRmme7tQJnfWtjqW8')
//         .then(response => response.json())
//         .then(data => {

//             let bookApi = data.items;
//             console.log(bookApi);
//             bookApi.forEach((e, index) => {

//                 let card = document.createElement('div')
//                 card.classList.add('card')
//                 card.style = 'max-width:250px;margin-top:25px'
//                 let apiImg = document.createElement('img')
//                 apiImg.classList.add('card-img-top')
//                 apiImg.src = e.volumeInfo.imageLinks.smallThumbnail;
//                 apiImg.style.width = '250px'
//                 card.append(apiImg)

//                 let newUl = document.createElement('ul')

//                 newUl.classList.add('list-group')
//                 newUl.classList.add('list-group-flush')

//                 let apiName;
//                 let apiPublish;
//                 let apiTitle;
//                 let apiPublisher;

//                 if (e.volumeInfo.authors != undefined) {


//                     apiName = document.createElement('li')
//                     apiName.classList.add('list-group-item')
//                     apiName.innerHTML = e.volumeInfo.authors;

//                     apiName.insertAdjacentHTML('afterbegin', "<span>Authors: </span>")
//                     newUl.append(apiName)
//                 }

//                 if (e.volumeInfo.publishedDate != undefined) {


//                     apiPublish = document.createElement('li')
//                     apiPublish.classList.add('list-group-item')
//                     apiPublish.innerHTML = e.volumeInfo.publishedDate;

//                     apiPublish.insertAdjacentHTML('afterbegin', "<span>Publish Date: </span>")
//                     newUl.append(apiPublish)
//                 }

//                 if (e.volumeInfo.title != undefined) {


//                     apiTitle = document.createElement('li')
//                     apiTitle.classList.add('list-group-item')
//                     apiTitle.innerHTML = e.volumeInfo.title;

//                     apiTitle.insertAdjacentHTML('afterbegin', "<span>Title: </span>")
//                     newUl.append(apiTitle)
//                 }



//                 if (e.volumeInfo.publisher != undefined) {


//                     apiPublisher = document.createElement('li')
//                     apiPublisher.classList.add('list-group-item')
//                     apiPublisher.innerHTML = e.volumeInfo.publisher;

//                     apiPublisher.insertAdjacentHTML('afterbegin', "<span>Publisher: </span>")
//                     newUl.append(apiPublisher)
//                 }

//                 card.append(newUl)

//                 document.body.append(card)

//             })




//         })

// }
// fetchBooks()


//





//Weather APP


// let modal = document.querySelector('.modalField');

// function getWeather(cName) {

//     fetch(`http://api.weatherapi.com/v1/current.json?key=69c705dcb2f4447eb72181420213101&q=${cName}`).then(resolve => resolve.json())
//         .then(data => {
//             console.log(data)

//             let weatherCnt = document.createElement('div')
//             weatherCnt.classList.add('weatherCnt')
//             let cityName = document.createElement('p')
//             cityName.innerHTML = data.location.name

//             let celsius = document.createElement('p')
//             celsius.innerHTML = data.current.temp_c

//             weatherCnt.append(celsius)
//             weatherCnt.append(cityName)

//             let modalX = document.createElement('div')
//             modalX.classList.add('modalX');
//             modalX.innerHTML = "X"
//             weatherCnt.append(modalX)

//             document.body.append(weatherCnt)

//         })

// }


// let addBtn = document.querySelector('.addBtn')

// function createModal() {
//     modal.innerHTML = `<div class="modalCnt">
//     <input type="text" name="" class="modalInput">

//     <button class="cancelBtn">Cancel</button>
//     <button class="saveBtn">Save</button>

// </div>`;

// }

// addBtn.addEventListener('click', function(e) {
//     createModal()

//     let cancelBtn = document.querySelector('.cancelBtn');

//     cancelBtn.addEventListener('click', function(c) {
//         c.target.parentElement.remove();
//     })

//     let modalInput = document.querySelector('.modalInput');
//     let searchVal;
//     modalInput.addEventListener('keyup', function(k) {
//         searchVal = k.target.value


//     })


//     let saveBtn = document.querySelector('.saveBtn');

//     saveBtn.addEventListener('click', function(s) {
//         getWeather(searchVal)
//         cancelBtn.parentElement.remove()
//         setTimeout(function() {
//             let modalXClose = document.querySelector('.modalX');


//             modalXClose.addEventListener('click', function(x) {

//                 x.target.parentElement.remove()

//             })
//         }, 500)


//     })



// })

//END
//



//High Order Functions


// fetch(`https://next.json-generator.com/api/json/get/VkBw8XP2d`).then(resolve => resolve.json())
//     .then(data => {
//         let allData = data;
//         console.log(allData);

//         let task1 = allData.map((users, index) => { return users.company == 'Amazon' && users.country == 'Georgia' })

//         task1.forEach(function(e, index) {
//             if (e == true) {
//                 console.log(allData[index]);
//             }
//         })

//         let task2 = allData.map((users, index) => { return users.company == 'Facebook' && users.department == 'IT' })

//         task2.forEach(function(e, index) {
//             if (e == true) {
//                 console.log(allData[index]);
//             }
//         })

//         let task3 = allData.map((users, index) => { return users.department == 'HR' && users.country == 'India' && users.salary > 500000 })

//         task3.forEach(function(e, index) {
//             if (e == true) {
//                 console.log(allData[index]);
//             }
//         })


//         // let task6 = allData.map((age) => { return 2021 - getYear(age.dob) });

//         // console.log(task6 / allData.length);

//         let task7 = allData.sort(function(a, b) {
//             if (a.name.first < b.name.first) { return -1; }
//             if (a.name.first > b.name.first) { return 1; }
//             return 0;
//         })
//         console.log(task7);


//         let task9 = allData.map((users, index) => { return users.country == 'USA' && users.company == 'Apple' })

//         let SumApple = 0;

//         task1.forEach(function(e, index) {
//             if (e == true) {
//                 SumApple += allData[index].salary

//             }
//         })

//         console.log(SumApple);


//     })

//end