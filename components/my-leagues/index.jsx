import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import profileImage from "@/assets/images/user.jpg";
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const ProfileItem = ({ imageSource, mainText, subText }) => (
    <View style={styles.profileDetails}>
        <Image source={imageSource} style={styles.profileImage} />
        <View style={styles.profileTextContainer}>
            <Text style={styles.profileTextMain}>{mainText}</Text>
            <Text style={styles.profileText}>{subText}</Text>
        </View>
    </View>
);

const StatsItem = ({ label, value, isButton }) => (
    <View style={styles.statsItem}>
        <Text style={styles.statsText}>{label}</Text>
        {isButton ? (
            <TouchableOpacity style={styles.selectionHistoryButton}>
                <Text style={styles.statsValue}>History</Text>
                <FontAwesome name="angle-right" size={24} color="#ebb04b" />
            </TouchableOpacity>
        ) : (
            <Text style={styles.statsValue}>{value}</Text>
        )}
    </View>
);

const LeagueItem = ({ leagueName }) => (
    <TouchableOpacity style={styles.leagueItem}>
        <Text style={styles.leagueName}>{leagueName}</Text>
        <AntDesign name="downcircle" size={24} color="#ebb04b" />
    </TouchableOpacity>
);

const LeaderboardItem = ({ imageSource, name, points, rank }) => (
    <View style={styles.leaderboardItem}>
        <View style={styles.leaderboardTextContainer}>
            <Image source={imageSource} style={styles.leaderboardImage} />
            <Text style={styles.leaderboardName}>{name}</Text>
        </View>
        <View style={styles.leaderboardStatsContainer}>
            <Text style={styles.leaderboardStats}>{points}</Text>
            <Text style={styles.leaderboardStats}>{rank}</Text>
        </View>
    </View>
);

const Index = () => {
    return (
        <ScrollView style={styles.main} contentContainerStyle={{ alignItems: "center" }}>
            <View style={styles.scorecard}>
                <Text style={styles.scorecardText}>MY SCORECARD</Text>
            </View>
            <View style={styles.profileContainer}>
                <ProfileItem 
                    imageSource={profileImage} 
                    mainText="Mike Dickerman" 
                    subText="mike@godigitalalchemy.com" 
                />
                <View style={styles.statsContainer}>
                    <StatsItem label="Rank" value="12" />
                    <StatsItem label="Points" value="130" />
                    <StatsItem label="Selection" isButton />
                </View>
            </View>
            <View style={styles.scorecard}>
                <Text style={styles.scorecardText}>My Leagues</Text>
            </View>
            <View style={styles.myLeagues}>
                <LeagueItem leagueName="NC H20S" />
                <LeagueItem leagueName="Mike's League" />
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.createButton}>
                    <Text style={styles.buttonText}>Create New League</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.scorecard}>
                <Text style={styles.scorecardText}>Global Leaderboard</Text>
            </View>
            <View style={styles.leaderBoardTableHeader}>
                <View style={styles.leaderBoardTableContent}>
                    <Text style={styles.tableHeaderText}>Name</Text>
                </View>
                <View style={styles.leaderBoardTableContent2}>
                    <Text style={styles.tableHeaderText}>Points</Text>
                    <Text style={styles.tableHeaderText}>Rank</Text>
                </View>
            </View>
            {Array(7).fill().map((_, index) => (
                <LeaderboardItem 
                    key={index} 
                    imageSource={profileImage} 
                    name="Mike Dickerman" 
                    points="130" 
                    rank="12" 
                />
            ))}
        </ScrollView>
    )
}

export default Index;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#f2f1ed",
    },
    scorecard: {
        marginVertical: 15,
        width: "85%",
        backgroundColor: "#454134",
        borderRadius: 3,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    scorecardText: {
        fontFamily: "nova",
        fontSize: 22,
        textAlign: "center",
        color: "white",
        textTransform: "uppercase"
    },
    profileContainer: {
        width: "85%",
        backgroundColor: "white",
        borderRadius: 3,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    profileDetails: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 25,
        marginRight: 10
    },
    profileTextContainer: {
        flexDirection: "column"
    },
    profileTextMain: {
        fontFamily: "nova",
        fontSize: 16,
    },
    profileText: {
        fontFamily: "nova",
        fontSize: 16,
        color: "#ebb04b"
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    statsItem: {
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    statsText: {
        fontFamily: "nova",
        fontSize: 14,
        color: "#ebb04b",
        textTransform: "uppercase",
    },
    statsValue: {
        fontFamily: "nova",
        fontSize: 16,
        textTransform: "uppercase"
    },
    buttonWrapper: {
        width: "85%",
        display: "flex",
        alignItems: "flex-end",
    },
    createButton: {
        backgroundColor: "#ebb04b",
        padding: 10,
        textTransform: "uppercase",
        borderRadius: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    buttonText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "white",
    },
    subHeader: {
        display: "flex",
        justifyContent: "center",
    },
    subHeaderText: {
        width: "85%",
        backgroundColor: "#454134"
    },
    myLeagues: {
        marginVertical: 10,
        width: "85%",
        borderRadius: 3,
    },
    leaderBoardTableHeader: {
        width: "85%",
        flexDirection: "row",
        marginBottom: 10
    },
    leaderBoardTableContent: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        paddingLeft: 10
    },
    leaderBoardTableContent2: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    tableHeaderText: {
        fontSize: 15,
        fontFamily: "nova",
        color: "#ebb04b",
        textTransform: "uppercase"
    },
    selectionHistoryButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 5
    },
    rightArrow: {
        width: 10,
        height: 10,
        resizeMode: 'contain',
        marginLeft: 10
    },
    leagueItem: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        marginBottom: 20,
        borderRadius: 3,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    leagueName: {
        fontFamily: "nova",
        fontSize: 16,
        textTransform: "uppercase"
    },
    downArrow: {
        width: 10,
        height: 10,
        resizeMode: 'contain'
    },
    leaderboardItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
        marginBottom: 15,
        borderRadius: 4,
        backgroundColor: "white",
        width: "85%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    leaderboardImage: {
        width: 20,
        height: 20,
        borderRadius: 15,
        marginLeft: 10,
        marginRight: 10
    },
    leaderboardTextContainer: {
        flex: 1,
        flexDirection: "row"
    },
    leaderboardName: {
        fontSize: 14,
        fontFamily: "nova",
    },
    leaderboardStatsContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    leaderboardStats: {
        fontSize: 14,
        fontFamily: "nova",
    }
});
