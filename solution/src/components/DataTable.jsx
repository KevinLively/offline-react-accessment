import React from 'react'

const DataTable = ({entries}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                   <td>Name</td>
                   <td>Location</td>
                </tr>
            </thead>
            <tbody>
                {entries.map((entry, index) => (
                    <tr key={index}>
                        <td>{entry.name}</td>
                        <td>{entry.location}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default DataTable;