import React, { Component, useEffect, useState } from 'react';
import Navigation from '../navigators/Navigation'
import AppNavigator from '../navigators/AppNavigators'
import { View, StatusBar } from 'react-native'


function Routes() {

    return (
        <View style={{ flex: 1 }}>

            <StatusBar hidden={true} />
            <AppNavigator
                ref={(navigatorRef) => {
                    Navigation.setTopLevelNavigator(navigatorRef)
                }}
            />
        </View>
    )

}

export default Routes;