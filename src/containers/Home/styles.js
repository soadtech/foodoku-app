import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingVertical: 16,
        paddingHorizontal: 20
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20
    }
})