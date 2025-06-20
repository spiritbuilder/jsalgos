import { NodeProps } from "../oldfiles/BinarySearchTree";

const maxBinaryTreeDepth = (head: NodeProps, depthSoFar = 0) => {
  let current = head;
  let left = 0;
  let right = 0;
  if (current.left) {
    left = maxBinaryTreeDepth(current.left, depthSoFar + 1);
  }
  if (current.right) {
    right = maxBinaryTreeDepth(current.right, depthSoFar + 1);
  }

  if (!current.left && !current.right) return 1;

  return Math.max(left, right) + 1;
};

export { maxBinaryTreeDepth };
