import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet, FlatList, TouchableOpacity, Alert,
    AsyncStorage
} from 'react-native';

import Slider from '../components/Slider';

import axios from './axios';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getmaster } from '../actions';

import CardView from 'react-native-cardview'

import Navigation from '../navigators/Navigation';


function IntroSlider() {

    const [customers, setCustomers] = useState([]);

    const master = useSelector((state) => state.master.businesspremises);

    console.log("MasterIs..", master)

    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };
    //handling onPress action  
    const getListViewItem = (item) => {
        Alert.alert(item.nicename);
    }


    const data = [
        {
            title: 'Loreum Title',
            image: require('../assets/Images/children11.png'),
            text: "Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text."
        },
        {
            title: 'Loreum Ipsum Title',
            image: require('../assets/Images/children.png'),
            text: "Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text."
        },
        {
            title: 'Loreum Title',
            image: require('../assets/Images/21421.png'),
            text: "Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text."
        }

    ]

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getmaster())
    }, []);


    return (
        // <View style={{ flex: 1 }}>

        //     <View style={{ flex: 1, backgroundColor: "red" }}>
        //         <Slider Data={data} />
        //     </View>

        // </View>

        <View style={styles.container}>
           
            <FlatList
                data={master}
                renderItem={({ item }) =>

                    <View>
                        {/* <Text style={styles.item}
                            onPress={getListViewItem.bind(this, item)}>{item.nicename}</Text> */}

                        <TouchableOpacity onPress={Navigation.navigate("Mainpage")}>

                            <CardView
                                style={{ height: 300, width: "90%", alignSelf: "center", marginTop: "5%", justifyContent: "center", backgroundColor: "#FFFFFF" }}
                                cardElevation={10}
                                cardMaxElevation={10}
                                cornerRadius={5}>

                                <View style={{ height: 250, width: "80%", alignSelf: "center", backgroundColor: "red", flexDirection: "row" }}>

                                    <View style={{ alignItems: "center",flexDirection:"row" }}>

                                        <Image style={{ height: 250, width: "70%", borderRadius: 10,alignSelf:"center" }} source={require("../assets/Images/children.png")}></Image>

                                        <Text style={styles.item}
                                        onPress={getListViewItem.bind(this, item)}>{item.nicename}</Text>
                                  
                                    </View>

                                    {/* <Text style={styles.item}
                                        onPress={getListViewItem.bind(this, item)}>{item.nicename}</Text> */}

                                </View>

                            </CardView>

                        </TouchableOpacity>

                    </View>

                }

            // ItemSeparatorComponent={renderSeparator}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})


export default IntroSlider;




// import React, { Component } from "react";
// import { StyleSheet, FlatList, Text, Image, View, TouchableOpacity } from "react-native";

// import CardView from 'react-native-cardview'

// export default class IntroSlider extends Component {

//     _keyExtractor = item => item.id;

//     _renderItem = ({ item }) => {

//         return (

//             <View style={{backgroundColor:"red"}}>

//                 <Text style={{ fontSize: 15, color: "red" }}> hello</Text>


//                 {/* <TouchableOpacity>

//           <CardView
//             style={{ height: "20%", width: "90%", marginTop:"5%", justifyContent: "center", backgroundColor: "#FFFFFF" }}
//             cardElevation={10}
//             cardMaxElevation={10}
//             cornerRadius={5}>

//             <View style={{ height:"15%", width:"80%", alignSelf: "center", backgroundColor: "white", flexDirection: "row" }}>

//               <View style={{ alignItems: "center" }}>

//                 <Image style={{ height:"15%", width:"15%", borderRadius: 10 }} source={require("../assets/Images/21421.png")}></Image>

//               </View>

//               <Text style={{ fontSize: 15, color: "red" }}> hello</Text>

//             </View>

//           </CardView>

//         </TouchableOpacity> */}

//             </View>
//         );
//     };

//     render() {
//         return (
//             <View style={{ marginBottom: "5%" }}>
//                 <FlatList
//                     style={{ flex: 1 }}
//                     data={data}
//                     keyExtractor={this._keyExtractor}
//                     renderItem={this._renderItem}
//                     showsVerticalScrollIndicator={false}
//                     showsHorizontalScrollIndicator={false}
//                 />
//             </View>
//         );
//     }
// }


// const data = [
//     {
//         id: "1",
//         title: 'Loreum Title',
//         image: require('../assets/Images/children11.png'),
//         text: "Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text."
//     },
//     {
//         id: "2",
//         title: 'Loreum Ipsum Title',
//         image: require('../assets/Images/children.png'),
//         text: "Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text."
//     },
//     {
//         id: "3",
//         title: 'Loreum Title',
//         image: require('../assets/Images/21421.png'),
//         text: "Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text."
//     }

// ]


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#093339"
//     },
//     cardContainerStyle: {
//         flex: 1,
//         flexDirection: "row",
//         justifyContent: "space-between",
//         margin: 20,
//         backgroundColor: "red",
//         padding: 10
//     },
//     faceImageStyle: {
//         width: 65,
//         height: 65
//     },
//     cardTextStyle: {
//         color: "white",
//         textAlign: "left"
//     }
// });




// import React, { useEffect, useState } from 'react';
// import {
//     View,
//     Text,
//     Image,
//     StyleSheet,
//     AsyncStorage
// } from 'react-native';
// import Slider from '../components/Slider';


// function IntroSlider() {

//     const data = [
//         {
//             title: 'Loreum Title',
//             image: require('../assets/Images/children11.png'),
//             text: "Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text."
//         },
//         {
//             title: 'Loreum Ipsum Title',
//             image: require('../assets/Images/children.png'),
//             text: "Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text."
//         },
//         {
//             title: 'Loreum Title',
//             image: require('../assets/Images/21421.png'),
//             text: "Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text. Lorem Ipsum is Dummy Text."
//         }

//     ]

//     return (
//         <View style={{ flex: 1,backgroundColor:"red" }}>
//             <Slider Data={data} />
//         </View>
//     )


// }

// export default IntroSlider;