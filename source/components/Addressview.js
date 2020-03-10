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


function AddressView({ username, address, mobile }) {

    return (

        <View style={styles.addressview}>
            <View style={styles.topaddress}>
                <View style={styles.radioround} />
                <View style={styles.addresses}>
                    <Text style={styles.darktitle}>{username}</Text>
                    <Text style={[styles.smalltext, { textAlign: 'left' }]}>{address}</Text>
                    <Text style={[styles.smalltext, { textAlign: 'left' }]}>Mobile: (13){mobile}</Text>
                </View>
            </View>
            <View style={styles.addressbutton}>
                <Text style={styles.darktitle}>Edit Address</Text>
            </View>
        </View>

    )

}

export default AddressView;