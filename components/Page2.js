import React, { Component } from 'react-native';

const { StyleSheet, Text, View, TouchableOpacity } = React;
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        backgroundColor: '#2196F3',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 40,
        color: '#fff'
    },
    wrapper1: {
        flex: 1
    }
});

export default class Page2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.wrapper1}>
                <View style={styles.wrapper}>
                    <Text style={styles.text}>Page 2</Text>
                    <TouchableOpacity onPress={ () => this.props.navigator.props.globalNav.push({
                            name: 'page4'
                        })}>
                        <Text style={styles.text, {fontSize: 20}}> open page 4 </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
