import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Slide1, Slide2} from '../screens';
import { AntDesign } from '@expo/vector-icons';

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