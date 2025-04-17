/*In JavaScript, si definisca una classe Employee per rappresentare gli impiegati di una ditta,
 in termini dei loro name e surname. 

La classe Employee deve inoltre fornire un getter id che restituisca l'identificatore di ciascun impiegato,
 calcolato concatenando cognome e nome dell'impiegato stesso.

Si definisca poi una classe Schedule per la gestione dei task assegnati agli impiegati di una ditta.
L'insieme di tutti i task deve essere privato alla classe. La classe deve inoltre fornire i seguenti metodi:

add(task,employee) per l’assegnamento del task (stringa) all’employee passato in input.

getTasks(employee), che restituisce un array contenente i task assegnati a employee,
 ordinati lessicograficamente in ordine crescente.
Se l'employee non è presente, restituisce la lista vuota.

free(employee) per liberare employee, eliminando tutti i suoi task
(lanciando l’eccezione MissingEmployeeError quando employee non esiste).


NB: Saranno preferite le soluzioni che sfruttino strutture dati efficienti per associare gli employee ai loro task.
*/
class MissingEmployeeError extends Error{}
class Employee {
    #name
    #surname
    constructor(name,surname){
        this.#name=name
        this.#surname=surname
    }
    
    get name(){
        return this.#name
    }

    get surname(){
        return this.#surname
    }

    get id(){
        return this.#surname + this.#name
    }
}

class Schedule{
    #task
    constructor(){
        this.#task=new Map()
    }

    add(task,employee){
        if(!this.#task.has(employee)){
            this.#task.set(employee,[])
            this.#task.get(employee).push(task)
        }
        else if(this.#task.get(employee).find((mansione)=>mansione==task)==undefined){
            this.#task.get(employee).push(task)}
    }

    getTasks(employee){
        if(this.#task.has(employee)){
            this.#task.get(employee).sort()
            return this.#task.get(employee)
        }
        else return []
    }

    free(employee){
        if(this.#task.has(employee))
            this.#task.delete(employee)
        else throw new MissingEmployeeError
    }
}

let js = new Employee("Gho","Hjo")
let ks = new Employee("Gigio","Jko")
let w = new Schedule()
w.add("Pulire",js)
w.add("Pulire",js)
console.log(w.getTasks(js))
