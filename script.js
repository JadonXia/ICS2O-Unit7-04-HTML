// These are the variables I will need for the program.
let age = 0
let day = 0

// Next, I need to connect my button to a JavaScript function when clicked.
document.getElementById('button1').addEventListener('click', pricing)

// Finally, I have to program my function to carry out statements. When the statements are followed, an appropriate response will display.
function pricing () {
  age = document.getElementById('text1').value
  day = document.getElementById('text2').value
  age = parseInt(age)
  if ((age >= 12 && age <= 21) && (day == 'Wednesday' || day == 'Thursday')) {
    document.getElementById('results').innerHTML = 'You are eligible for the student pricing!'
  } else {
    document.getElementById('results').innerHTML = 'You are not eligible for student pricing.'
  }
}
