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
import { TextInputBox } from '../components/CommomComponents';



function AddNewAddress(props) {

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

    console.log(mockdata, "MOCK")

    return (

        <View style={styles.container}>

            {_header()}

            <View style={styles.container}>
                <View style={styles.addaddressmainview}>

                    <TextInputBox title="Name" />

                    <TextInputBox title="Mobile No." />

                    <TextInputBox title="Address" noli={4} />

                    <View style={[styles.name, { flexDirection: 'row', marginTop: 0, borderWidth: 0, justifyContent: 'space-between' }]}>
                        <View style={{ width: '49%' }}>
                            <TextInputBox title="City" />
                        </View>
                        <View style={{ width: '49%' }}>
                            <TextInputBox title="Pin Code" />
                        </View>
                    </View>

                    <TextInputBox title="State" />

                    <TextInputBox title="Country" />
                </View>
            </View>

            <TouchableOpacity onPress={() => { Navigation.navigate('SelectAddress') }}
                style={styles.activenextbutton}>
                <Text style={styles.headertitle}>Add</Text>
            </TouchableOpacity>


        </View>
    )


}

export default AddNewAddress;