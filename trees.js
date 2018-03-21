
//not working apparently
function treeHeight(root, height = 0) {
	// if (!root) return;
    if (!root.left || !root.right) return height;

    // console.log('root', root.data);
    // console.log("height", height)

    let left = 0;
    let right = 0;

    if (root.left) {
        left = return treeHeight(root.left, height + 1);
    }
    if (root.right) {
        right = return treeHeight(root.right, height + 1);
    }

    if (left > right) {
        return left;
    }
    else {
        return right;
    }

}
