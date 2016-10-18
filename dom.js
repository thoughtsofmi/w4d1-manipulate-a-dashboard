var body = document.body
console.log(body)

var h1 = document.body.childNodes[1]
console.log(h1)
//returning the h1 we wanted.

var helloWorld = h1.innerHTML
console.log(helloWorld)
// to grab the inside contents of something
h1.innerHTML = 'Hello Universe'
//so you change the the hello world to hello Universe

console.dir(h1)
//instead of log, gives us a directory that we have found

/// line 1-16 is manual way.  longer way

var helloH1 = document.getElementById('hello')
console.log(helloH1)
// don't use #.
// var navItems =
// document.getElementsByClassNames('nav-item')
//console.log(navItems)
//
var navItems = document.querySelectorAll('body *')
console.log(navItems)

//comes out as an array

var helloH1 =
document.querySelectorAll('#hello')
console.log(helloH1)

//console.log(navItems.includes('li'))
//not an array.  looks like nav Items is an array.  but not.

//convert NodeLIst to an Aarray data type
//console.log(Array.from(navItems).includes('li'))
//can use filter and things because it is now an array.

// navItems.forEach(function(navItem){
//     //console.dir(navItem)
//     //console.log(navItem.tagName)
//     if(navItem.tagName === 'LI'){
//         navItem.style.color === 'red'
//     }
// })
//can use navItem.id if you use id


navItems.forEach(function(navItem){
    //console.dir(navItem)
    //console.log(navItem.tagName)

    navItem.addEventListener('mouseover', function(e){
        e.target.classList.add('red')
    })
    navItem.addEventListener('mouseout', function(e){
        e.target.classList.remove('red')
    })
    navItem.addEventListener('click', function(e){
        e.target.remove()
    })

    // if(navItem.tagName === 'LI' && navItem.classList.contains('active')){
    //     //navItem.style.color === 'red'
    //     navItem.classList.add('red')
    // }
})//also targeting the active class in the first nav item.

var navItems = document.querySelectorAll('.nav-item')
navItems.forEach(function(navItem){
    console.log(navItem.className)
    console.log(navItem.id)
    console.log(navItem.tagName)
    //console.log(navItem.classList)
    console.log(navItem.getAttribute('title'))
    console.log(navItem.getAttribute('data-details'))
    console.log(navItem.setAttribute('title', 'Foo')) //change title to foo
    navItem.innerHtML = navItem.getAttribute('data-details')
    navItem.innerHtML = '<a href="http://google.com">' + navItem.getAttribute('data-details') + '</a>'
    console.log(navItem.innerHtml)
})
var searchInput = document.getElementById('search')
var searchInput = document.querySelector('#search')
searchInput.setAttribute('value', 'pizza parties in my area')
searchInput.value = 'movies near me'
alert(searchInput.value)
alert(searchInput.getAttribute('value'))
// 1. Count the number of records in the "Current Quarter Details" table.
///find the tr and count them all
array of the matching tr and do querySelectorAll.length

16

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
download or use unsplash.
use class.look at order.  first item. second item, thir d item. target those.
setattribute.src  set alt.. winter image.
image. index.
// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.
randomly generate a number every time you refresh.  math.random. use accounting js.  use string or arrays need $ format.  ok if no comma.


// 4. Change the currently selected left side menu item from Overview to Reports.
unselect overview.  click on reports on blue.
classlist.  what is making it is bootstrap.  take it off and add to another



// 5. Set the default search input value to "Q4 sales".
pizza party in our area
search input = getElementById

query selector all
document.querySelector('form-control')

search.value === q4
// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
as you hover, highlight the row. .table-rower that adds to the table

// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>



// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.


// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

in console log.. object in a row.  real data not going to change


// 10. Make each word in the table capitalized.


var body = document.body
console.log(body)

var h1 = document.body.childNodes[1]
console.log(h1)

var helloWorld = h1.innerHTML
console.log(helloWorld)

h1.innerHTML = 'Hello Universe'

console.dir(h1)

var helloH1 = document.getElementById('hello')
console.log(helloH1)

var navItems = document.getElementsByClassName('nav-item')
console.log(navItems)

var navItems = document.querySelectorAll('body *')
console.log(navItems)

var helloH1 = document.querySelector('#hello')
console.log(helloH1)

// Convert NodeList to an Array data type
//console.log(Array.from(navItems).filter())

navItems.forEach(function(navItem) {
    //console.dir(navItem)
    //console.log(navItem.tagName)
    navItem.addEventListener('mouseover', function(e) {
        e.target.classList.add('red')
    })

    navItem.addEventListener('mouseout', function(e) {
        e.target.classList.remove('red')
    })

    navItem.addEventListener('click', function(e) {
        e.target.remove()
    })

    // if (navItem.tagName === 'LI' && navItem.classList.contains('active')) {
    //     //navItem.style.color = 'red'
    //     navItem.classList.add('red')
    // }
})

var navItems = document.querySelectorAll('.nav-item')

navItems.forEach(function(navItem) {

    console.log(navItem.id)
    console.log(navItem.tagName)
    console.log(navItem.className)
    console.log(navItem.getAttribute('title'))
    console.log(navItem.setAttribute('title', 'Foo'))
    console.log(navItem.getAttribute('data-details'))
    navItem.innerHTML = '<a href="http://google.com">' + navItem.getAttribute('data-details') + '</a>'
    console.log(navItem.innerHTML)


})

var searchInput = document.getElementById('search')
var searchInput = document.querySelector('#search')

// searchInput.forEach(function(input) {
//     input.setAttribute('value', 'test')
// })

searchInput.setAttribute('value', 'pizza parties in my area')
searchInput.value = 'movies near me'

alert(searchInput.value)
//alert(searchInput.getAttribute('value'))
