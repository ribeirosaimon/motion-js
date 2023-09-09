export function decimalToPercentage(decimal) {
    const percentage = (decimal * 100).toFixed(2);
    return percentage + "%";
}

export function formatCurrency(value) {
    const roundedValue = parseFloat(value).toFixed(2);
    const parts = roundedValue.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return "$ " + parts.join('.');
}