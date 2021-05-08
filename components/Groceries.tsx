import * as React from 'react';
import {Button, StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';

import {useNavigation} from '@react-navigation/native';

import {collectionName} from "../constants/constants"
import {getLatestCollectionFor} from "./Firebase/firebase";
import firebase from "firebase";
import GroceryList from "../types/GroceryList";


export default function groceryList() {

    const navigation = useNavigation();

    const [text, onChangeText] = React.useState("");


    function getLatestGroceryListFromFirestore() {

        let docRef = firebase.firestore().collection(collectionName).doc("hackel-list");
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", "asdasd" + doc.data());
                let groceryList: any = doc.data() as GroceryList;
                onChangeText(groceryList.content);

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                onChangeText("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
            onChangeText("No such document!");
        });


    }


    return (
        <View style={styles.container}>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <Text style={styles.marginBot}>List: {text} /endlist</Text>
            <Button
                //onPress={() => navigation.navigate('Home')}
                onPress={getLatestGroceryListFromFirestore}
                title="Speichern"
                color="#094fcb"
            />
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
