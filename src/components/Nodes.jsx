import React, { useState } from 'react';
import { IoIosFolder } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa6";

const Nodes = ({ node }) => {
    //state for identify the the node is opened or not
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div style={{marginLeft:'20px'}}>
            <div id='node' onClick={() => setIsOpen(!isOpen)}>
                <div id='symbol-container'>
                    {node.children && <FaGreaterThan id='greater-svg' className={isOpen ? "active" : null} />   }
                </div>
                <IoIosFolder id='folder-svg' />
                <div >{node.name}</div>
            </div>
            {/* if current node has children regressively passing chidren nodes to Nodes component */}
            {node.children && isOpen &&
                node.children.map(node => (
                    <Nodes key={node.id} node={node} />
                ))
            }
        </div>
    )
}

export default Nodes