import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const InputField = ({ placeholder, value, onChangeText }) => (
    <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#414141"
        value={value}
        onChangeText={onChangeText}
    />
);

const ActionButton = ({ title, onPress, style }) => (
    <TouchableOpacity style={[styles.actionButton, style]} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

const Index = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Edit Profile</Text>
            </View>
            <View style={styles.contentWrapper}>
                <Text style={styles.contentWrapperHeaderText}>
                    Personal Information
                </Text>
                <InputField placeholder="Full Name" value={firstName} onChangeText={setFirstName} />
                <InputField placeholder="First Name" value={firstName} onChangeText={setFirstName} />
                <InputField placeholder="Last Name" value={lastName} onChangeText={setLastName} />
                <InputField placeholder="Email" value={email} onChangeText={setEmail} />
                <View style={styles.profileImageRow}>
                    <Text>Profile Picture</Text>
                    <TouchableOpacity style={styles.chooseButton}>
                        <Text>Choose File</Text>
                    </TouchableOpacity>
                    <Text>No file chosen</Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <ActionButton title="Update" />
                </View>
            </View>
            <View style={styles.contentWrapper}>
                <Text style={styles.contentWrapperHeaderText}>
                    Delete account
                </Text>
                <Text style={styles.deleteWarning}>
                    Deleting your account will remove all your information
                </Text>
                <View style={styles.buttonWrapper}>
                    <ActionButton title="Delete" style={styles.deleteButton} />
                </View>
            </View>
        </View>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f1ed",
        alignItems: "center"
    },
    header: {
        marginVertical: 15,
        width: "85%",
        backgroundColor: "#454134",
        padding: 10,
        borderRadius: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    headerText: {
        fontSize: 18,
        textAlign: "center",
        color: "#d0d0ce",
        textTransform: "uppercase"
    },
    contentWrapper: {
        width: "85%",
        textAlign: "left",
        backgroundColor: "#ffffff",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        marginBottom: 30
    },
    contentWrapperHeaderText: {
        color: "#73726a",
        textTransform: "uppercase"
    },
    input: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: '#535353',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
        fontWeight: "bold"
    },
    profileImageRow: {
        flexDirection: "row",
        gap: 10,
        marginTop: 10,
        alignItems: "center"
    },
    chooseButton: {
        borderWidth: 1,
        borderColor: "#a4a4a4",
        paddingVertical: 2,
        paddingHorizontal: 3,
        borderRadius: 3
    },
    buttonWrapper: {
        marginTop: 10,
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
    },
    actionButton: {
        backgroundColor: "#ebb04b",
        paddingHorizontal: 35,
        paddingVertical: 10,
        textTransform: "uppercase",
        borderRadius: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        marginTop: 10
    },
    deleteButton: {
        backgroundColor: "#ff4d4d",
    },
    buttonText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "white",
    },
    deleteWarning: {
        width: "70%",
        marginTop: 10,
        color: "#94938e",
        fontSize: 12
    }
});
