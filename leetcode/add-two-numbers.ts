/**
 *
 * requirements
 * - non empty
 * - represent integers
 * - non negative
 * - digits stored in reverse order
 * - each node (item in array) contians a single digit
 * - add the two numbers from the lists
 * - return sum as a linked list
 * - no leading zeros
 * - nodes are [1,100]
 * - 0 <- node <= 9
 *
 * - deserialise list 1 -> reverse the list, loop through the items
 *   store in a string, convert to an itenger
 * - deserialise list 2 -> as above
 * - sum the result
 * - serialise thee result -> convert to string, split the components
 *   reverse the order, push to an integer array.
 */

export function solution(l1: number[], l2: number[]) {
  const l1reversed = l1.reverse();
  let n1 = "";
  l1reversed.map((i) => {
    n1 += i.toString();
  });

  const l2reversed = l2.reverse();
  let n2 = "";
  l2reversed.map((i) => {
    n2 += i.toString();
  });

  const sum = parseInt(n1) + parseInt(n2);

  const sumArr = sum.toString().split("");

  return sumArr.reverse();
}

function reversedLoopSolution(l1: number[], l2: number[]) {
  const sum = deserializeList(l1) + deserializeList(l2);
  return serialiseNumber(sum);
}

function deserializeList(arr: number[]) {
  let n1 = ``;
  for (let i = 0; i < arr.length; i++) {
    n1 = arr[i] + n1;
  }
  return parseInt(n1);
}

function serialiseNumber(n: number) {
  return n.toString().split("").reverse();
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reversedLoopSolutionNode(l1: ListNode | null, l2: ListNode | null) {
  if (!l1 || !l2) {
    throw new Error(`not possible according to question description`);
  }

  function recursion(l: ListNode): string {
    if (l.next == null) {
      return l.val.toString();
    }

    return recursion(l.next) + l.val.toString();
  }

  const r1 = recursion(l1);

  const r2 = recursion(l2);

  const sum = parseInt(r1) + parseInt(r2);

  const sumArr = sum.toString().split("");

  let root = new ListNode();
  let current = root;
  for (let i = sumArr.length - 1; i >= 0; i--) {
    current.val = parseInt(sumArr[i]);

    if (i !== 0) {
      const next = new ListNode();
      current.next = next;
      current = next;
    }
  }

  return root;
}

function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) {
    return null;
  }

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    const newNode = new ListNode(arr[i]);
    current.next = newNode;
    current = newNode;
  }

  return head;
}
