function treeNode(data, right = null, left = null) {
	return {
		data,
		right,
		left,
	};
}
function buildTree(arr, start = 0, end = arr.length-1) {
	if (start > end) return null;

	let mid = parseInt((start + end) / 2);
	let root = treeNode(arr[mid]);

	root.left = buildTree(arr, start, mid - 1);
	root.right = buildTree(arr, mid + 1, end);

	return root;
}

function Tree(arr) {
	let uniqArr;
	uniqArr = [...new Set([...arr.sort((a, b) => a - b)])];
	// return uniqArr;
    
    let root = buildTree(uniqArr);
    // console.log(root);

	const prettyPrint = (node=root, prefix = "", isLeft = true) => {
		if (node === null) {
			return;
		}
		if (node.right !== null) {
			prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
		}
		console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
		if (node.left !== null) {
			prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
		}
	};
    // const getRoot = () => {
    //     return root;
    // }
	
    // prettyPrint(root);
	const insert = (value,node=root) =>{
		while(node){
			if(node.data<value) {
				if (node.right == null){
					node.right = treeNode(value);
					node = node.right;
				} 
				node = node.right;
			}
			else {
				if (node.left == null) {
					node.left = treeNode(value);
					node = node.left;
				}
				node = node.left;
			}
		}
	}
	const del = (value,node = root) => {
		if(node == null) return node;

		if(node.data > value)
			node.left = del(value,node.left);

		else if(node.data < value)
			node.right = del(value,node.right);
		else{
			if(node.left == null)
				return node.right;
			
			else if(node.right == null)
				return node.left

			let cur = node.right;
			while(cur.left)
				cur = cur.left;
			node.data = cur.data;
			node.right = del(node.data,node.right);
		}
		return node;
	}
	const find = (value,node=root) => {
		while(node){
			if(node.data == value)
				return node;
			else if(node.data > value)
				node = node.left;
			else
				node = node.right;
		}
		return node;
	}
	const levleOrder = (callback) => {
		let queue = [];
		let ans = [];
		if(root == null) return queue;
		queue.push(root);
		while(queue.length){
			let temp = queue.shift();
			ans.push(temp.data);
			if(temp.left) queue.push(temp.left);
			if(temp.right) queue.push(temp.right);
			if(callback) callback(temp);
		}
		if(!callback) return ans;

	}
	const preorder = (callback,node=root,ans=[]) => {
		if(node == null) return ans;
		callback ? callback(node) : ans.push(node.data);
		preorder(callback,node.left,ans);
		preorder(callback,node.right,ans);
		if(ans.length) return ans;
	}
	const itPreorder = (callback) => {
		let ans = [];
		let stack = [];
		stack.push(root);
		while (stack.length) {
			let temp = stack.pop();
			ans.push(temp.data);
			if(temp.right) stack.push(temp.right);
			if(temp.left) stack.push(temp.left);
			if(callback) callback(temp);
		}
		if(!callback) return ans;
	}
	const postorder = (callback,node=root,ans=[]) => {
		if(node == null) return ans;
		postorder(callback,node.left,ans);
		postorder(callback,node.right,ans);
		callback ? callback(node) : ans.push(node.data);
		if(ans.length) return ans;
	}
	const itPostorder = (callback) => {
		let ans = [];
		let stack = [];
		stack.push(root);
		while (stack.length) {
			let temp = stack.pop();
			ans.push(temp.data);
			if(temp.left) stack.push(temp.left);
			if(temp.right) stack.push(temp.right);
			if(callback) callback(temp);
		}
		if(!callback) return ans.reverse();

	}
	const inorder = (callback,node = root,ans=[]) => {
		if(node == null) return ans;
		inorder(callback,node.left,ans);
		callback ? callback(node) : ans.push(node.data);
		inorder(callback,node.right,ans);
		if(ans.length) return ans;
	}
	const itInorder = (callback) => {
		let ans = [];
		let stack = [];
		stack.push(root);
		let cur = stack.shift();
		while (cur || stack.length) {

			while(cur){
				stack.push(cur);
				cur = cur.left;
			}
			cur = stack.pop();
			ans.push(cur.data);
			if(callback) callback(cur);
			cur = cur.right;
		}
		if(!callback) return ans;
	}
	const height = (node = root) => {
		if(node == null) return 0;

		let lHeight = height(node.left);
		let rHeight = height(node.right);

		return 1+Math.max(lHeight,rHeight);
	}
	const depth = (node,temp = root,depth=0) => {
		if(node == null || root == null) return;

		if(node === root) return `Depth: ${depth}`;
		if(node.data < root.data){
			return depth(node,root.left,depth += 1);
		} else{
			return depth(node,root.right, depth += 1);
		}
	}
	const isBalanced = (node = root) => {
		if(node == null){
			return "Tree is empty";
			
		}
		let lHeight = height(node.left);
		let rHeight = height(node.right);
		let diff = Math.abs(lHeight - rHeight);

		return diff < 2;
	}
	const rebalance = (node = root) => {
		let arr = inorder();
		return root = buildTree(arr);
	}
    return {
        prettyPrint,
		insert,
		del,
		find,
		levleOrder,
		preorder,
		itPreorder,
		postorder,
		itPostorder,
		inorder,
		itInorder,
		height,
		depth,
		isBalanced,
		rebalance
    }
}


// let root = Tree([1,1,1,1,2,2,2,2,3,3,3,3,9,20,4,6,8,7,21,19]);
// root.prettyPrint();
// root.insert(8);
// root.insert(7);
// root.insert(21);
// root.insert(19);
// root.prettyPrint();
// console.log(root.find(9));
// root.del(9);
// console.log(root.find(9));
// root.prettyPrint();
// console.log("LevelOrder:- " + root.levleOrder());
// console.log("PreOrder:-   " + root.preorder());
// console.log("InOrder:-    " + root.itInorder());
// console.log("PostOrder:-  " + root.postorder());
// console.log("PreOrder:- " + root.itPreorder());
// console.log("PostOrder:- " + root.postorder());
// console.log("PostOrder:- " + root.itPostorder());
// console.log(root.itPostorder());

module.exports = Tree;
