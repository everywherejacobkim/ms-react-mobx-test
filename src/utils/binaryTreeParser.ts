interface BinTreeNode {
  id: string | number;
  left?: BinTreeNode;
  right?: BinTreeNode;
}

// Function to convert a binary tree represented as an array into JSON format
export function convertBinaryTreeToJSON(arr: any[]): string {

  // Recursive function to parse an array into a binary tree
  function parseArrayToBinaryTree(arr: any[]): BinTreeNode {
    const [id, leftChild, rightChild] = arr;

    // Create a new node with the extracted ID
    const node: BinTreeNode = {
      id,
    };
    
    // If the child is an array, recursively parse it Otherwise, create a new node with the ID
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

  // Parse the input array into a binary tree structure
  const parsedTree = parseArrayToBinaryTree(arr);
  
  // Convert the binary tree to a JSON string
  const parsedJSON = JSON.stringify(parsedTree, null, 2);

  return parsedJSON;
}

