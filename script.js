function performOperation(operation) {
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);

    if (isNaN(value1) || isNaN(value2)) {
        alert("Please enter valid numbers");
        return;
    }

    let result;

    switch(operation) {
        case 'add':
            result = value1 + value2;
            break;
        case 'subtract':
            result = value1 - value2;
            break;
        case 'multiply':
            result = value1 * value2;
            break;
        case 'divide':
            if (value2 === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = value1 / value2;
            break;
        case 'percentage':
            result = (value1 * value2) / 100;
            break;
        default:
            result = 0;
    }

    document.getElementById('result').textContent = result;
}
