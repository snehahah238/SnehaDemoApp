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
import ListItem from '../components/HomeListComponent';
import mockdata from '../mock/mocklistdata';

function Home() {

    // Header part
    const _header = () => {
        return (
            <View style={styles.headerview}>
                <Text style={styles.headertitle}>Trending deals</Text>
            </View>
        )
    }

    return (

        <View style={styles.container}>

            {_header()}

            <View style={styles.container}>
                <FlatList
                    data={mockdata.homelist}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            status={item.status}
                            photo={item.image}
                            description={item.description}
                            crossprice={item.crossprice}
                            price={item.price}
                        />
                    }

                />
            </View>

        </View>
    )


}

export default Home;