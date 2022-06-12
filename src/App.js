import React, {useState} from "react";
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    StyleSheet,
    View
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

            <View style={styles.containerBotoes}>

                <TouchableOpacity onPress={ () => setNumero( numero - 1 ) } style={styles.incrementDecrementBtn}>
                    <Text style={styles.textoBotao}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNumero} style={styles.botao}>
                    <Text style={styles.textoBotao}>Gerar Número</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress= { () => setNumero( numero + 1 ) } style={styles.incrementDecrementBtn}>
                    <Text style={styles.textoBotao}>+</Text>
                </TouchableOpacity>
            </View>

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
        paddingHorizontal: 18,
        paddingVertical: 24,
        borderRadius: 35,
    },

    textoBotao: {
        fontSize: 18,
        fontWeight:'bold',
        color: '#fffffe',
    },

    containerBotoes: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    incrementDecrementBtn: {
        backgroundColor: '#e53170',
        paddingHorizontal: 18,
        paddingVertical: 20,
        borderRadius: 10,
    }

});

export default App;