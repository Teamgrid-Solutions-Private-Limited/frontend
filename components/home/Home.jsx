import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Users from '../../assets/images/user.png';
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import UsersBackground from '../../assets/images/basket-ball.svg';
import Footer from '../the bracket/Footer';
import Header from './Header';

const Home = (props) => {
    const handleNavigate = () => {
        props.navigation.navigate("menu");
    };

    const notificationsCount = 0;
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={styles.main}>
                <View style={styles.content}>
                    <View style={styles.contentBox}>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.contentWrapperText}>RANK</Text>
                            <View style={styles.circle}>
                                <FontAwesome5 name="users" size={35} color="black" />
                            </View>
                        </View>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.contentWrapperText}>NOTIFICATIONS</Text>
                            <View style={styles.circle}>
                                <Ionicons name="notifications" size={35} color="black" />
                                {notificationsCount > 0 && (
                                    <View style={styles.badge}>
                                        <Text style={styles.badgeText}>{notificationsCount}</Text>
                                    </View>
                                )}
                            </View>
                        </View>
                    </View>
                    <View style={styles.middleContentContainer}>
                        <View style={styles.middleContentBoxWrapper}>
                            <UsersBackground width={350} height={350} style={styles.background} />
                            <View style={styles.middleContentBox}>
                                <Image source={Users} style={styles.user} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentBox}>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.contentWrapperText}>PICKS</Text>
                            <View style={styles.circle}>
                                <AntDesign name="checkcircle" size={35} color="black" />
                            </View>
                        </View>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.contentWrapperText}>MAIN MENU</Text>
                            <View style={styles.circle}>
                                <TouchableOpacity onPress={handleNavigate}>
                                    <Ionicons name="menu" size={40} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <Footer />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f0efe9",
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
    },
    contentBox: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    contentWrapper: {
        justifyContent: "center",
        alignItems: "center",
    },
    contentWrapperText: {
        fontWeight: "bold",
        fontSize: 15,
    },
    middleContentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleContentBoxWrapper: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    background: {
        position: 'absolute',
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    middleContentBox: {
        height: 204,
        width: 204,
        borderRadius: '50%',
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#D88D28",
        overflow: 'hidden',
        backgroundColor: '#fff',
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
        position: 'relative',
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
        alignItems: 'center',
    },
    badgeText: {
        color: '#000',
        fontSize: 12,
        fontWeight: 'bold',
    },
});
