import * as React from "react";
import { BinTreeNode } from "../../types/TreeNode";
import "./TreeOutput.scss";

export interface TreeOutputProps {
    treeNode: BinTreeNode | null;
}

export const TreeOutput: React.FunctionComponent<TreeOutputProps> = (props) => {
    const findDeepestNodes = (node: BinTreeNode | null, depth: number): BinTreeNode[] => {
        if (!node) {
            return [];
        }
            
        if (depth === 1 && !node.left && !node.right) {
            return [node];
        }
            
        const leftNodes = findDeepestNodes(node.left, depth - 1);
        const rightNodes = findDeepestNodes(node.right, depth - 1);
    
        return [...leftNodes, ...rightNodes];
    };

    const getTreeDepth = (node: BinTreeNode | null): number => {
        if (!node) {
            return 0;
        }

        const leftDepth = getTreeDepth(node.left);
        const rightDepth = getTreeDepth(node.right);

        return Math.max(leftDepth, rightDepth) + 1;
    };

    const maxDepth = getTreeDepth(props.treeNode);
    const deepestNodes = findDeepestNodes(props.treeNode, maxDepth);

    let smallestSubtree: BinTreeNode | null = null;
    let smallestSubtreeSize = Infinity;

    deepestNodes.forEach((node) => {
        const subtreeSize = getTreeDepth(node);
        if (subtreeSize < smallestSubtreeSize) {
            smallestSubtree = node;
            smallestSubtreeSize = subtreeSize;
        }
    });

    const renderTreeNode = (node: BinTreeNode | null): JSX.Element | null => {
        if (!node || !node.id) {
            return null;
        }

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