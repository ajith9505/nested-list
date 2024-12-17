import TreeView from "./components/TreeView"
import './App.css';

function App() {
  //input data
  const data = [
    {
      id: 11, name: 'folder', children: [
        {
          id: 1, name: 'folder-1', children: [
            {
              id: 1.1, name: 'folder-1.1', children: [
                { id: 1.11, name: 'folder-1.11' },
                { id: 1.12, name: 'folder-1.12' },
                { id: 1.13, name: 'folder-1.13' },
                { id: 1.14, name: 'folder-1.14' },
              ]
            },
            { id: 1.2, name: 'folder-1.2' },
          ]
        },
        {
          id: 2, name: 'folder-2', children: [
            { id: 2.1, name: 'folder-2.1' },
            {
              id: 2.2, name: 'folder-2.2', children: [
                { id: 2.11, name: 'folder-2.11' },
                { id: 2.12, name: 'folder-2.12' },
                { id: 2.13, name: 'folder-2.13' },
                { id: 2.14, name: 'folder-2.14' },
              ]
            }
          ]
        },
        {
          id: 3, name: 'folder-3', children: [
            { id: 3.1, name: 'folder-3.1' },
            { id: 3.2, name: 'folder-3.2' },
            {
              id: 3.3, name: 'folder-3.3', children: [
                { id: 3.11, name: 'folder-3.11' },
                { id: 3.12, name: 'folder-3.12' },
                { id: 3.13, name: 'folder-3.13' },
                { id: 3.14, name: 'folder-3.14' },
              ]
            }
          ]
        },
      ]
    }
  ];

  return (
    <>
      <h1>Folder Structure</h1>
      {/* passing data props to child component */}
      <TreeView data={data} />
    </>
  )
}

export default App
