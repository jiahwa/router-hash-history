const Util = {
    listToMap(arr,key,value){ // {1}
        return arr.reduce((previousVal,currentVal,currentIndex,array)=>{
            previousVal[currentVal[key]] = currentVal[value];
            return previousVal
        },{})
    }
}
export default Util