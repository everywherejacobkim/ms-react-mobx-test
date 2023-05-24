import * as React from "react";
import { BinTreeNode } from "../../types/TreeNode";
import "./TreeOutput.scss";

export interface TreeOutputProps {
    treeNode: BinTreeNode | null;
}

export const TreeOutput: React.FunctionComponent<TreeOutputProps> = (props) => {
    // Function to find the deepest nodes in the tree at a given depth
    const findDeepestNodes = (node: BinTreeNode | null, depth: number): BinTreeNode[] => {
        if (!node) {
            return [];
        }
        if (depth === 1 && !node.left && !node.right) {
            return [node];
        }
        // Find the deepest nodes in the left and right subtrees using recursion
        const leftNodes = findDeepestNodes(node.left, depth - 1);
        const rightNodes = findDeepestNodes(node.right, depth - 1);
    
        return [...leftNodes, ...rightNodes];
    };

    // Function to calculate the depth of the tree
    const getTreeDepth = (node: BinTreeNode | null): number => {
        if (!node) {
            return 0;
        }

        // Recursively calculate the depth of the left and right subtrees
        const leftDepth = getTreeDepth(node.left);
        const rightDepth = getTreeDepth(node.right);

        // Return the maximum depth of the left and right subtrees plus 1
        return Math.max(leftDepth, rightDepth) + 1;
    };

    // Calculate the maximum depth of the tree & Find the deepest nodes at the maximum depth
    const maxDepth = getTreeDepth(props.treeNode);
    const deepestNodes = findDeepestNodes(props.treeNode, maxDepth);

    let smallestSubtree: BinTreeNode | null = null;
    let smallestSubtreeSize = Infinity;

    // Iterate over the deepest nodes and find the smallest subtree
    deepestNodes.forEach((node) => {
        const subtreeSize = getTreeDepth(node);
        if (subtreeSize < smallestSubtreeSize) {
            smallestSubtree = node;
            smallestSubtreeSize = subtreeSize;
        }
    });

    // Function to recursively render the tree nodes
    const renderTreeNode = (node: BinTreeNode | null): JSX.Element | null => {
        if (!node || !node.id) {
            return null;
        }

        // Check if the current node is the smallest subtree node and add className for styling
        const isSmallestSubtree = node === smallestSubtree;
        const treeNodeClassName = isSmallestSubtree ? "treeNode smallestSubtree" : "treeNode";

        return (
            <div className={treeNodeClassName}>
                <div className="nodeId">{node.id}</div>
                {node.left || node.right ? (
                    <div className="nodeChildren">
                        {renderTreeNode(node.left)}
                        {renderTreeNode(node.right)}
                    </div>
                ) : null}
            </div>
        );
    };

    return <div>{renderTreeNode(props.treeNode)}</div>;
};