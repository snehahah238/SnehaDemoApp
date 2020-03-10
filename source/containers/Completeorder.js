import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from 'react-native';
import styles from '../styles/styles';
import Navigation from '../navigators/Navigation';
import Listview from '../components/ListComponent';
import images from '../Theme/Images';
import { dh, dw } from '../styles/dhdw';
import StepIndicator from 'react-native-step-indicator';


function Complteorder(props) {

    const [bankstatus, setBankstatus] = useState(false);
    const [step, setStep] = useState(1);

    const _header = () => {
        return (
            <View style={styles.headerview}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={styles.headerleft}>
                    <Image source={images.back} style={styles.backicon} />
                </TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.headertitle}>Complete order</Text>
                </View>
                <View style={styles.headerleft} />
            </View>
        )
    }

    const labels = ["Order booked", "Upload bank slip in 59:00"];

    const customStyles = {
        stepIndicatorSize: 20,
        currentStepIndicatorSize: 25,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#414141',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#414141',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#414141',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#414141',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#414141',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#414141'
    }

    return (

        <View style={styles.container}>

            {_header()}

            <View style={styles.container}>

                <Text style={[styles.darktitle, { textAlign: 'left', marginHorizontal: dw(8), marginVertical: dh(3) }]}>Item</Text>

                <View style={styles.cardviewitem} >
                    <View style={styles.cartlistimageview}>
                        <Image source={images.nike1} style={styles.cartlistimage} />
                    </View>
                    <View style={styles.cartlistdescription}>
                        <Text style={[styles.darktitle, { color: '#6a0dad' }]}>Nike shoes</Text>
                        <Text style={styles.smalltext}>Order Id:{' #85968758'}</Text>
                    </View>
                </View>

                <View style={styles.stepprogress}>
                    <StepIndicator
                        direction={"vertical"}
                        stepCount={2}
                        customStyles={customStyles}
                        currentPosition={step}
                        labels={labels}
                    />
                </View>

                <View style={styles.addbankslipview}>
                    <TouchableOpacity onPress={() => { setBankstatus(true); setStep(2); }} style={styles.addbankslip}>
                        {bankstatus === false
                            ? <Image source={images.plus} style={styles.plusicon} />
                            : <Image source={images.bankslip} style={styles.bankslipimage} />
                        }
                    </TouchableOpacity>
                </View>

            </View>

            <TouchableOpacity onPress={() => {Navigation.navigate('SelectAddress')}}
                disabled={bankstatus === true ? false : true}
                style={bankstatus === true ? styles.activenextbutton : styles.nextbutton}>
                <Text style={styles.headertitle}>Next</Text>
            </TouchableOpacity>

        </View>
    )


}

export default Complteorder;