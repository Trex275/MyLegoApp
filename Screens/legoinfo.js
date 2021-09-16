import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Legoinfo extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    information screen
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });