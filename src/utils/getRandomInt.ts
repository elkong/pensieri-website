/*
    getRandomInt
    returns a random integer in [min, max)
    inclusive of min but exclusive of max
*/
export function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}