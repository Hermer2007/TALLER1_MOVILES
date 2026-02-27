import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductosScreen from '../screens/ProductosScreen';
import CarritoScreen from '../screens/CarritoScreen';
import ContactoScreen from '../screens/ContactoScreen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function MyTabs(){

    return(
        <Tab.Navigator
            screenOptions={{

                headerShown: false,

                tabBarStyle: {
                backgroundColor: '#5b5656', // fondo del bottom
                height: 60,
                borderTopWidth: 0,
                elevation: 10
                },

                tabBarActiveTintColor: '#5ed7ad', // color icono activo

                tabBarInactiveTintColor: '#888', // color icono inactivo

                tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: 'bold'
                }

            }}
        
        >
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