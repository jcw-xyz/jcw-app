export default function stringToFixed(val: string, digit: number) {
    return parseFloat(val).toFixed(digit);
}
