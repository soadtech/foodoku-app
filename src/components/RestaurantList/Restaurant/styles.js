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
    },
    nameRestaurant: {
        color: colors.white,
        position: 'absolute',
        bottom: 14,
        left: 14
    }
})