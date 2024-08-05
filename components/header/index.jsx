import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import logo from "@/assets/images/logoLight.png"
const Header = () => {
    return (

        <View style={styles.header}>
            <Image source={logo} style={styles.headerLogo} />
            {/* <Text style={styles.headerText}>Bracketocracy</Text> */}
        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    header: {

        backgroundColor: "#454033",
        // justifyContent: "center",
        borderBottomWidth: 4,
        borderColor: "#C77922",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    headerLogo: {
        width:
            '80%',
        height: 60
    },
})