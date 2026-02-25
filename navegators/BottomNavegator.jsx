import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductosScreen from '../screens/ProductosScreen';
import CarritoScreen from '../screens/CarritoScreen';
import ContactoScreen from '../screens/ContactoScreen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function MyTabs(){

    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Productos" 
                component={ProductosScreen}
                options={{ tabBarIcon:()=><MaterialIcons name="home" size={25} color="green" /> }} 
            />
            <Tab.Screen 
                name="Carrito" 
                component = {CarritoScreen} 
                options={{ tabBarIcon:()=><MaterialIcons name="shopping-cart" size={25} color="green" /> }} 
            />
            <Tab.Screen 
                name="Contactos" 
                component ={ContactoScreen}
                options={{ tabBarIcon:()=><MaterialIcons name="phone" size={25} color="green" /> }} 
            />
        </Tab.Navigator>
    )
}
export function BottomNavegator() {
    return(
        <MyTabs/>  
    )
}