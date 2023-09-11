export function decimalToPercentage(decimal) {
    const percentage = decimal.toFixed(2);
    return percentage + "%";
}

export function formatCurrency(value) {
    const roundedValue = parseFloat(value).toFixed(2);
    const parts = roundedValue.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return "$ " + parts.join('.');
}

export function addThousandsCommas(numberStr) {
    try {
        const number = parseFloat(numberStr);
        if (isNaN(number)) {
            throw new Error("Error: The input is not a valid number.");
        }
        return number.toLocaleString('en-US');
    } catch (error) {
        return error.message;
    }
}
