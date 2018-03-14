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
