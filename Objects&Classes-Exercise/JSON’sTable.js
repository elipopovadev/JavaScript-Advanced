function solve(array) {
    let employees = array.map(x => JSON.parse(x));

    let html = '<table>';
    employees.forEach(currentEmployee => {
        html += `\n\t<tr>${Object.values(currentEmployee).map(x => `\n\t\t<td>${x}</td>`).join('')}\n\t</tr>`;
    });

    html += '\n</table>';
    console.log(html);
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
)