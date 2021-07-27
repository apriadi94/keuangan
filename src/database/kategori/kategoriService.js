import Realm from 'realm'
import { databaseOptions } from '../allSchema'
import { KATEGORI_SCHEMA, KategoriSchema } from './kategoriSchema'
import { kategoriJson } from './firstValue'

export const getKategori = (kategoriJenis) => {
    return new Promise((resolve, reject) => {
        Realm.open(databaseOptions).then(realm =>{
            const data = realm.objects(KATEGORI_SCHEMA)
            const filterData = data.filtered(`kategoriJenis == "${kategoriJenis}"`)
            resolve(filterData)
        }).catch(err => {
            reject(err)
        })
    })
}

export const defaultKategori = () => {
    return new Promise((resolve, reject) => {
        Realm.open(databaseOptions).then(realm =>{
            realm.write(async() => {
                const lastKategori = realm.objects(KATEGORI_SCHEMA).sorted('id', true)[0];
                if(!lastKategori){
                    kategoriJson.forEach(value => {
                        realm.create(KATEGORI_SCHEMA, value)
                    })
                    resolve('sukses')
                }
            })
        }).catch(err => {
            reject(err)
        })
    })
}

export const addKategori = newKategori => {
    return new Promise((resolve, reject) => {
        Realm.open(databaseOptions).then(realm =>{
            realm.write(async() => {
                const lastKategori = realm.objects(KATEGORI_SCHEMA).sorted('id', true)[0];
                const highestId = lastKategori == null ? 0 : lastKategori.id;
                newKategori.id = highestId == null ? 1 : highestId + 1;

                realm.create(KATEGORI_SCHEMA, newKategori)
                resolve(newKategori)
            })
        }).catch(err => {
            reject(err)
        })
    })
}

export const updateKategori = (form) => {
    return new Promise((resolve, reject) => {
        Realm.open(databaseOptions).then(realm =>{
            realm.write(async() => {
                let kategori = realm.objectForPrimaryKey(KATEGORI_SCHEMA, form.id)
                kategori.kategoriName = form.kategoriName
                resolve('')
            })
        }).catch(err => {
            reject(err)
        })
    })
}

export { KATEGORI_SCHEMA, KategoriSchema }