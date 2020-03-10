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
import { ProfileData } from '../components/CommomComponents';
import { dw } from '../styles/dhdw';

    

function SelectAddress(props) {

    const _header = () => {
        return (
            <View style={styles.headerview}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={styles.headerleft}>
                    <Image source={images.back} style={styles.backicon} />
                </TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.headertitle}>My Profile</Text>
                </View>
                <View style={styles.headerleft} />
            </View>
        )
    }

    return (

        <View style={styles.container}>

            {_header()}

            <View style={styles.container}>
                <ProfileData title="Name" value="Dishank Jambupara" />

                <ProfileData title="Email" value="dishankj@gmail.com" />
            </View>

            <TouchableOpacity
                style={styles.activenextbutton}>
                <Text style={styles.headertitle}>Update</Text>
            </TouchableOpacity>


        </View>
    )


}

export default SelectAddress;