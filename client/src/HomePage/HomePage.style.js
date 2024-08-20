import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // Change to 'center' to align items vertically at the center
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    searchBarContainer: {
        width: '100%',
        borderColor: '#fff',
        marginTop: SIZES.xSmall,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '4%',
    },
    searchBar: {
        flex: 1,
        height: '5%',
        width: '85%',
        margin: 12,
        borderWidth: 1,
        padding: '1%',
        paddingLeft: '8%',
        borderRadius: 10,
        backgroundColor: 'transparent',
        fontSize: 24,
        borderColor: COLORS.gray2,
        borderWidth: 2.3,
    },
    iconSearch: {
        position: 'absolute',
        left: '4%',
        // zIndex, the higher number lets it stack on top
        zIndex: 1,
        padding: '1%',
    },
    textContainer: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        paddingBottom: 20,
    },
    textStyle: {
        fontFamily: FONT.bold,
        fontSize: 24,
        textAlign: 'left',
    },
    userProfileImage: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 10,
        right: 10,
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: '40%',
        borderRadius: 8,
    }
})

export default styles;