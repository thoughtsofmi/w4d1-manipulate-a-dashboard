
//question 1 question 1 question 1 question 1 question 1
// 1. Count the number of records in the "Current Quarter Details" table.
var rows = document.querySelectorAll('tbody tr')
console.log(rows.length)

//question 2 question 2 question 2 question 2 question 2
// // 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.

var images = document.querySelectorAll('.placeholders img')
images[0].setAttribute('src', 'http://unsplash.it/400?image=1')
images[0].setAttribute('alt', 'winter image')
images[1].setAttribute('src', 'http://unsplash.it/400?image=1')
images[1].setAttribute('alt', 'spring image')
images[2].setAttribute('src', 'http://unsplash.it/400?image=1')
images[2].setAttribute('alt', 'summer image')
images[3].setAttribute('src', 'http://unsplash.it/400?image=1')
images[3].setAttribute('alt', 'fall image')
//Had this one figured out.  didn't work for the longest time because i misspelled seetingImage and forgot the s.  Check for the right variable!

// question 3 question 3 question 3 question 3
// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.

var subTitles = document.querySelectorALl('.placeholders span')
function makeRandomAmount() {
   '$' + Math.round(Math.random() *10000) + '.00'
}
subTitles[0].innerHTML  = makeRandomAmount()
subTitles[1].innerHTML  = makeRandomAmount()
subTitles[2].innerHTML  = makeRandomAmount()
subTitles[3].innerHTML  = makeRandomAmount()

//question 4 question 4 question 4 question 4 question 4
// 4. Change the currently selected left side menu item from Overview to Reports.

document.querySelector('.nav-sidebar li:nth-child(1)').classList.remove('active')
document.querySelector('.nav-sidebar li:nth-child(2)').classList.add('active')
//alternative way
var navItems = documetn.querySelectorAll('.nav-sidebar li')
navItems[0].classList.remove('active')
navItems[1].classList.add('active')

// Question 5 Question 5 Question 5 Question 5
// 5. Set the default search input value to "Q4 sales".

document.querySelector('.navbar-form input').value = 'Q4 sales'
//console.dir(.navbar-form input)
document.querySelector('.navbar-form input').setAttribute('value', 'Q4 Sales')

///use value instead of innerHTML for form fields.

//Question 6 Question 6 Question 6 Question 6
// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
//add the bootstrap class to work. table
document.querySelector('table').classList.add('table-hover')


//Question 7 Question 7 Question 7 Question 7
// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
var rows = document.querySelectorAll('tbody tr')
rows = Array.from(rows)//create an array for what looks like an array.
rows = rows.filter(function(row,index) {
   return (index >=7 && index <=10) //use index to find out what number it is.
   }
})
rows.forEach(function(row){
   row.classList.add('success')
})
//alt

var rows = document.querySelectorAll('tbody tr')

//Question 8 Question 8 Question 8 Question 8
// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.

// long way
var titles = document.querySelectorAll('thead th')
//console.log(titles) found the section
titles[0].innerHTML= 'ID'
titles[1].innerHTML= 'First Name'
titles[2].innerHTML= 'Last Name'
titles[3].innerHTML='Department'
titles[4].innerHTML= 'Client'
console.log(titles)
//alternative
var titles = document.querySelectorAll('thead th')
headers.forEach(function(header, i) {
   var headerLabels = [ 'ID', 'First Name', 'Last Name', 'Department', 'Client']
})


//Question 9 Question 9 Question 9 Question 9
// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

var rows = document.querySelectorAll('tbody tr')
var rowsArray = []
rows.forEach(function(row) {
   //childnodes will give you every node.  use children it is easier.
   //console.dir(row.children[0].innerHTML)
   var rowObject = {
      id: Number(row.children[0].innerHTML.replace(',', '')),//replace the comma with a blank.  get rid of the comma.  can attach the replace to innerHTML because it's a string.  innerHTML is just text.  we are doing number to wrap the entire thing in number to give you one value.
      firstName: row.children[1].innerHTML ,
      lastName: row.children[2].innerHTML,
      department: row.children[3].innerHTML,
      client: row.children[4].innerHTML,
   }
rowsArray.push(rowObject)
})
//alt easier way
var rows = document.querySelectorAll('tbody tr')
rows=Array.from(rows).map(function(row){
   return {
      id: Number(row.children[0].innerHTML.replace(',', '')),
      firstName: row.children[1].innerHTML ,
      lastName: row.children[2].innerHTML,
      department: row.children[3].innerHTML,
      client: row.children[4].innerHTML,
   }
})
//need to make an array.   no need to push
console.log(rowsArray)





//question 10 question 10 question 10 question 10
// 10. Make each word in the table capitalized.
var cells = document.querySelectorAll('tbody td')
cells.forEach(function(cell) {
   cell.classList.add('text-capitalize')
})
/// see what i can add using bootstrap first.
//alt
var cells = document.querySelectorAll('tbody td')
function capitalize(word) {
   return word.charAT(0).toUpperCase() + word.slice(1)
}// grabs the first character and capitalize, then add the word again without the first letter.
cells.forEach(function(cell) {
   cell.innerHTML = capitalize(cell.innerHTML)
})

//alt
var cells = document.querySelectorAll('tbody td')
cells.forEach(function(cell) {
   //cell.style.textTransform = 'capitalize'
})
