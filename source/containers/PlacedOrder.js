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
    TextInput,
} from 'react-native';
import styles from '../styles/styles';
import mockdata from '../mock/mocklistdata';
import Navigation from '../navigators/Navigation';
import images from '../Theme/Images';
import AddressView from '../components/Addressview';
import { dw } from '../styles/dhdw';
import Images from '../Theme/Images';
import TextInputBox from '../components/CommomComponents';



function PlacedOrder(props) {

    const _header = () => {
        return (
            <View style={styles.headerview}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={styles.headerleft}>
                    <Image source={images.back} style={styles.backicon} />
                </TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.headertitle}>Add Address</Text>
                </View>
                <View style={styles.headerleft} />
            </View>
        )
    }


    return (

        <View style={styles.container}>

            {/* {_header()} */}

            <View style={[styles.container, styles.placekback]}>
                <Text style={styles.textbig}>Order Placed!</Text>

                <Text style={[styles.textsmall, { textAlign: 'center' }]} >You will be notify via Email when your order will be confirmed</Text>
            </View>

            <TouchableOpacity onPress={() => { Navigation.navigate('MainPage') }}
                style={styles.simplebutton}>
                <Text style={styles.simplebuttontext}>Continue Shopping</Text>
            </TouchableOpacity>


        </View>
    )


}

export default PlacedOrder;