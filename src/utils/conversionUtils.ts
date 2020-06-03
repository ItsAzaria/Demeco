

export function ctof(celsius: number): string {
    return ((celsius * 1.8) + 32).toFixed(2) + '°F';
}

export function ftoc(farenheight: number): string {
    return ((farenheight - 32) / 1.8).toFixed(2) + '°C';
}