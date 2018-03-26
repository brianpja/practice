var Node = function(data) {
  this.data = data;
  this.next = null;
}

function print(head) {
    if (head) {
        console.log(head.data);
        if (head.next) {
            print(head.next);
        }
    }
}


function insertAtTail(head, data) {
    const newNode = new Node(data);
    if (!head) {
        return newNode;
    }

    let tail = head;
    while (tail.next) {
        tail = tail.next;
    }

    tail.next = newNode;
    return head;
}

function insertAtHead(head, data) {
    const newNode = new Node(data);

    if (head) {
        newNode.next = head;
    }

    return newNode;
}


function insert(head, data, position) {
    const newNode = new Node(data);
    if (!head) {
        return newNode;
    }

    if (position === 0) {
        newNode.next = head;
        return newNode;
    }

    let target = head;

    for (let i = 1; i < position; i++) {
        target = target.next;
    }

    newNode.next = target.next;
    target.next = newNode;
    return head;
}


function deleteNode(head, position) {
    if (!head) return null;
    if (position === 0) return head.next;

    let target = head;

    for (let i = 1; i < position; i++) {
        target = target.next;
    }

    target.next = target.next.next;

    return head;
}

//recursively
function reversePrint(head) {
    if (!head) return;
    if (head.next) {
        reversePrint(head.next)
    }
    console.log(head.data)
}


function reversePrintInArray(head) {
  if (!head) return;
  const arr = [];

  while (head) {
    arr.push(head.data);
    head = head.next
  }

  for (let i = arr.length - 1; i >= 0 ; i--) {
    console.log(arr[i]);
  }
}


function reverseLinkedList(head) {
    if (!head) return null;

    let previous = null;
    let current = head;
    let next = null;

    while (current) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }

    return previous;
}

//compare function returns 1 if lists are exactly the same, returns 0 otherwise
function compareLinkedLists( headA, headB) {
    if (!headA || !headB) return 0;

    while ( headA && headB ) {
        if (headA.data !== headB.data) return 0;
        headA = headA.next;
        headB = headB.next;
    }

    if (headA || headB) return 0;

    return 1;
}


function mergeLinkedLists( headA, headB) {
    if (!headA) return headB;
    if (!headB) return headA;

    let retNode;

    if (headA.data < headB.data) {
        retNode = headA;
    }
    else {
        retNode = headB;
    }

    let aNode = headA;
    let bNode = headB;
    let cNode = null;

    while (aNode && bNode) {
        if (aNode.data < bNode.data) {
            if (cNode) cNode.next = aNode;
            cNode = aNode;
            aNode = aNode.next;
        }
        else {
            if (cNode) cNode.next = bNode;
            cNode = bNode;
            bNode = bNode.next;
        }
    }

    if (!aNode) cNode.next = bNode;
    if (!bNode) cNode.next = aNode;

    return retNode;
}


function getNodeValue( head, positionFromTail) {

    let length = 1;
    let pointer = head;

    while (pointer.next) {
        length++;
        pointer = pointer.next;
    }

    let target = head;
    for (let i = 1; i < length - positionFromTail; i ++) {
        target = target.next;
    }

    return target.data;
}


function removeDuplicates(head) {
    let current = head;
    let next = current.next;

    while (current.next) {
        if (current.data === next.data) {
            current.next = next.next;
            next = next.next;
        }
        else {
            current = current.next;
            next = current.next;
        }
    }
    return head;
}

//list is guaranteed to have max length of 100
function hasCycle(head) {
    let current = head;
    let length = 0;

    while (current && length < 101) {
        length ++;
        current = current.next;
    }

    if (length <= 100) {
        return false;
    }
    else {
        return true;
    }
}


function findMergeNode(headA, headB) {
    const hash = {};

    let aPointer = headA;
    while (aPointer) {
        hash[aPointer.data] = 1;
        aPointer = aPointer.next;
    }

    let bPointer = headB;

    while (bPointer) {
        if (hash[bPointer.data]) return bPointer.data;
        bPointer = bPointer.next;
    }
}
