
//question 1 question 1 question 1 question 1 question 1
// 1. Count the number of records in the "Current Quarter Details" table.
var countItems = document.querySelectorAll('tbody > tr')
console.log(countItems.length)

//question 2 question 2 question 2 question 2 question 2
// // 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.

var settingImages = document.querySelectorAll('img')
    settingImages[0].setAttribute('src','http://unsplash.it/400?image=222')
    settingImages[1].setAttribute('src','http://unsplash.it/400?image=232')
    settingImages[2].setAttribute('src','http://unsplash.it/400?image=242')
    settingImages[3].setAttribute('src','http://unsplash.it/400?image=252')
console.log(settingImages)
var settingAlt = document.querySelectorAll('img')
    settingAlt[0].setAttribute('alt', 'Winter')
    settingAlt[1].setAttribute('alt', 'Spring')
    settingAlt[2].setAttribute('alt', 'Summer')
    settingAlt[3].setAttribute('alt', 'Fall')
console.log(settingAlt)
//Had this one figured out.  didn't work for the longest time because i misspelled seetingImage and forgot the s.  Check for the right variable!

// question 3 question 3 question 3 question 3
// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.

var randomNumber = Math.round(Math.random() * 100000)
var dots = document.querySelectorAll('.text-muted')
//console.log(dots)

   dots[0].innerHTML = '$' + randomNumber + '.00'
   dots[1].innerHTML = '$' + randomNumber + '.00'
   dots[2].innerHTML = '$' + randomNumber + '.00'
   dots[3].innerHTML = '$' + randomNumber + '.00'


console.log(dots)


// I came back to this question because i used innerHtML on the other problem and the dots are clearly in the span tag.  i am wishing that there is a different random number in all the data.  there isn't.


//question 4 question 4 question 4 question 4 question 4
// 4. Change the currently selected left side menu item from Overview to Reports.

var changeReports = document.querySelectorAll('.nav-sidebar > li')
changeReports[0].setAttribute('class', 'none')
changeReports[1].setAttribute('class', 'active')
console.log(changeReports)
/// feel like it's close.  finished this now that i figured out question 2.

// Question 5 Question 5 Question 5 Question 5
// 5. Set the default search input value to "Q4 sales".
var newInput =  document.querySelectorAll('.form-control')
//console.log(newInput)
newInput.forEach(function(input){
    input.setAttribute('placeholder', 'Q4 sales')
})

console.log(newInput)
//no idea what i am doing.  i can't use innerHTMl because it's an input.  got help with this one.

//Question 6 Question 6 Question 6 Question 6
// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
//add the bootstrap class to work. table
var addTables = document.querySelector('.table')
addTables.classList.add('table-hover')
console.log(addTables)

//finally figured out how to use the classlist.add with no errors.


//Question 7 Question 7 Question 7 Question 7
// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
var addSuccess = document.querySelectorAll('tbody > tr')
addSuccess[6].classList.add('success')
addSuccess[7].classList.add('success')
addSuccess[8].classList.add('success')
addSuccess[9].classList.add('success')

console.log(addSuccess)

/// used previous examples and forgot to console log to make sure I targeted the right section.  worded after i targeted tr

//Question 8 Question 8 Question 8 Question 8
// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
var titles = document.querySelectorAll('th')
//console.log(titles) found the section
titles[0].innerHTML= 'ID'
titles[1].innerHTML= 'First Name'
titles[2].innerHTML= 'Last Name'
titles[3].innerHTML='Department'
titles[4].innerHTML= 'Client'
console.log(titles)
/// was stuck on this for a bit.  realized i put the array of numbers on the innerHTML instead of titles.


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
/// did this in class.  I went through the code top to bottom and understand what we did and why we did it.  I just hope that I can do more of this on my own. 

//question 10 question 10 question 10 question 10
// 10. Make each word in the table capitalized.
var cells = document.querySelectorAll('tbody td')
cells.forEach(function(cell) {
   cell.classList.add('text-capitalize')
})
///used the querySelectorAll to use the array of data to add the text-capitalize.  should have looked through bootstrap for the text-capitalize.  doh.
