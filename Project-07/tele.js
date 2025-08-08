const mainInput = document.querySelector('#Phone');
const errorMsg = document.querySelector('.p-2');

mainInput.addEventListener('input', (e) => {
    formatNumber(e);
    validateNumber();
});

mainInput.addEventListener('keydown', handleBackspace);

function formatNumber(e) {
    let numbers = e.target.value.replace(/\D/g, '');
    // if (numbers.length > 10) numbers = numbers.substring(0, 10);

    let formatted = numbers;

    if (numbers.length <= 3) {
        formatted = numbers;
    } else if (numbers.length >= 4) {
        formatted = `+(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}`;
        if (numbers.length >= 7) {
            formatted += `-${numbers.substring(6, 10)}`;
        }
    }

    mainInput.value = formatted;
}

function handleBackspace(e) {
    if (e.key === 'Backspace') {
        const rawNumbers = mainInput.value.replace(/\D/g, '');

        if (rawNumbers.length === 4) {
            mainInput.value = rawNumbers.substring(0, 3);
            e.preventDefault();
        }
    }
}

function validateNumber() {
    const rawNumbers = mainInput.value.replace(/\D/g, '');

    if (rawNumbers.length === 0) {
        mainInput.style.border = "";
        errorMsg.style.display = 'none';
        mainInput.classList.remove('shake');
        return;
    }

    if (rawNumbers.length < 10) {
        mainInput.style.border = "0.5px solid #dc2626";
        errorMsg.style.display = 'block';
        errorMsg.textContent = "Please enter a valid 10-digit phone number";

        mainInput.classList.add('shake');
        setTimeout(() => {
            mainInput.classList.remove('shake');
        }, 300);
    } else {
        mainInput.style.border = "1px solid green";
        errorMsg.style.display = 'none';
        mainInput.classList.remove('shake');
    }
}