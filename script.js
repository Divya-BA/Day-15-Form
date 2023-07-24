document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('form');
    let tableBody = document.querySelector('#dataTable tbody');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      var firstName = document.getElementById('firstName').value;
      var lastName = document.getElementById('lastName').value;
      var address = document.getElementById('address').value;
      var pincode = document.getElementById('pincode').value;
      var gender = document.querySelector('input[name="gender"]:checked').value;
  
      var foods = document.querySelectorAll('input[name="food"]:checked');
      var choiceOfFood = [...foods].map(food => food.value).join(', ');
  
      var state = document.getElementById('state').value;
      var country = document.getElementById('country').value;
  
      // Append data to the table
      const newRow = tableBody.insertRow();
      newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${choiceOfFood}</td>
        <td>${state}</td>
        <td>${country}</td>
      `;
  
      // Clear the form fields after submitting
      form.reset();
    });
  });
  