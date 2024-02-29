import React from 'react'; //import React library

function TableRow({props}) {
    return (
        <tr>
            <td>{props.song}</td>
            <td>{props.artist}</td>
            <td><a href={props.url}>{props.url}</a></td>
        </tr>
    );
}

export { TableRow }