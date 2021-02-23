export const distanceBetween = (x: string, y: string) => {
    const [x1, x2] = x.split('|').map(el => parseInt(el, 10));
    const [y1, y2] = y.split('|').map(el => parseInt(el, 10));

    return Math.max(Math.abs(x1-y1), Math.abs(x2-y2));
}