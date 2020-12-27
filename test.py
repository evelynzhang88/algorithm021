# # Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    if not root or root == p or root == q:
        return root
    left = self.lowestCommonAncestor(root.left, p, q)
    right = self.lowestCommonAncestor(root.right, p, q)
    if not left and not right:
        return  # 1.
    if not left:
        return right  # 3.
    if not right:
        return left  # 4.
    return root  # 2. if left and right:


print(lowestCommonAncestor(self, [3, 5, 1, 6, 2, 0, 8, None, None, 7, 4], 5, 1))
