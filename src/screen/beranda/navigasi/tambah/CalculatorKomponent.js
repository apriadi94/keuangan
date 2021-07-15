import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Modal, ModalContent, SlideAnimation, ModalTitle, ModalFooter, ModalButton } from 'react-native-modals';
import { Calculator } from 'react-native-calculator'



const CalculatorKomponent = ({ modalCalculator, setModalCalculator, jumlah, setJumlah }) => {
    console.log(modalCalculator)
    const [textCalculator, setTextCalculator] = useState(0)
    return(
        <Modal
            modalTitle={<ModalTitle title="Simulasi Kalkulator" />}
            visible={modalCalculator}
            onTouchOutside={() => {
                setModalCalculator(false);
            }}
            onHardwareBackPress={() => {
                setModalCalculator(false);
            }}
            modalAnimation={new SlideAnimation({
                slideFrom: 'bottom',
            })}
        >
            <ModalContent>
                <View>
                    <View style={{ width: 300, height: 50, borderWidth: 1, justifyContent: 'center', alignItems: 'flex-end', borderBottomWidth: 0 }}>
                        <Text style={{ marginRight: 10, fontSize: 25 }}>{textCalculator}</Text>
                    </View>
                    <Calculator
                        value={jumlah}
                        width={300} 
                        height={400}
                        thousandSeparator={'.'}
                        decimalSeparator={','}
                        hideDisplay={true}
                        onTextChange={(text) => {
                            setTextCalculator(text)
                        }}
                        onCalc={(number) => {
                            setJumlah(number)
                            setModalCalculator(false)

                        }}
                     />
                </View>
            </ModalContent>
        </Modal>
    )
}

export default CalculatorKomponent