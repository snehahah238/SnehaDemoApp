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
    ImageStore
} from 'react-native';
import styles from '../styles/styles';
import Navigation from '../navigators/Navigation';
import Listview from '../components/ListComponent';
import Images from '../Theme/Images';


function Menu() {

    const _header = () => {
        return (
            <View style={[styles.headerview, { justifyContent: 'space-between' }]}>
                <Text style={styles.headertitle}>Hello, Dishank</Text>
                <Text onPress={() => Navigation.navigateAndReset('IntroSlider')} style={styles.headertitle}>Sign Out</Text>
            </View>
        )
    }



    return (

        <View style={styles.container}>

            {_header()}

            <View style={styles.container}>
                <Listview
                    photo={Images.user}
                    title="My Profile"
                    onPress={() => { Navigation.navigate('MyProfile') }}
                />
                <View style={styles.divider} />
                <Listview
                    photo={Images.location}
                    title="Manage addresses"
                    onPress={() => { Navigation.navigate('ManageAddress') }}
                />
                <View style={styles.divider} />
                <Listview
                    photo={Images.message}
                    title="Contact us"
                />
                <View style={styles.divider} />
                <Listview
                    photo={Images.about}
                    title="About ImperoIT"
                />
                <View style={styles.divider} />
                <Listview
                    photo={Images.tnc}
                    title="Terms & conditions"
                />
                <View style={styles.divider} />

            </View>

        </View>
    )


}

export default Menu;