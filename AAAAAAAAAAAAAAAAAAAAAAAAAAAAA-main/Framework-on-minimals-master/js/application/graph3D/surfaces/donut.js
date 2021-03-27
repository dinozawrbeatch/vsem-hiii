Surface.prototype.donut = (x, y, z, r, count) => {
    let points = [];
    let angle = 2 * Math.PI / count;
    for(let j = 0; j < 20; j++){
        for (let i = 0; i < count; i++) { 
            points.push(
                new Point(
                    r * Math.cos(angle * i),
                    r * Math.sin(angle * i),
                    z + j*3
                )
            );
        }            
    }
    
    return new Subject(points);
}