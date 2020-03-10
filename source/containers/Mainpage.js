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

// Import Styles
import styles from '../styles/styles';

// Import Images
import images from '../Theme/Images';

// Import Tab Containers
import Home from './Home';
import Cart from './Cart';
import Menu from './Menu';


function MainPage() {

    //Tab state
    const [activetab, setActivetab] = useState(0);

    // On Tab Change it will perform
    const _onTabChange = (ti) => {
        setActivetab(ti)
    }

    return (
        // Main Container
        <View style={styles.container}>

            {/* Tab Data Container */}
            <View style={styles.container}>
                {activetab === 0 && <Home />}
                {activetab === 1 && <Cart />}
                {activetab === 2 && <Menu />}
            </View>


            {/* Tabbar part Render */}
            <View style={styles.tabbarview}>
                <TouchableOpacity onPress={() => _onTabChange(0)} style={styles.tabbaritem}>
                    <Image source={images.home} style={activetab === 0 ? styles.activetabicon : styles.tabicon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => _onTabChange(1)} style={styles.tabbaritem}>
                    <Image source={images.cart} style={activetab === 1 ? styles.activetabicon : styles.tabicon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => _onTabChange(2)} style={styles.tabbaritem}>
                    <Image source={images.menu} style={activetab === 2 ? styles.activetabicon : styles.tabicon} />
                </TouchableOpacity>
            </View>

        </View>
    )

}

// Export Main function or class
export default MainPage;