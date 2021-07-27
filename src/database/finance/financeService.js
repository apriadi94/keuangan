import Realm from 'realm'
import { databaseOptions } from '../allSchema'
import { FINANCE_SCHEMA, FinanceSchema } from './financeSchema'

export const getFinance = () => {
    return new Promise((resolve, reject) => {
        Realm.open(databaseOptions).then(realm =>{
            const data = realm.objects(FINANCE_SCHEMA)
            resolve(data)
        }).catch(err => {
            reject(err)
        })
    })
}

export const addTransaction = newTransaction => {
    return new Promise((resolve, reject) => {
        Realm.open(databaseOptions).then(realm =>{
            realm.write(async() => {
                const lastFinance = realm.objects(FINANCE_SCHEMA).sorted('id', true)[0];
                const highestId = lastFinance == null ? 0 : lastFinance.id;
                newTransaction.id = highestId == null ? 1 : highestId + 1;

                realm.create(FINANCE_SCHEMA, newTransaction)
                resolve(newTransaction)
            })
        }).catch(err => {
            reject(err)
        })
    })
}

export const deleteFinance = (id) => {
    return new Promise((resolve, reject) => {
        Realm.open(databaseOptions).then(realm =>{
            realm.write(async() => {
                let finance = realm.objectForPrimaryKey(FINANCE_SCHEMA, id)
                realm.delete(finance)
                resolve('')
            })
        }).catch(err => {
            reject(err)
        })
    })
}




export { FINANCE_SCHEMA, FinanceSchema }