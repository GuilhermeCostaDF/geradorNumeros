import React from "react";
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    StyleSheet,
}from 'react-native';

const App = () => {

    return(
        <SafeAreaView style={styles.container}>
            <Text>Olá, mundão!</Text>
            <TouchableOpacity >
                <Text>Gerar Número</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        fontSize: 24,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

});

export default App;