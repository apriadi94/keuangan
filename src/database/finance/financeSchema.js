export const FINANCE_SCHEMA = 'Finance'

export const FinanceSchema = {
    name: FINANCE_SCHEMA,
    primaryKey: "id",
    properties: {
        id: 'int',
        tanggal: "date",
        kategoriName: "string",
        kategoriId: "int",
        jumlah: "double",
        jenis: 'string',
        keterangan: 'string'
    }
};