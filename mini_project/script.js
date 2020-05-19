function flattenArray(array) {
  let arr = []

  if (array.length === 1) {
    if (Array.isArray(array[0])) {
      arr = arr.concat(flattenArray(array[0]));
    } else {
      arr = arr.concat(array[0]);
    }
  } else {
    if (Array.isArray(array[0])) {
      arr = arr.concat(flattenArray(array[0]));
      array.shift();
      arr = arr.concat(flattenArray(array))
    } else {
      arr = arr.concat(array[0]);
      array.shift();
      arr = arr.concat(flattenArray(array))
    }
  }

  return arr
}

function myFunction() {
  let answer = document.getElementById('answer')
  const arr = document.getElementById('array');
  
  try {
    const array = JSON.parse(arr.value);
    const result = flattenArray(array);
    answer.className = '';
    answer.innerText = 'Answer: [' + result + ']';
  } catch(e) {
    answer.className = 'answer-error';
    answer.innerText = 'Invalid data! ex: [1, 2, 3, [4, 5], [6, 7, 8], 9]';
  }
  
}