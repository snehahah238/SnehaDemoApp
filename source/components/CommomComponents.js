import React from 'react';
import {
    View, Text, TextInput
} from 'react-native';
import styles from '../styles/styles';

function TextInputBox({ noli, title, }) {

    // const  = props;

    return (
        <View style={styles.name}>
            <TextInput
                placeholder={title}
                multiline={true}
                placeholderTextColor="lightgray"
                numberOfLines={noli}
                style={styles.TextInput}
            />
        </View>
    )
}
 

function ProfileData({ title, value }) {

    // const  = props;

    return (
        <View style={styles.profiledataview}>
            <Text style={styles.darktext}>{title}</Text>
            <Text style={[styles.darktitle, { textAlign: 'left' }]}>{value}</Text>
        </View>
    )
}

function AddressViewEdit({ username, address, mobile }) {

    return (
        <View style={styles.addressview}>
            <View style={styles.topaddress}>
                {/* <View style={styles.radioround} /> */}
                <View style={styles.addresses}>
                    <Text style={styles.darktitle}>{username}</Text>
                    <Text style={[styles.smalltext, { textAlign: 'left' }]}>{address}</Text>
                    <Text style={[styles.smalltext, { textAlign: 'left' }]}>Mobile: (13){mobile}</Text>
                </View>
            </View>
            <View style={styles.addressbuttonedit}>
                <View style={styles.addressbuttoneditview}>
                    <Text style={styles.darktitle}>Remove</Text>
                </View>
                <View style={styles.piedivider}></View>
                <View style={styles.addressbuttoneditview}>
                    <Text style={styles.darktitle}>Edit</Text>
                </View>
            </View>

        </View>
    )
}

export { TextInputBox, ProfileData, AddressViewEdit };