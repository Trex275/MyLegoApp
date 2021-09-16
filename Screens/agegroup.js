import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Agegroups extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    Agegroup screen
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