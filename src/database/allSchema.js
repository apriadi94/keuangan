import { KategoriSchema } from './kategori/kategoriSchema'

export const databaseOptions = {
    path: 'financeApp.realm',
    schema: [KategoriSchema]
}