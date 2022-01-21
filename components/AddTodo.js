import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Image, TouchableOpacity, Keyboard} from 'react-native';

function AddTodo ({onInsert}) {

    const [text, setText] = useState('');

    const onPress = () => {
        onInsert(text);
        setText('');
        Keyboard.dismiss();
    };

    return (
        <View style={styles.block}>
            <TextInput 
                placeholder="할 일을 입력하세요."
                style={styles.input}
                value={text}
                onChangeText={setText}
                onSubmitEditing={onPress}
                returnKeyType='done'
            />
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.buttonStyle}>
                    <Image source={require('../assets/icons/add_white/add_white.png')}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        height: 64,
        backgroundColor: 'white',
        paddingHorizontal: 16,
        borderColor: '#bdbdbd',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
               
    },
    input: {
        fontSize: 16,
        paddingVertical: 8,
        flex:1,
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        backgroundColor: '#26a69a',
        borderRadius: 24,
    },
});

export default AddTodo;