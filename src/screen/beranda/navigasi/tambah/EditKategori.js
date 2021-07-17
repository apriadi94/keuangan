import React, { useState, useContext } from 'react'
import { Modal, ModalContent, SlideAnimation, ModalTitle, ModalFooter, ModalButton } from 'react-native-modals';
import { View, Text, TextInput } from 'react-native'
import { AddFinanceContext } from '../../../../provider/AddFinanceProvider'
import { updateKategori } from '../../../../database/kategori/kategoriService'
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const EditKategori = ({ getData, modalEditKategori, toggleModal, dataForm }) => {

    const { active, setActive } = useContext(AddFinanceContext)
    const [formKategori, setFormKategori] = useState({
        id: dataForm.id,
        kategoriName: dataForm.kategoriName,
        kategoriJenis: active
    })
    const [loadingTambah, setLoadingTambah] = useState(false)

    const data = [
        {
            label: 'Pengeluaran',
            name: 'pengeluaran'
        },
        {
          label: 'Pemasukan',
          name: 'pemasukan'
         }
    ];

    const simpanKategori = async () => {
        setLoadingTambah(true)
        await updateKategori(formKategori).then(() => {
            getData()
            setFormKategori({...formKategori, kategoriName: ''})
            toggleModal()
        }).catch(e => {
            console.log(e)
        })
        setLoadingTambah(false)
    }

    return(
        <Modal
            modalTitle={<ModalTitle title="Edit Kategori" />}
            visible={modalEditKategori}
            onTouchOutside={toggleModal}
            onHardwareBackPress={toggleModal }
            modalAnimation={new SlideAnimation({
                slideFrom: 'bottom',
            })}
            footer={
                <ModalFooter>
                  <ModalButton
                    text="CANCEL"
                    onPress={toggleModal}
                  />
                  <ModalButton
                    text={loadingTambah ? 'Loading...' : 'Ubah'}
                    disabled={loadingTambah}
                    onPress={simpanKategori}
                  />
                </ModalFooter>
              }
        >
            <ModalContent>
                <View style={{ width: 300, marginTop : 20}}>
                    <Text>Nama Kategori</Text>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: active === 'pengeluaran' ? '#ff4000' : '#0099ff' }}>
                        <TextInput value={formKategori.kategoriName} onChangeText={(text) => setFormKategori({...formKategori, kategoriName: text})}/>
                    </View>
                    <Text style={{ marginTop: 20 }}>
                        Jenis Kategori
                    </Text>
                    <RadioButtonRN
                        data={data}
                        selectedBtn={(e) => {
                            setFormKategori({...formKategori, kategoriJenis: e.name})
                            setActive(e.name)
                        }}
                        initial={active === 'pengeluaran' ? 1 : 2}
                        activeColor={active === 'pengeluaran' ? '#ff4000' : '#0099ff'}
                        icon={
                            <Icon
                            name="check-circle"
                            size={25}
                            color={active === 'pengeluaran' ? '#ff4000' : '#0099ff'}
                            />
                        }
                        />
                </View>
            </ModalContent>
        </Modal>
    )
}

export default EditKategori