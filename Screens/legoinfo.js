import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Legoinfo extends React.Component{
    render(){
        return(
            <View>
                <View styles = {styles.titleBar}>
                    <Text style = {styles.titleText}>
                        Information Screen
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screencheck: {
        margintop: Platform.OS==="android"?StatusBar.currentHeight:0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleBar: {
        flex: 0.15, justifyContent: "center", alignItems: "center"
    },
    titleText: {
        fontSize: 40, fontWeight:"bold", color:"white"
    },
    card: {
        flex:0.25, 
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: "white"
    },
    cardText: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 75,
        paddingLeft: 30
    },
    knowText: {
        paddingLeft: 30,
        color: "white",
        fontSize: 15
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        right: 20,
        top: -80,
        resizeMode: "contain"
    },
  });