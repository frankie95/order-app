import * as React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";


const colors = {
    BLACK: "#000",
    WHITE: "#FFF",
    DODGER_BLUE: "#428AF8",
    SILVER: "#BEBEBE",
    TORCH_RED: "#F8262F",
    MISCHKA: "#E5E4E6"
};

class FormTextInput extends React.Component {
    render() {
        const { style, ...otherProps } = this.props;
        return (
            <TextInput
                selectionColor={colors.DODGER_BLUE}
                style={[styles.textInput, style]}
                {...otherProps}
            />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: colors.SILVER,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
    }
});

export default FormTextInput;