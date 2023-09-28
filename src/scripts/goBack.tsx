const pastIndexList: Array<number> = [];
let pastIndexCounter = 0;
let pastIndex: number;

export function pushIndex(i: number) {
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