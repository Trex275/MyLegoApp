import * as React from "react";
import {     Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ImageBackground,
    Platform,
    StatusBar 
} from "react-native";
export default class Homescreen extends React.Component{
    render(){
        return(
            <View
                
                style={{
                    flex: 1,
                    backgroundColor: 'black'
                }}>
                <SafeAreaView style = {styles.screencheck}>
                    <View style = {styles.titleBar}>
                        <Text style = {styles.titleText}>Lego App</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('Legoinfo')
                    }} style = {styles.card}>
                        <Text style = {styles.cardText}>Lego Info</Text>
                        <Text style = {styles.knowText}>{"Know More"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('sets')
                    }} style = {styles.card}>
                        <Text style = {styles.cardText}>Lego Sets</Text>
                        <Text style = {styles.knowText}>{"Know More"}</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('Agegroups')
                    }} style = {styles.card}>
                        <Text style = {styles.cardText}>Age Groups</Text>
                        <Text style = {styles.knowText}>{"Know More"}</Text>
                    </TouchableOpacity>
                </SafeAreaView>
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
    }
})