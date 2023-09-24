function bubbleSort(inputArray){
    const sortedArray = inputArray.slice();
    for(let i=0; i<sortedArray.length - 1; i++){
    for(let j=0; j<sortedArray.length -1 -i; j++){
        if (sortedArray[j] > sortedArray[j+1]){
            [sortedArray[j], sortedArray[j+1]] = [sortedArray[j+1], sortedArray[j]];
  
        }
    }
    }
    return sortedArray;
}