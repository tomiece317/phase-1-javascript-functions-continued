// code your solution here
const superbowlWin = function(array){
    const win = array.find(obj => obj.result === "W");
    return win ? win.year : undefined;
}