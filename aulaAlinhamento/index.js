const person = {
    id : 1,
    nome: "js",
    idade: 17
}

// function printAge(obj){
//     console.log(obj.idade)
// }

// printAge(person)



// const printIdade = (objPerson) => {
//     const { idade, nome } = objPerson
//     console.log(idade, nome)
// } 



// const printIdade = ({idade, nome}) => {
//     if (true)
//         console.log("true")
//     else{
//         console.log("false")
//     }
//     console.log(idade, nome)
// } 

// const printIdade = ({idade, nome}) => console.log("TESTE")

// printIdade(person)



const people = [
    {
        id: 1,
        nome: "JoaoScrito",
        idade: 20,
        salario: 1200
    },
    {
        id: 5,
        nome: "jawa",
        idade: 200,
        salario: 20000
    },
    {
        id: 7,
        nome: "grea",
        idade: 12,
        salario: 0
    }
]

// console.log(people)

// const getById = (people, id) => people.find((p) => p.id == id)
// const objPerson = getById(people, 5)

// console.log(`Objeto retornado: ${JSON.stringify(objPerson)}`)



// const getById = (people=[], id=0) => people.filter((p) => p.id == id)
// const foundPeople = getById(people, 5)

// console.log(`Objeto retornado: ${JSON.stringify(foundPeople)}`)



// const getById = (people = []) => people.filter((i) => i.idade > 100)
// const objPerson = getById(people)

// console.log(`Objeto retornado: ${JSON.stringify(objPerson)}`)



// const reajust = (people = []) => people.map((s) => ({
//     id: s.id,
//     nome: s.nome,
//     idade: s.idade,
//     salario: s.salario * 1.05}))
// const reajustado = reajust(people)

// console.log(`Objeto retornado: ${JSON.stringify(reajustado)}`)



// const reajust = (people = []) => people.map((person) => ({
//     ...person,
//     salario: person.salario * 1.05}))
// const reajustado = reajust(people)

// console.log(`Objeto retornado: ${JSON.stringify(reajustado)}`)
