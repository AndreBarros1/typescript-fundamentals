let filmArray: (number | string | boolean)[] = [1, 'Guerra Civil', true]
let filmTuple: [number, string, boolean] = [2, 'Duna', false]
let filmTupleOpcionalPosition: [number, string, boolean?, string?] = [3, 'Um lugar silencioso', false]


const [idArr, titleArr, availableArr] = filmArray
const [idTuple, titleTuple, availableTuple] = filmTuple

console.log(idTuple)