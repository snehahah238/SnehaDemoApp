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


function List({ photo, title, onPress }) {

    return (

        <TouchableOpacity onPress={onPress} style={styles.listview}>
            <View style={styles.listimageview}>
                <Image source={photo} style={styles.activetabicon} />
            </View>
            <View style={styles.listdescription}>
                <Text style={styles.darktitle}>{title}</Text>
            </View>
            <View style={styles.cartlistnextview}>
                <Image source={images.next} style={styles.nexticon} />
            </View>
        </TouchableOpacity>
    )
}

export default List;