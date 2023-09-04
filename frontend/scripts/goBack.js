const pastIndex = [];
let pastIndexCounter;
let goBack = false;

export function pushIndex(i) {
  pastIndex.push(i);
  pastIndexCounter = pastIndex.length
  console.log(pastIndex);
}

export {pastIndexCounter};