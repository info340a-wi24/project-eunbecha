import React from 'react'; //import React library

/* Your code goes here */

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