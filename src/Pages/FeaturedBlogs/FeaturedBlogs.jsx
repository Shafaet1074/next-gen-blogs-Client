import React, { useState, useEffect } from 'react';
import { useTable, useSortBy} from 'react-table';
import axios from 'axios';

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5004/addblogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Serial Number',
        accessor: 'serialNumber',
      },
      {
        Header: 'Blog Title',
        accessor: 'Title',
      },
      {
        Header: 'Blog Owner',
        accessor: 'OwnnerName',
      },
      {
        Header: 'Blog Owner Profile Picture',
        accessor: 'ownerProfilePicture',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data: blogs },
    useSortBy
  );
  return (
    <div className="container md:mx-auto p-2 md:p-10">
      <table className="table-auto md:min-w-full" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  key={column.id}
                  className="md:px-4  md:py-2 py-1 bg-green-400 text-gray-700 font-semibold text-sm cursor-pointer"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      key={cell.row.index}
                      className="border px-4 py-2"
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturedBlogs;