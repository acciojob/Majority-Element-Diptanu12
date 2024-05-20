//your code here
function findMajorityElement(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }


    return candidate;
}

function findAndDisplayMajorityElement() {
    const input = document.getElementById('arrayInput').value;
    const nums = input.split(',').map(Number);
    
    if (nums.length === 0) {
        document.getElementById('result').innerText = 'Please enter a valid array.';
        return;
    }
    
    const majorityElement = findMajorityElement(nums);
    document.getElementById('result').innerText = `The majority element is: ${majorityElement}`;
}
