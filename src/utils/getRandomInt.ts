/*
    getRandomInt
    returns a random integer in [min, max)
    inclusive of min but exclusive of max
*/
export function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/*
    getRandomIntExcludingCurrent
    returns a random integer in [min, max)
    inclusive of min but exclusive of max
    and is guaranteed not to return current
*/
export function getRandomIntExcludingCurrent(min: number, max: number, current: number) {
    if (max <= min + 1) {
        return min;
    } else if (current >= min && current < max) {
        const intermediate = Math.floor(Math.random() * (max - min - 1)) + min;
        return (intermediate >= current) ? intermediate + 1 : intermediate;
    } else {
        return getRandomInt(min, max);
    }
}