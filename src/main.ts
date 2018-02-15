import * as Immutable from 'immutable'
import * as moment from 'moment'
import { isUndefined } from 'util'

type Evening = { name: string, date: Date, people: Immutable.List<string> }

const names : Immutable.List<string> = Immutable.List<string>()
    .push('Bastiaan')
    .push('Fieke')
    .push('Herwald')
    .push('Machteld')
    .push('Paul')
    .push('Sanne')

const evenings : Immutable.List<Evening> = Immutable.List<Evening>()
    .push({ name: 'ESK 7', date: new Date(2018, 2, 13), people: Immutable.List<string>() })
    .push({ name: 'ESK 8', date: new Date(2018, 3, 4), people: Immutable.List<string>() })
    .push({ name: 'ESK 9', date: new Date(2018, 4, 9), people: Immutable.List<string>() })

const assignEvenings : (evenings: Immutable.List<Evening>, names: Immutable.List<string>, assignedEvenings?: Immutable.List<Evening>)
    => Immutable.List<Evening> = (evenings, names, assignedEvenings) => {
        if (isUndefined(assignedEvenings)) return assignEvenings(evenings, names, Immutable.List<Evening>())

        if (names.count() === 0) return assignedEvenings

        const evening = evenings.first()
        evening.people = getUniqueRandomItems<string>(names, 2)

        return assignEvenings(evenings.shift(), names.filter(name => !evening.people.contains(name)).toList(), assignedEvenings.push(evening))
}

const getUniqueRandomItems : <T>(items: Immutable.List<T>, amount?: number, chosenItems?: Immutable.List<T>) => Immutable.List<T> = <T>(items: Immutable.List<T>, amount?: number, chosenItems?: Immutable.List<T>) => {
    if (isUndefined(amount)) return getUniqueRandomItems(items, 1)
    if (isUndefined(chosenItems)) return getUniqueRandomItems(items, amount, Immutable.List<T>())

    if (amount === 0) return chosenItems

    const randomIndex = randomNumber(items.count() - 1)
    const item = items.get(randomIndex)
    return getUniqueRandomItems(items.remove(randomIndex), --amount, chosenItems.push(item))
}

const randomNumber : (max: number, min?: number) => number = (max: number, min?: number) => {
    const minimum = min || 0

    return Math.round( (Math.random() * max) + minimum )
}

assignEvenings(evenings, names).map(e => console.log(`${e.name} (${moment(e.date).locale('nl').format('dddd D MMMM')}) bereiden ${e.people.join(' & ')} voor.`))
console.log(`ESK 10 (${moment(new Date(2018, 5, 6)).locale('nl').format('dddd D MMMM')}) bereiden Arjo & Anke, ter afsluiting, voor.`)