import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { FormLabel, FormInput } from 'react-native-elements';

export default class TextInput extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired
    };

    render() {
        const { label } = this.props;
        return (
            <View>
                <FormLabel>{label}</FormLabel>
                <FormInput />
            </View>
        );
    }
}