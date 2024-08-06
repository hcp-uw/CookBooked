import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.xLarge,
        marginBottom: SIZES.xLarge,
        marginLeft: SIZES.medium,
        marginRight: SIZES.medium,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: SIZES.small,
    },
    searchBarContainer: {
        width: '100%',
        borderColor: '#fff',
        marginTop: SIZES.xSmall,
        flexDirection: 'row',
        alignItems: 'center',
        paddinLeft: '4%',
    },
    searchBar: {
        flex: 1,
        height: '5%',
        width: '85%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
    headerTitle: {
        fontSize: SIZES.xxLarge,
        fontFamily: FONT.bold,
        color: COLORS.black,
        paddingLeft: SIZES.large,
        fontWeight: '700',       // also add to theme.js to make it as a constant in the future 
    },
    headerBtn: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium,
        color: COLORS.gray,
    },
    cardsContainer: {
        marginTop: SIZES.medium,
        gap: SIZES.small,
    },
    userProfileImage: {
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        paddingRight: 70,
    }
});

export default styles;