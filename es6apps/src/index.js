
let printEmployee = (employee) => {
    console.log(`id : ${employee.id}`)
    console.log(`name : ${employee.name}`)
    console.log(`salary : ${employee.salary}`)
}

printEmployee({ id: 1, name: 'subramanian', salary: 1000 })

printEmployee = (employee) => {
    //destructure
    const { id, name, salary, address: { city } } = employee
    console.log(`id : ${id}`)
    console.log(`name : ${name}`)
    console.log(`salary : ${salary}`)
    console.log(`city : ${city}`)

}
printEmployee({
    id: 1, name: 'subramanian', salary: 1000, address: {
        city: 'Coimbatore'
    }
})

printEmployee = ({ id, name, salary, address: { city } }) => {
    console.log(`id : ${id}`)
    console.log(`name : ${name}`)
    console.log(`salary : ${salary}`)
    console.log(`city : ${city}`)

}
printEmployee({
    id: 1, name: 'subramanian', salary: 1000, address: {
        city: 'Coimbatore'
    }
})
//////////////////////////////////////////////////////////////////////////////////////

let configure = (name, version, location) => {
    return {
        name: name,
        version: version,
        location: location
    }
}
console.log(configure('Inventory Service', '1.0', 'http://192.3.500'))

//with destructuring
configure = (name, version, location) => ({
    name,
    version,
    location
})

console.log(configure('Inventory Service', '1.0', 'http://192.3.500'))
