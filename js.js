

const map = new Map()

setValue([0,4,6,7],"sun")

function setValue(keys,value){
    keys.forEach(key => {
            map.set(key,value)
    });
}

console.log(map)