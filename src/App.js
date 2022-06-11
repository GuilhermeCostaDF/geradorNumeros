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
            <Text style={styles.numero}>0</Text>
            <TouchableOpacity style={styles.botao}>
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

    numero: {
        fontSize: 40,
        color: 'white',
        fontWeight: "bold",
    },

    botao: {
        backgroundColor: 'white',
        width: 200,
        paddingHorizontal: 10,
        paddingVertical: 25,
    }

});

export default App;