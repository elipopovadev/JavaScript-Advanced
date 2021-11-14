function solve(area, volume, input) {
    let result = JSON.parse(input)
        .map(object => {
            return {
                area: Math.abs(area.call(object)),
                volume: Math.abs(volume.call(object))
            }
        })
    return result;
}


function area() {
    return this.x * this.y;
};

function volume() {
    return this.x * this.y * this.z;
};

console.log(
    solve(area, volume, `[
        {"x":"10","y":"-22","z":"10"},
        {"x":"47","y":"7","z":"-5"},
        {"x":"55","y":"8","z":"0"},
        {"x":"100","y":"100","z":"100"},
        {"x":"55","y":"80","z":"250"}
        ]`
    ));