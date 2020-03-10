import React, { useEffect, useState, Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    StatusBar
} from 'react-native';
import styles from '../styles/styles';
import Navigation from '../navigators/Navigation';


// function Slider({ dishank }) {
class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    }

    _onNext = () => {
        if (this.state.currentIndex < this.props.Data.length - 1) {
            this.swiper.scrollToIndex({
                index: this.state.currentIndex + 1,
                animated: true,
            });
            this.setState({ currentIndex: this.state.currentIndex + 1 })
        }
    }


    render() {
        return (
            <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center' }}>

                <FlatList
                    ref={flatList => {
                        this.swiper = flatList;
                    }}
                    data={this.props.Data}
                    pagingEnabled={true}
                    horizontal={true}
                    directionalLockEnabled
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    initialScrollIndex={this.state.currentIndex}
                    renderItem={({ item, index }) =>

                        <View style={styles.sliderview}>
                            <Image source={item.image} style={styles.sliderimage} />

                            <Text style={styles.slidertitle}>{item.title}</Text>

                            <View style={styles.slidertextbox}>
                                <Text style={styles.smalltext}>{item.text}</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                {this.props.Data.map((item, i) =>
                                    <View style={index === i ? styles.activedot : styles.dot} />
                                )}
                            </View>

                            {index < this.props.Data.length - 1
                                ?
                                <TouchableOpacity onPress={this._onNext} style={{ alignSelf: 'flex-end' }}>
                                    <Text style={styles.nextsmalltextpurple}>Next</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => Navigation.navigateAndReset('MainPage')} style={styles.sliderfacebutton}>
                                    <Text style={styles.sliderfacetext}>Sign In with Facebook</Text>
                                </TouchableOpacity>
                            }
                        </View>

                    }
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }

}

export default Slider;