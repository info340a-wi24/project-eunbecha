import React from 'react'; //import React library

// function TableRow({song, artist, url}) {
//     return (
//         <tr>
//             <td>{song}</td>
//             <td>{artist}</td>
//             <td><a href={url}>{url}</a></td>
//         </tr>
//     );
// }

function TableRow({ song, artist, url, onClick }) {
    return (
      <tr>
        <td>{song}</td>
        <td>{artist}</td>
        <td><a href={url}>{url}</a></td>
      </tr>
    );
  }

export { TableRow }
