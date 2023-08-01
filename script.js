
const passportForm = document.getElementById('passportForm');
const resultArea = document.getElementById('resultArea');

passportForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (passportForm.checkValidity()) {
        showResults();
    } else {
        passportForm.classList.add('was-validated');
    }
});

function showResults() {
 
    const fullName = document.getElementById('fullName').value;
    const passportNumber = document.getElementById('passportNumber').value;
    const birthdate = document.getElementById('birthdate').value;
    const nationality = document.getElementById('nationality').value;
    const email = document.getElementById('email').value;


    document.getElementById('resultFullName').innerText = `Nombre Completo: ${fullName}`;
    document.getElementById('resultPassportNumber').innerText = `Número de Pasaporte: ${passportNumber}`;
    document.getElementById('resultBirthdate').innerText = `Fecha de Nacimiento: ${birthdate}`;
    document.getElementById('resultNationality').innerText = `Nacionalidad: ${nationality}`;
    document.getElementById('resultEmail').innerText = `Email: ${email}`;

   
    passportForm.style.display = 'none';
    resultArea.style.display = 'block';
}
