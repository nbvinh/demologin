
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const SignInScreen = ({ navigation }) => {
    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser : true,
    })
    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser:true,
                isvalidPassword: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser:false
            });
        }
    }
    const handlePasswordChange = (val) => {
        if(val.trim().length <=8){
            setData({
                ...data,
                password: val,
                isvalidPassword:true
            })
        }
        else{
            setData({
                ...data,
                password: val,
                isvalidPassword:false
            });
        }
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />

            <View style={styles.header}>
                <Text style={styles.textHeader}>Welcome!</Text>
            </View>
            <View style={styles.footer}>
                <View>
                    <Text style={styles.text}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="black"
                            size={20}
                            style={{ marginRight: 10, marginTop: 10 }}
                        />
                        <TextInput
                            placeholder="Your Email"
                            style={styles.textInput}
                            onChangeText={(val) => textInputChange(val)}
                        />
                        {data.check_textInputChange ?
                            <Animatable.View animation="bounceIn">

                                <Feather

                                    name="check-circle"
                                    color="green"
                                    size={20}
                                    style={{ marginTop: 10 }}
                                />
                            </Animatable.View>
                            : null}

                    </View>
                    {data.isValidUser ? null:
                        <Animatable.View animation="bounceIn">
                            <Text style={{color:"red"}}>Email must be 4 characters long</Text>
                        </Animatable.View>
                    }


                </View>
                <View>
                    <Text style={styles.text}>Password</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="black"
                            size={20}
                            style={{ marginRight: 10, marginTop: 10 }}
                        />
                        <TextInput
                            placeholder="Your Password"
                            style={styles.textInput}
                            secureTextEntry={data.secureTextEntry ? true : false}
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="gray"
                                    size={20}
                                    style={{ marginTop: 10 }}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="gray"
                                    size={20}
                                    style={{ marginTop: 10 }}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    {data.isvalidPassword ? null:
                        <Animatable.View animation="bounceIn">
                            <Text style={{color:"red"}}>Password must be 8 characters long</Text>
                        </Animatable.View>
                    }

                </View>
            </View>

        </View>
    )
};
export default SignInScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    textHeader: {
        position: "absolute",
        bottom: 40,
        marginLeft: 20,
        fontSize: 20,
        color: "#fff",
        fontWeight: 'bold',
    },
    header: {
        flex: 1,
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
    },
    text: {
        marginTop: 20,
        fontSize: 18,
    },
    textInput: {
        flex: 1,
        paddingLeft: 5,
        color: "#05375a",
        height: 40
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
    }
})