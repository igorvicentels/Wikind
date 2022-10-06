let l = JSON.parse(process.argv[2])
let str = ""

for (let i = 0; i < l.length; i++) {
    str += `(List.cons Nat (U60.to_nat  ${l[i]}) `
}

str += "(List.nil Nat)" + ")".repeat(l.length)
console.log(str)
