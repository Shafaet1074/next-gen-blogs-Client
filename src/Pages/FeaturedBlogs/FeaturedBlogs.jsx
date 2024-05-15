import React, { useState, useEffect } from 'react';
import { useTable, useSortBy } from 'react-table';

const FeaturedBlogs = () => {
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    // Fetch top posts data from the server
    fetch('https://nextgen-blogs.vercel.app/topposts')
      .then(response => response.json())
      .then(posts => {
        // Sort posts based on word count of LongDescription in descending order
        const sortedPosts = posts.sort((a, b) => {
          const wordCountA = a.LongDescription.split(/\s+/).length;
          const wordCountB = b.LongDescription.split(/\s+/).length;
          return wordCountB - wordCountA;
        });
        // Slice the top 10 posts
        const topTenPosts = sortedPosts.slice(0, 10);
        setTopPosts(topTenPosts);
      })
      .catch(error => console.error('Error fetching top posts:', error));
  }, []);

  // Define columns for ReactTable
  const columns = React.useMemo(
    () => [
      {
        Header: 'Serial No.',
        accessor: 'serialNumber' // Custom accessor for serial number
      },
      {
        Header: 'Title',
        accessor: 'Title'
      },
      {
        Header: 'Blog Owner',
        accessor: 'OwnnerName'
      },
      {
        Header: 'Profile Picture',
        accessor: 'OwnerPhotoURL',
        Cell: ({ row }) => (
          <img src={row.original?.OwnerPhotoURL} alt="Profile" className="w-10 h-10 rounded-full" />
        )
      }
    ],
    []
  );

  // Map over top posts and add serial numbers
  const data = React.useMemo(
    () =>
      topPosts.map((post, index) => ({
        ...post,
        serialNumber: index + 1
      })),
    [topPosts]
  );

  // Create a ReactTable instance with sorting functionality
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data }, useSortBy);

  return (
    <div className='md:p-20'>
      <div className="container mx-auto p-10 md:p-4">
        <h1 className="text-2xl font-bold my-4">Top 10 Feature Blogs</h1>
        <div className="overflow-x-auto">
          <table {...getTableProps()} className=" md:w-full w-1/4  border-collapse border border-green-700">
            <thead className="bg-green-400 ">
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="px-4 py-2  text-left font-semibold text-gray-800 border border-gray-800 cursor-pointer"
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
            <tbody {...getTableBodyProps()} className="divide-y divide-green-700">
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="hover:bg-gray-100 ">
                    {row.cells.map(cell => (
                      <td
                        {...cell.getCellProps()}
                        className="sm:px-4 sm:py-2 text-sm border border-gray-800"
                      >
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;