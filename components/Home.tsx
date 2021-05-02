import * as React from 'react';
import {Button, StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';

import {useNavigation} from '@react-navigation/native';

function openCurrentList() {
return (<Text style={styles.marginBot}>Zzt. gibt es keinen Einkaufszettel. Neu erstellen?</Text>);
}





export default function homeScreen() {

    const navigation = useNavigation();

    function renderHomeScreenContent(hasActiveGroceryList: boolean, groceryListName: String) {
        if (!hasActiveGroceryList) {
            return (
                <>
                    <Text style={styles.marginBot}>Zzt. gibt es keinen Einkaufszettel. Neu erstellen?</Text>
                    <Button
                        onPress={() => navigation.navigate('CreationDialog')}
                        title="Neu Erstellen"
                        color="#094fcb"
                    />
                </>
            );
        } else {
            return (
                <>
                    <Text style={styles.marginBot} >Aktuellen einkaufszettel '{groceryListName}' bearbeiten:</Text>
                    <Button
                        onPress={() => navigation.navigate('Notifications')}
                        title="Bearbeiten"
                        color="#094fcb"
                    />
                </>
            );
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            {renderHomeScreenContent(false, "MyList")}
        </View>
    );
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
    }

});
