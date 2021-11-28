function solution() {
    let text = '';

    return {
        append: x => text += x,
        removeStart: n => text = text.slice(n),
        removeEnd: n => text = text.substring(0, text.length - n),
        print: () => console.log(text),
    };
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
