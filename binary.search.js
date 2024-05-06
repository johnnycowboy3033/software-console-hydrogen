// Program to implement iterative Binary Search
 
// A iterative binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1

let logging;
let counter;

let all = "steps-algorithm-1";

function binarySearch(arr, x)
{  

    logging.push({Action:"ENTER_POINT", Groups:[all], Counter:counter++, FunctionName:"binarySearh" });

    let h = 0;
    let t = arr.length - 1;
    let mid;

    while (t >= h) {
        logging.push({  Action:"DIVIDER" , Groups:[all]});

         mid = h + Math.floor((t - h) / 2);

         logging.push({ Action:"VARIABLES", Counter:counter, Groups:[all], header:h, midpoint:mid, tail:t });

         logging.push({Action:"ARRAY", Groups:[all],presentArray:arr.slice(),indexes: [h,mid,t]});

    
        if (arr[mid] == x){
            logging.push({Action:"MESSAGE", Counter:counter++, Groups:[all],  message:`If the element is present at the middle itself`});
            logging.push({Action:"RESULTS", Counter:counter++, Groups:[all], message:`The index is ${mid} for target ${x}`});
            return mid;
        }
        
        
        if (arr[mid] > x){
            logging.push({Action:"MESSAGE", Counter:counter++, Groups:[all], message:`If element is smaller than mid, then it can only be present in left subarray`});
            t = mid - 1;
        }else{
            logging.push({Action:"MESSAGE", Counter:counter++, Groups:[all], message:`Else the element can only be present in right subarray`});
            h = mid + 1;
        }

        
            
    }
  
    logging.push({Action:"MESSAGE", Counter:counter++, Groups:[all], message:`We reach here when element is not present in array`});
    return -1;
}