// Code your solution here

function findMatching(drivers, name){
let idontknow = drivers.filter((findMatching) => findMatching.toUpperCase() === name.toUpperCase())
    return idontknow
}

function fuzzyMatch(array, letters) {
let newDrivers = array.filter(array => array.startsWith(letters))
    return newDrivers


}

function matchName(array, string){
   return array.filter(o => Object.keys(o).some(k => String(o[k]).toLowerCase().includes(string.toLowerCase())))
}