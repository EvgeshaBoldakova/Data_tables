function DataTable(config, data) {
    const usersTable = document.querySelector(config.parent);

    const table = document.createElement("table");
    usersTable.appendChild(table);

    const thead = document.createElement("thead");
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    const trHead = document.createElement("tr");

    const thNumber = document.createElement("th");
    thNumber.appendChild(document.createTextNode("№"));
    trHead.appendChild(thNumber);

    // Filling header row in the table.
    for (let i = 0; i < config.columns.length; i++) {
        const th = document.createElement("th");
        let columnTitle = config.columns[i].title;
        th.appendChild(document.createTextNode(columnTitle));
        trHead.appendChild(th);
    }
    thead.appendChild(trHead);

    // Sequential filling of the table with data:
    // first the first cell of the row with the serial number, then the row to the end.
    // And so on for each row.
    for (let i = 0; i < data.length; i++) {
        const trData = document.createElement("tr");
        const td = document.createElement("td");
        const rowNumber = document.createTextNode((i + 1).toString());
        td.appendChild(rowNumber);
        trData.appendChild(td);
        for (let j = 0; j < config.columns.length; j++) {
            const td = document.createElement("td");
            td.appendChild(document.createTextNode(data[i][config.columns[j].value]))
            trData.appendChild(td);
        }
        tbody.appendChild(trData);
    }
}

const config1 = {
    parent: '#usersTable',
    columns: [
        {title: 'Ім’я', value: 'name'},
        {title: 'Прізвище', value: 'surname'},
        {title: 'Вік', value: 'age'},
    ]
};

const users = [
    {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
    {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
];

DataTable(config1, users);

const config2 = {
    parent: '#usersTable',
    columns: [
        {title: 'ID', value: 'id'},
        {title: 'Ім’я', value: 'name'},
        {title: 'Прізвище', value: 'surname'},
        {title: 'Рік народження', value: 'year'},
        {title: 'Вік', value: 'age'},
        {title: 'Клас', value: 'grade'},
    ]
};

const users1 = [
    {id: 30052, name: 'Леся', surname: 'Вороніна', year: 2010, age: 15, grade: '8-Б'},
    {id: 30053, name: 'Тоня', surname: 'Мішина', year: 2013, age: 11, grade: '5-А'},
    {id: 30054, name: 'Оля', surname: 'Зайцева', year: 2012, age: 13, grade: '6-В'},
];

DataTable(config2, users1);