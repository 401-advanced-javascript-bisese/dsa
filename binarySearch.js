

// let binarySearch = function (arr, x) { 
   
//     let start=0, end=arr.length-1; 
          
//     // Iterate while start not meets end 
//     while (start<=end){ 
  
//         // Find the mid index 
//         let mid=Math.floor((start + end)/2); 
   
//         // If element is present at mid, return True 
//         if (arr[mid]===x) return true; 
  
//         // Else look in left or right half accordingly 
//         else if (arr[mid] < x)  
//              start = mid + 1; 
//         else
//              end = mid - 1; 
//     } 
   
//     return false; 
// } 

const binarySearch = (array,key) => {

    let startPoint = 0, endPoint = array.length -1;
    
    while (startPoint <= endPoint){
        let midPoint = Math.floor((startPoint + endPoint)/2);
            if (array[midPoint] === key) return midPoint;
            else if (array[midPoint] < key)
                startPoint = midPoint + 1;
            else 
                endPoint = midPoint - 1;
    }
    return -1;
}

module.exports = exports = binarySearch;

