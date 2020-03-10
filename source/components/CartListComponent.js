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
import images from '../Theme/Images';


function CartList({ photo, title, orderstatus, status }) {

    return (

        <View style={styles.cartlistitem}>
            <View style={styles.cartlistimageview}>
                <Image source={photo} style={styles.cartlistimage} />
            </View>

            <View style={styles.cartlistdescription}>
                <Text style={[styles.darktitle, { color: '#6a0dad' }]}>{title}</Text>
                <Text style={styles.smalltext}>Order Status:{' '}
                    <Text
                        style={status === 'confirm'
                            ? [styles.smalltext, { color: 'green' }]
                            : status === 'cancelled'
                                ? [styles.smalltext, { color: 'red' }]
                                : styles.smalltext}>{orderstatus}
                    </Text>
                </Text>
            </View>
            <TouchableOpacity disabled={status === 'cancelled' || status === 'placed' ? false : true}
                style={styles.cartlistnextview}>
                <Image source={images.next} style={styles.nexticon} />
            </TouchableOpacity>
        </View>
    )
}

export default CartList;