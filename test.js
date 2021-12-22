let test = {
    key:123,
    name: 'joohwan'
}

let stringify = JSON.stringify(test)
let parse = JSON.parse(stringify)
console.log(stringify);
console.log(parse);