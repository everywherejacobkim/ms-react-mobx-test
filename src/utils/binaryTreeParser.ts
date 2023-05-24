interface BinTreeNode {
  id: string | number;
  left?: BinTreeNode;
  right?: BinTreeNode;
}

export function convertBinaryTreeToJSON(arr: any[]): string {
  function parseArrayToBinaryTree(arr: any[]): BinTreeNode {
    const [id, leftChild, rightChild] = arr;
    const node: BinTreeNode = {
      id,
    };

    if (leftChild !== undefined) {
      node.left = Array.isArray(leftChild)
        ? parseArrayToBinaryTree(leftChild)
        : { id: leftChild };
    }

    if (rightChild !== undefined) {
      node.right = Array.isArray(rightChild)
        ? parseArrayToBinaryTree(rightChild)
        : { id: rightChild };
    }

    return node;
  }

  const parsedTree = parseArrayToBinaryTree(arr);
  const parsedJSON = JSON.stringify(parsedTree, null, 2);

  return parsedJSON;
}

