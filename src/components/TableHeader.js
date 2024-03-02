import React from 'react'; //import React library

function TableHeader({ columnNames }) {
    let elem = columnNames.map((columnName, index) => (
        <th key={columnName}>{columnName}</th>
      ));
    return (
        <thead>
            <tr>
                {elem}
            </tr>
        </thead>
    );
};

export {TableHeader};