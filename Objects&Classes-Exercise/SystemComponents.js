function solve(array) {
    let register = {};
    array.forEach(line => {
        let [systemName, componentName, subcomponentName] = line.split(' | ');
        if (!register[systemName]) {
            register[systemName] = {};
            register[systemName][componentName] = [];
            register[systemName][componentName].push({ subcomponentName });
        } else if (register[systemName] && !register[systemName][componentName]) {
            register[systemName][componentName] = [];
            register[systemName][componentName].push({ subcomponentName });
        } else {
            register[systemName][componentName].push({ subcomponentName });
        }
    })

    // Order the systems in register by amount of components, in descending order, as first criteria, and by alphabetical order as second criteria
    Object.keys(register).sort((a, b) => Object.keys(register[b]).length - Object.keys(register[a]).length || a.localeCompare(b));

    for (const [currentSystem, componentsCurrentSystem] of Object.entries(register)) {
        console.log(currentSystem);

        // the Components must be ordered by amount of Subcomponents, in descending order
        Object.keys(currentSystem).sort((a, b) => Object.keys(currentSystem[b]).length - Object.keys(currentSystem[a]).length);

        for (const [currentComponent, subcomponentsCurrentComponent] of Object.entries(componentsCurrentSystem)) {
            console.log(`|||${currentComponent}`);
            for (const subcomponent of Object.values(subcomponentsCurrentComponent)) {
                console.log(`||||||${subcomponent.subcomponentName}`);
            }
        }
    }
}

solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
)