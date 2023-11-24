import { Tabs } from "expo-router";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{
                tabBarLabel:"Home", 
                tabBarLabelStyle:{color:"#008E97"}, 
                headerShown:false,
                tabBarIcon:({focused}) => focused? (
                    <Entypo name="home" size={24} color="black" />
                ) : (
                    <AntDesign name="home" size={24} color="black" />
                )}}/>

            <Tabs.Screen name="scorecard" options={{
                tabBarLabel:"Scorecard", 
                tabBarLabelStyle:{color:"#008E97"}, 
                headerShown:false,
                tabBarIcon:({focused}) => focused? (
                    <FontAwesome5 name="address-card" size={24} color="black" />
                ) : (
                    <AntDesign name="idcard" size={24} color="black" />
                )}}/>

            <Tabs.Screen name="profile" options={{
                tabBarLabel:"Profile", 
                tabBarLabelStyle:{color:"#008E97"}, 
                headerShown:false,
                tabBarIcon:({focused}) => focused? (
                    <Ionicons name="person" size={24} color="black" />
                ) : (
                    <Ionicons name="person-outline" size={24} color="black" />
                )}}/>
        </Tabs>
    )
}