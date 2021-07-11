import Realm from "realm";

export const KATEGORI_SCHEMA = 'Kategori'

export const KategoriSchema = {
    name: KATEGORI_SCHEMA,
    primaryKey: "id",
    properties: {
        id: 'int',
        kategoriName: "string",
        status: "string?",
    }
};

const databaseOptions = {
    path: 'financeApp.realm',
    schema: [KategoriSchema]
}

export const addKategori = newKategori => {
    return new Promise((resolve, reject) => {
        Realm.open(databaseOptions).then(realm =>{
            realm.write(() => {
                realm.create(KATEGORI_SCHEMA, newKategori)
                resolve(newKategori)
            })
        }).catch(err => {
            reject(err)
        })
    })
}