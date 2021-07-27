import { KategoriSchema } from './kategori/kategoriSchema'
import { FinanceSchema } from './finance/financeSchema'

export const databaseOptions = {
    path: 'financeApp.realm',
    schema: [FinanceSchema, KategoriSchema]
}