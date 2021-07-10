import React from 'react'
import { Modal, ModalContent } from 'react-native-modals';
import { View, Text } from 'react-native'

const TambahKategori = ({ modalTambahKategori, setModalTambahKategori }) => {
    return(
        <Modal
            visible={modalTambahKategori}
            onTouchOutside={() => {
                setModalTambahKategori(false);
            }}
            onHardwareBackPress={() => {
                setModalTambahKategori(false);
            }}
        >
            <ModalContent>
                <View>
                    <Text>
                        Modal
                    </Text>
                </View>
            </ModalContent>
        </Modal>
    )
}

export default TambahKategori