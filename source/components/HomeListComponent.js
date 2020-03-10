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
import { dh, dw } from '../styles/dhdw';
import Navigation from '../navigators/Navigation';


function HomeList({ photo, title, price, description, crossprice, status }) {

    return (

        <View style={styles.homelistitem}>
            <View style={styles.homelisttop}>
                <Image source={photo} style={styles.listhomeimages} />
                <Text style={styles.darktitle}>{title}</Text>
                <View style={styles.priceview}>
                    <Text style={styles.crosspricetext}>
                        {crossprice}
                    </Text>
                    <Text style={[styles.darktitle, { marginHorizontal: dw(1.5) }]}>{price}</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => Navigation.navigate('Completeorder')}
                disabled={status === 'active' ? false : true}
                style={status === 'active' ? styles.activehomebottom : styles.homelistbottom}>
                <Text style={styles.headertitle}>{description}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeList;