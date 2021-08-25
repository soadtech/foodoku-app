import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btnCart: {
        backgroundColor: colors.black,
        padding: 12,
        borderRadius: 100
    }
})