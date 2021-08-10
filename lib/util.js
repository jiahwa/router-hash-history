class Util {
    constructor(){}
    /**
     * 
     * @param {Array} arr 
     * @param {String} key 
     * @param {String} value 
     * @returns {Object} previousVal
     */
    listToMap(arr,key,value){ // {1}
        return arr.reduce((previousVal,currentVal,currentIndex,array)=>{
            previousVal[currentVal[key]] = currentVal[value];
            return previousVal
        },{})
    }
}
export default new Util