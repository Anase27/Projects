const Tree = require('./bst')

const root = Tree([1,1,1,1,2,2,2,2,3,3,3,3,9,20,4,6,8,7]);
root.insert(121);
root.insert(101);
root.insert(123);
root.insert(111);
root.insert(107);
root.insert(113);
root.insert(114);
root.prettyPrint();
console.log(root.isBalanced())
console.log("LevelOrder:- " + root.levleOrder());
console.log("PreOrder:-   " + root.preorder());
console.log("InOrder:-    " + root.inorder());
console.log("PostOrder:-  " + root.postorder());
root.rebalance();
console.log("************************AFTER REBALANCING******************");
root.prettyPrint();
console.log(root.isBalanced())
console.log("LevelOrder:- " + root.levleOrder());
console.log("PreOrder:-   " + root.preorder());
console.log("InOrder:-    " + root.inorder());
console.log("PostOrder:-  " + root.postorder());
