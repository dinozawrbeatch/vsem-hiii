Surface.prototype.pyramid = (a = 10, b = 5, count = 20, height = 5, x = 0, z = 0) => {
    let points = [];
    let angle = 2 * Math.PI / count;
    for (let i = 0; i < count; i++) {
        points.push(new Point(a * Math.cos(0 + angle * i) + x, -5, b * Math.sin(0 + angle * i) + z));
    }
    points.push(new Point(x, height, z));
    return new Subject(points);
}