// Filename: index.js
// Combined code from all files
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');

    const addItem = () => {
        if (text.trim()) {
            setItems([...items, { id: Date.now().toString(), name: text.trim() }]);
            setText('');
        }
    };

    const deleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Shopping List</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    value={text}
                    style={styles.input}
                    placeholder="Add a new item"
                    onChangeText={setText}
                />
                <Button title="Add" onPress={addItem} />
            </View>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <TouchableOpacity onPress={() => deleteItem(item.id)}>
                            <Text style={styles.deleteButton}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
    list: {
        flexGrow: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#EEEEEE',
    },
    itemText: {
        fontSize: 18,
    },
    deleteButton: {
        color: 'red',
        fontSize: 16,
    },
});