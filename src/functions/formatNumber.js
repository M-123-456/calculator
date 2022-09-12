const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: 0,
})

export const formatNumber = (num) => {
    if(num === null) return;
    const [integer, decimal] = num.toString().split('.');
    if (decimal == null) return INTEGER_FORMATTER.format(integer);
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}` 
}