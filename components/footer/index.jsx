import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react';
import sponsored from "../../assets/images/react-logo.png"

const Footer = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.footerText}>Sponsored By</Text>
      <Image source={sponsored} alt="" style={styles.img}/>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    main:{
        height:80,
        backgroundColor:"#FFFFFF",
        justifyContent:"center",
        alignItems:"center"
    },
    img:{
        width:50,
        height:50
    },
    footerText:{
        textAlign:"center"
    }
})