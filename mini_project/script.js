function flatten(arr, item) {
  if(Array.isArray(item)) {
    return item.reduce(flatten, arr);
  }
  arr.push(item);

  return arr;
}

function flattenArray(array) {
  return array.reduce(flatten, []);
}

function myFunction() {
  let answer = document.getElementById('answer')
  const arr = document.getElementById('array');

  try {
    const array = JSON.parse(arr.value);
    const result = flattenArray(array);
    const res = JSON.stringify(result);
    answer.className = '';
    answer.innerText = 'Answer: ' + res;

  } catch(e) {
    answer.className = 'answer-error';
    answer.innerText = 'Invalid data! ex: [1, 2, 3, [4, 5], [6, [7, 8], 9], 10]';
  }
}