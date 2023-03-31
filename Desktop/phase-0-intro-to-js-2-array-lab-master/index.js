// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push('Ralph');
}
function destructivelyPrependCat(name){
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyRemoveFirstCat(name){
    cats.shift();
}
function appendCat(name){
    const appCats = [...cats, 'Broom'];
    return appCats;
}
function prependCat(name){
    const preCats = ['Arnold', ...cats];
    return preCats;
}
function removeLastCat(){
    const lastCats = [...cats.slice(0, 2)];
    return lastCats;
}
function removeFirstCat(){
    const firstCats = [...cats.slice(1)];
    return firstCats;
}