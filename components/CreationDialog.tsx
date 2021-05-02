import * as React from 'react';
import {Button, StyleSheet, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text, View} from '../components/Themed';


function createAndOpenList() {
    //TODO call firebase
}


function creationDialog(navigation: any) {

    function getDefaultName(): String {
        return "default-name";
    }

    const [text, onChangeText] = React.useState(getDefaultName());

    return (
        <View style={styles.container}>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <>
                <Text style={styles.marginBot}>Name (nicht zwingend -> default value )</Text>
                <TextInput
                    onChangeText={onChangeText}
                    style={styles.input}
                    placeholder={text}
                    keyboardType="numeric"
                />
                <Button
                    onPress={createAndOpenList}
                    title="Erstellen"
                    color="#094fcb"
                />
            </>
        </View>
    );
}


export default function CreationDialog() {

    const navigation = useNavigation();
    return (creationDialog(navigation));
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    marginBot: {
        marginBottom: 50,
    },
    input: {
        height: 40,
        margin: 12,
        width: 280,
        padding: 5,
        borderWidth: 1,
    }
});
