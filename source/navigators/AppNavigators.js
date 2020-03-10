import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import IntroSlider from '../containers/IntroSlider';
import Login from '../containers/Login';

import FlatListBasics from '../containers/FlatListBasics';

import MainPage from '../containers/Mainpage';
import Completeorder from '../containers/Completeorder';
import SelectAddress from '../containers/SelectAddress';
import AddNewAddress from '../containers/AddNewAddress';
import PlacedOrder from '../containers/PlacedOrder';
import MyProfile from '../containers/MyProfile';
import ManageAddress from '../containers/ManageAddress';

const StackNavigator = createStackNavigator(
    {
        Login: Login,
        IntroSlider: IntroSlider,
        FlatListBasics: FlatListBasics,
        MainPage: MainPage,
        Completeorder: Completeorder,
        SelectAddress: SelectAddress,
        AddNewAddress: AddNewAddress,
        PlacedOrder: PlacedOrder,
        MyProfile: MyProfile,
        ManageAddress: ManageAddress
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
    }
)

export default createAppContainer(StackNavigator)