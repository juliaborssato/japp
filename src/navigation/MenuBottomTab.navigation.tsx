import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Slide1, Slide2} from '../screens';
import { AntDesign } from '@expo/vector-icons';
import { MessageNavigation } from './message.navigation';
import { colors } from '../styles/colors';

type MenuTabParam = {
    Slide1: undefined
    Slide2: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Slide1">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
    <Tab.Navigator>
        <Tab.Screen name="Slide1" component={Slide1}
        options={{
            tabBarIcon: () => (
                <AntDesign name="home" size={24} color="black" />
            )
        }}
        />

        <Tab.Screen name="Mensagem" component={MessageNavigation}
         options={{
            tabBarIcon: () => (
                <AntDesign name="message1" size={24} color={colors.white}/>
            ),
        }}
        />

        <Tab.Screen name="Slide2" component={Slide2}
        options={{
        tabBarIcon: ()=>(
            <AntDesign name="book" size={24} color="black" />
        )
        }}
        />
    </Tab.Navigator>
    );
}