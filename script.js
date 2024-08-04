document.getElementById('calculateButton').addEventListener('click', calculateAge);

function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (dob) {
        const dobDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - dobDate.getFullYear();
        const monthDifference = today.getMonth() - dobDate.getMonth();
        
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobDate.getDate())) {
            age--;
        }

        document.getElementById('ageOutput').textContent = `You are ${age} years old.`;
    } else {
        document.getElementById('ageOutput').textContent = 'Please enter your date of birth.';
    }
}
