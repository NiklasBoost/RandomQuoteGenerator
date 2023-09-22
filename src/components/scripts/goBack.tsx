const pastIndexList: Array<Number> = [];
let pastIndexCounter = 0;
let pastIndex: Number;

export function pushIndex(i: Number) {
  pastIndexList.push(i);
  pastIndexCounter = pastIndexList.length
  pastIndex = pastIndexList[pastIndexCounter - 1];

  // console.log('past Index: ' + pastIndex);
  console.log('Past Index Array: ' + pastIndexList);
  // console.log('Counter: ' + pastIndexCounter);
}

export function removeLastIndex() {
  pastIndexList.pop();
  pastIndexCounter = pastIndexList.length
  pastIndex = pastIndexList[pastIndexCounter - 1];
  console.log(pastIndexList)
}

export {pastIndexCounter, pastIndex};