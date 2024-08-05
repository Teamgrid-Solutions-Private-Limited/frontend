import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Users from "@/assets/images/user.jpg";
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import UsersBackground from '@/assets/images/basket-ball.svg';

const IconBox = ({ title, IconComponent, iconName, iconSize, notificationsCount, onPress }) => (
    <View style={styles.contentWrapper}>
        <Text style={styles.contentWrapperText}>{title}</Text>
        <View style={styles.circle}>
            {onPress ? (
                <TouchableOpacity onPress={onPress}>
                    <IconComponent name={iconName} size={iconSize} color="black" />
                </TouchableOpacity>
            ) : (
                <IconComponent name={iconName} size={iconSize} color="black" />
            )}
            {notificationsCount > 0 && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{notificationsCount}</Text>
                </View>
            )}
        </View>
    </View>
);

const Home = (props) => {
    const handleNavigate = () => {
        props.navigation.navigate("menu");
    };

    const notificationsCount = 3;
    return (
        <View style={styles.main}>
            <View style={styles.content}>
                <View style={styles.contentBox}>
                    <IconBox title="RANK" IconComponent={FontAwesome5} iconName="users" iconSize={35} />
                    <IconBox title="NOTIFICATIONS" IconComponent={Ionicons} iconName="notifications" iconSize={35} notificationsCount={notificationsCount} />
                </View>

                <View style={styles.middleContentBoxWrapper}>
                    <UsersBackground width={350} height={350} style={styles.background} />
                    <View style={styles.middleContentBox}>
                        <Image source={Users} style={styles.user} />
                    </View>
                </View>

                <View style={styles.contentBox}>
                    <IconBox title="PICKS" IconComponent={AntDesign} iconName="checkcircle" iconSize={35} />
                    <IconBox title="MAIN MENU" IconComponent={Ionicons} iconName="menu" iconSize={40} onPress={handleNavigate} />
                </View>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f0efe9"
    },
    content: {
        flex: 1,
        justifyContent: 'space-between'
    },
    contentBox: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    contentWrapper: {
        justifyContent: "center",
        alignItems: "center"
    },
    contentWrapperText: {
        fontFamily: "nova",
        fontSize: 18
    },
    middleContentBox: {
        height: 204,
        width: 204,
        borderRadius: 102,
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#D88D28",
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    middleContentBoxWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    background: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    user: {
        height: 200,
        width: 200,
        borderRadius: 100,
        resizeMode: 'cover',
    },
    circle: {
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ebb04b',
        borderRadius: 30,
        borderWidth: 3,
        borderColor: "#D88D28",
        position: 'relative'
    },
    badge: {
        position: 'absolute',
        top: 5,
        right: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgeText: {
        color: '#000',
        fontSize: 12,
        fontWeight: 'bold'
    }
});
