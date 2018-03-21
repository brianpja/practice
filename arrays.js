function reversePrint(arr) {
    const rev = arr.reverse();
    const str = rev.join(' ');
    console.log(str)
}

function preOrderPrint(root) {
    console.log(root.data)
    if (root.left) preOrderPrint(root.left)
    if (root.right) preOrderPrint(root.right);
}
