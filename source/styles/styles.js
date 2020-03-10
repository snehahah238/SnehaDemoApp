import React from 'react';
import { dh, dw } from './dhdw';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

    container: { flex: 1 },

    sliderimage: {
        width: dw(100),
        height: dh(40),
        resizeMode: 'contain',
    },

    slidertitle: {
        color: '#6a0dad',
        fontSize: dh(3),
        fontFamily: 'Poppins-Medium'
    },

    sliderview: {
        width: dw(100),
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },

    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#41414150',
        flexDirection: 'row',
        margin: dh(1)
    },

    activedot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#6a0dad',
        flexDirection: 'row',
        margin: dh(1)
    },

    smalltextpurple: {
        color: '#6a0dad',
        fontSize: dh(3),
        fontFamily: 'Poppins-Light'
    },

    nextsmalltextpurple: {
        color: '#6a0dad',
        fontSize: dh(3),
        fontFamily: 'Poppins-Light',
        margin: dw(3)
    },

    smalltext: {
        color: '#000000',
        fontSize: dh(2),
        fontFamily: 'Poppins-Medium',
        textAlign: 'center'
    },

    slidertextbox: {
        width: dw(90),
        height: 'auto',
        marginVertical: dh(2),
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },

    sliderfacebutton: {
        width: dw(75),
        height: dh(7),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: dh(5),
        backgroundColor: 'steelblue',
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        marginBottom: dh(8)
    },

    sliderfacetext: {
        color: '#FFF',
        fontSize: dh(2),
        fontFamily: 'Poppins-Bold',
        textAlign: 'center'
    },

    tabbarview: {
        width: dw(100),
        height: dh(8),
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFF',
        elevation: 24,
    },

    tabicon: {
        height: dh(7),
        width: dw(7),
        resizeMode: 'contain',
        tintColor: '#41414150'
    },

    activetabicon: {
        height: dh(7),
        width: dw(7),
        resizeMode: 'contain',
        tintColor: '#6a0dad'
    },

    headerview: {
        height: dh(10),
        width: dw(100),
        backgroundColor: '#6a0dad',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: dh(1),
        flexDirection: 'row'
    },

    headertitle: {
        color: '#FFF',
        fontSize: dh(2.5),
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
    },

    crosspricetext: {
        color: '#ff0000',
        fontSize: dh(2),
        fontFamily: 'Poppins-Light',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },

    homelistitem: {
        width: dw(80),
        height: dh(60),
        borderRadius: 18,
        overflow: 'hidden',
        backgroundColor: '#41414110',
        alignSelf: 'center',
        marginVertical: dh(3)
    },

    homelisttop: {
        height: '80%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    homelistbottom: {
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#41414190'
    },

    listhomeimages: {
        width: dw(50),
        height: dh(25),
        resizeMode: 'contain',
        borderRadius: 8,
        marginVertical: dh(1.5)
    },

    activehomebottom: {
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6a0dad'
    },

    darktitle: {
        color: '#414141',
        fontSize: dh(2.5),
        fontFamily: 'Poppins-Medium',
        textAlign: 'center'
    },

    pricetext: {
        color: '#414141',
        fontSize: dh(3),
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
    },

    priceview: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },

    cartlistitem: {
        width: dw(100),
        height: dh(15),
        flexDirection: 'row',
    },

    cartlistimageview: {
        width: '30%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cartlistdescription: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    cartlistnextview: {
        width: '10%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cartlistimage: {
        width: dw(20),
        height: dh(20),
        borderRadius: 5,
        resizeMode: 'contain'
    },

    nexticon: {
        height: dh(5),
        width: dw(5),
        resizeMode: 'contain',
        tintColor: '#41414150'
    },

    listview: {
        width: dw(100),
        height: dh(11),
        flexDirection: 'row',
    },

    divider: {
        width: dw(98),
        height: dh(0.1),
        alignSelf: 'center',
        backgroundColor: '#41414150'
    },

    backicon: {
        height: dh(5),
        width: dw(5),
        resizeMode: 'contain',
        tintColor: '#FFF'
    },

    listimageview: {
        width: '20%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    listdescription: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    headerleft: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    cardviewitem: {
        width: dw(85),
        height: dh(15),
        flexDirection: 'row',
        backgroundColor: '#FFF',
        elevation: 14,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },

    addbankslipview: {
        width: dw(85),
        height: dh(13),
        alignSelf: 'center',
        justifyContent: 'center'
    },

    stepprogress: {
        height: dh(25),
        width: dw(85),
        justifyContent: 'center',
        alignSelf: 'center'
    },

    addbankslip: {
        height: '100%',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#41414130',
        borderRadius: 10
    },

    plusicon: {
        width: dw(10),
        height: dh(10),
        tintColor: '#FFF',
        resizeMode: 'contain',
    },

    nextbutton: {
        width: dw(100),
        height: dh(10),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#41414150'
    },

    activenextbutton: {
        width: dw(100),
        height: dh(10),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6a0dad'
    },

    bankslipimage: {
        resizeMode: 'contain',
        width: dw(10),
        height: dh(10),
    },

    addressview: {
        width: dw(90),
        height: 'auto',
        borderRadius: 5,
        borderColor: 'lightgray',
        borderWidth: 2,
        alignSelf: 'center',
        overflow: 'hidden',
        marginVertical: dh(2)
    },

    radioround: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        backgroundColor: '#000',
        padding: 5,
        borderColor: '#41414150'
    },

    topaddress: {
        flexDirection: 'row',
        padding: dh(2),
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },

    addressbutton: {
        width: '100%',
        height: dh(8),
        justifyContent: 'center',
        alignItems: 'center'
    },

    addresses: {
        alignItems: 'flex-start',
        paddingLeft: dw(2),
        marginTop: dh(-0.3)
    },

    addaddressmainview: {
        width: dw(85),
        alignSelf: 'center',
        height: 'auto'
    },

    name: {
        width: '100%',
        height: 'auto',
        borderColor: 'lightgray',
        borderWidth: 1,
        marginTop: dh(1.5),
        borderRadius: 5,
        alignItems: 'flex-start'
    },

    TextInput: {
        width: '100%',
        alignSelf: 'flex-start',
        fontSize: dh(2.5),
        textAlignVertical: 'top',
        color: 'lightgray',
    },

    placekback: {
        backgroundColor: '#6a0dad',
        alignItems: 'center',
        justifyContent: 'center'
    },

    simplebutton: {
        backgroundColor: '#FFF',
        width: dw(100),
        height: dh(8),
        justifyContent: 'center',
        alignItems: 'center'
    },

    simplebuttontext: {
        color: '#6a0dad',
        fontSize: dh(2.3),
        fontFamily: 'Poppins-Medium'
    },

    textbig: {
        fontSize: dh(4),
        fontFamily: 'Poppins-Medium',
        color: '#FFF'
    },

    textsmall: {
        fontSize: dh(2),
        fontFamily: 'Poppins-Regular',
        color: '#FFF'
    },

    profiledataview: {
        width: '100%',
        height: 'auto',
        padding: dh(2),
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },

    darktext: {
        fontSize: dh(2),
        fontFamily: 'Poppins-Regular',
        color: '#000'
    },

    addressbuttonedit: {
        flexDirection: 'row'
    },

    addressbuttoneditview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: dh(8),
    },

    piedivider:{
        height:'100%',
        width:dw(0.3),
        backgroundColor:'lightgray'
    }

})