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
    TextInput,
    Button, Alert,
    ImageStore
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';


// Import Styles
import styles from '../styles/styles';

// Import Images
import images from '../Theme/Images';

// Import Tab Containers
import Home from './Home';
import Cart from './Cart';
import Menu from './Menu';

import { login } from '../actions';



function Login() {

    //Tab state
    const [activetab, setActivetab] = useState(0);

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const dispatch = useDispatch();


    const onLogin = () => {

        // Alert.alert(JSON.stringify(firstName));
        console.log(firstName)
        console.log(lastName)
    }


    const handleSubmit = async (event) => {
       // event.preventDefault();
        dispatch(login(firstName, lastName));
    };


    return (
        // Main Container
        <View style={styles.container}>
            <TextInput
                onChangeText={(username) => setFirstName({ username })}
                placeholder={'Username'}
                style={styles.input}
            />
            <TextInput
                onChangeText={(password) => setLastName({ password })}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
            />

            <Button
                title={'Login'}
                style={styles.input}
                onPress={handleSubmit}
            />
        </View>
    )

}

// Export Main function or class
export default Login;