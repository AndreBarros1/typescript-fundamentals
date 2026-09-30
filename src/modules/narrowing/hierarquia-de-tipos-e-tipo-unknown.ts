export const bootstrap = ():void => {
    let valueUnknown: unknown // tipo é desconhecido
    valueUnknown = [1,2,3]
    //let valueAny: any // pode assumir qualquer tipo

    function processDataWithUnknown(value: unknown) {
        if(Array.isArray(value)) {
            value.map((item) => console.log(item))
        }
    }

    processDataWithUnknown(valueUnknown)
}