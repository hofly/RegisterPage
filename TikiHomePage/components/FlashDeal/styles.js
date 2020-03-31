import { Text, View, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({

    container:{

        height: 270,
        marginTop: 10,
        backgroundColor: 'rgba(36,93,176,0.8)'
    },

    headerContainer:{
        //backgroundColor: 'yellow',
        width: 360,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    timeContainer:{

        width: 250,
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(37,90,166,1)',

    },

    flashDealImg:{
        marginLeft: 5,
        marginRight: 10,
        width: 120,
        height: 22,
    },

    time:{
        marginLeft: 5,
        width: 25,
        height: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(21,65,130,1.0)',

    },

    timeText:{
        fontSize: 14,
        color: 'white'
    },

    colon:{
        marginLeft: 5,
        fontSize: 14,
        color: 'white'
    },

    watchMoreContainer:{

        height: 35,
        alignSelf:'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },

    watchMore:{

        fontSize: 16,
        color: 'white'
    },

    flashDealContent:{
        width: 360,
        height: 220,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 0,
    },


    flashDealCategories:{
        marginLeft: 10,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },

    categoryText:{
        marginLeft: 10,
        marginRight: 10,
        fontSize: 16,
        color: 'black'
    },

    itemContainer:{
        marginLeft: 10,
        width: 105,
        height: 150,
        alignItems: 'center',
    },

    itemImg:{
        width: 104,
        height: 104,
    },

    price:{
        marginTop: 5,
        fontSize: 20,
    }
}
)

export { styles, }