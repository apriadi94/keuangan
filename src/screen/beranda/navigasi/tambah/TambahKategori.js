import React, { useState, useContext } from 'react'
import { Modal, ModalContent, SlideAnimation, ModalTitle, ModalFooter, ModalButton } from 'react-native-modals';
import { View, Text, TextInput } from 'react-native'
import { AddFinanceContext } from '../../../../provider/AddFinanceProvider'
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const TambahKategori = ({ modalTambahKategori, setModalTambahKategori }) => {
    const { active, setActive } = useContext(AddFinanceContext)
    const [formKategori, setFormKategori] = useState({
        kategoriName: '',
        kategoriJenis: active
    })

   

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

    const simpanKategori = () => {
       alert('simpan')
    }

    return(
        <Modal
            modalTitle={<ModalTitle title="Tambah Kategori" />}
            visible={modalTambahKategori}
            onTouchOutside={() => {
                setModalTambahKategori(false);
            }}
            onHardwareBackPress={() => {
                setModalTambahKategori(false);
            }}
            modalAnimation={new SlideAnimation({
                slideFrom: 'bottom',
            })}
            footer={
                <ModalFooter>
                  <ModalButton
                    text="CANCEL"
                    onPress={() => setModalTambahKategori(false)}
                  />
                  <ModalButton
                    text="OK"
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

export default TambahKategori