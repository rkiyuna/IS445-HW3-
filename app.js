const numObj = {
  start: null,
  incrementer: null,
  end: null
};

numObj.start = Number(window.prompt("Enter the start:"));
numObj.end = Number(window.prompt("Enter the end:"));
numObj.incrementer = Number(window.prompt("Enter the incrementer:"));

let output = document.getElementById("output");
if (
  isFinite(numObj.start) &&
  isFinite(numObj.incrementer) &&
  isFinite(numObj.end)
) {
  var arr = getArray(numObj);
  output.innerText = "The generated array is " + arr.join(", ");

  var sum = getSum(arr);
  output.innerText += "\n The sum is " + sum;

  var binary = getBinary(arr);
  output.innerText +=
    "\n The binary of absolute element values are: " + binary.join(", ");
} else {
  output.innerText = "invalid integer input. please reload and try again";
}

function getArray(numObj) {
  var start = numObj.start;
  var incrementer = numObj.incrementer;
  var end = numObj.end;

  var arr = [];

  for (let i = start; i <= end; i += incrementer) {
    arr.push(i);
  }
  return arr;
}

function getSum(arr) {
  var sum = null;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function getBinary(arr) {
  var binary = [];
  for (let i = 0; i < arr.length; i++) {
    binary.push(arr[i].toString(2));
  }
  return binary;
}
