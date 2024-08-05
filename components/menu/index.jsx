import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import menu from "@/assets/images/bk-menu.jpg";

const NavigationButton = ({ onPress, text, icon }) => (
    <TouchableOpacity onPress={onPress} style={styles.navigationButton}>
        {icon && <Entypo name={icon} size={35} color="white" />}
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
);

const BottomButton = ({ onPress, text, IconComponent, iconName, iconSize }) => (
    <TouchableOpacity style={styles.bottomIcon} onPress={onPress}>
        <IconComponent name={iconName} size={iconSize} color="#ebb04b" />
        <Text style={styles.bottomText}>{text}</Text>
    </TouchableOpacity>
);

const Index = (props) => {

    const handleCloseComponent = () => {
        props.navigation.navigate("home");
    };
    const handleGoToInstractions = () => {
        props.navigation.navigate("how-to-play");
    };
    const handleGoToLeagues = () => {
        props.navigation.navigate("my-leagues");
    };
    const handleGoToEditProfile = () => {
        props.navigation.navigate("edit-profile");
    };

    return (
        <ImageBackground style={styles.menuMain} source={menu}>
            <View style={styles.container}>
                <View style={styles.buttonWrapper}>
                    <NavigationButton onPress={handleCloseComponent} icon="cross" />
                </View>
                <NavigationButton onPress={handleCloseComponent} text="Home" />
                <Text style={styles.text}>The bracket</Text>
                <NavigationButton onPress={handleGoToLeagues} text="My leagues" />
                <NavigationButton onPress={handleGoToInstractions} text="How to play" />
            </View>
            <View style={styles.bottomWrapper}>
                <BottomButton
                    onPress={handleGoToEditProfile}
                    text="Edit profile"
                    IconComponent={FontAwesome5}
                    iconName="edit"
                    iconSize={16}
                />
                <BottomButton
                    onPress={() => {}}
                    text="logout"
                    IconComponent={MaterialIcons}
                    iconName="logout"
                    iconSize={22}
                />
            </View>
        </ImageBackground>
    );
};

export default Index;

const styles = StyleSheet.create({
    menuMain: {
        flex: 1,
        width: "auto",
        height: "auto",
        justifyContent: "space-between",
    },
    container: {
        height: "40%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        fontFamily: "nova",
        fontSize: 35,
        color: "white",
        textTransform: "uppercase",
    },
    buttonWrapper: {
        width: "100%",
        padding: 30,
        paddingBottom: 0,
        alignItems: "flex-end",
    },
    navigationButton: {
        alignItems: "center",
        justifyContent: "center",
    },
    bottomIcon: {
        display: "flex",
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    bottomWrapper: {
        marginTop: 20,
        padding: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bottomText: {
        fontFamily: "nova",
        fontSize: 15,
        color: "white",
        textTransform: "uppercase",
    },
});
