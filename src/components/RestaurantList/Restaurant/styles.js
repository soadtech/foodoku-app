import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 20
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        marginTop: 10
    },
    nameRestaurant: {
        color: colors.white,
        position: 'absolute',
        bottom: 14,
        left: 14,
        zIndex: 10,
        fontWeight: 'bold'
    },
    linearGradient: {
        flex: 1,
        width: '100%',
        height: 200,
        position: 'absolute',
        borderRadius: 20,
        marginTop: 10
    },
})