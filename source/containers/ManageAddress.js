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
import mockdata from '../mock/mocklistdata';
import Navigation from '../navigators/Navigation';
import images from '../Theme/Images';
import { AddressViewEdit } from '../components/CommomComponents';
import { dw } from '../styles/dhdw';



function ManageAddress(props) {

    const _header = () => {
        return (
            <View style={styles.headerview}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={styles.headerleft}>
                    <Image source={images.back} style={styles.backicon} />
                </TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.headertitle}>Manage Addresses</Text>
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
                <AddressViewEdit
                    username={"Dishank J. Jambupara"}
                    address={"Ambawadi Circle, Prahlad nagar - 4, Ahmedabad - 360089 "}
                    mobile={'7385' + '-' + '9746'}
                />

                <AddressViewEdit
                    username={"Impero IT"}
                    address={"Ambawadi Circle, Prahlad nagar - 4, Ahmedabad - 360089 "}
                    mobile={'7385' + '-' + '9746'}
                />

                <Text style={[styles.smalltext, { textAlign: 'left', marginHorizontal: dw(10) }]} onPress={() => Navigation.navigate('AddNewAddress')}>Add New Address</Text>
            </View>

            <TouchableOpacity
                style={styles.activenextbutton}>
                <Text style={styles.headertitle}>Save</Text>
            </TouchableOpacity>


        </View>
    )


}

export default ManageAddress;