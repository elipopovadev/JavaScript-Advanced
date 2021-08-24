// input: ['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},
// {"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']

function solve(input) {
    let jsonData = input.shift();
    let students = JSON.parse(jsonData);
    let firstObject = students[0];

    let html = '<table>';
    html+= `<tr>${Object.keys(firstObject).map(x => `<th>${x}</th>`).join('')}</tr>`;

    students.forEach(student =>{
        html+= `<tr>${Object.values(student).map(x => `<td>${x}</td>`).join('')}</tr>`;
    })

    html += '</table>';
    console.log(html);
}

solve(
['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']
)