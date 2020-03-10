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
import ListView from '../components/CartListComponent';
import mockdata from '../mock/mocklistdata';



function Cart() {

    const _header = () => {
        return (
            <View style={styles.headerview}>
                <Text style={styles.headertitle}>Order history</Text>
            </View>
        )
    }

    console.log(mockdata, "MOCK")

    return (

        <View style={styles.container}>

            {_header()}

            <View style={styles.container}>

                <FlatList
                    data={mockdata.cartdata}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={styles.divider} />}
                    renderItem={({ item }) =>
                        <ListView
                            photo={item.image}
                            orderstatus={item.orderstatus}
                            title={item.title}
                            status={item.status}
                        />
                    }
                />

            </View>

        </View>
    )


}

export default Cart;