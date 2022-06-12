import React, {useState} from "react";
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';


const App = () => {

    const [numero, setNumero] = useState(0);

    const  handleNumero = () => {
        const novo_numero = Math.floor(Math.random() * 100);
        setNumero(novo_numero);
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.numero}>{numero}</Text>
            <TouchableOpacity onPress={handleNumero} style={styles.botao}>
                <Text style={styles.textoBotao}>Gerar Número</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0f0e17',
        fontSize: 24,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    numero: {
        fontSize: 50,
        color: 'white',
        fontWeight: "bold",
        marginBottom:40,
    },

    botao: {
        backgroundColor: '#ff8906',
        paddingHorizontal: 20,
        paddingVertical: 28,
        borderRadius: 35,
    },

    textoBotao: {
        fontSize: 18,
        fontWeight:'bold',
        color: '#fffffe',
    }

});

export default App;