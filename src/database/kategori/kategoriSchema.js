export const KATEGORI_SCHEMA = 'Kategori'

export const KategoriSchema = {
    name: KATEGORI_SCHEMA,
    primaryKey: "id",
    properties: {
        id: 'int',
        kategoriName: "string",
        kategoriJenis: "string?",
    }
};