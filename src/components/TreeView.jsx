import Nodes from "./Nodes";

const TreeView = ({ data }) => {
    return (
        <div>
            {/* traverse though input array and passing props to Nodes component */}
            {data.map((node) =>
                (<Nodes key={node.id} node={node} />)
            )}
        </div>
    );
};

export default TreeView