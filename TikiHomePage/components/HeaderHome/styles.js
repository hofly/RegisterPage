import { Text, View, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({

    container:{
        height: 310,
        marginTop:0,
        backgroundColor: 'white'
    },

    headerImg:{
        width: 360,
        height: 215,
        position: 'absolute'


    },

    headerCartContainer:{
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    tripleSpan:{
        marginLeft: 5,
        width: 30,
        height: 4,
        marginTop: 4,
        backgroundColor: 'white'

    },

    tiki:{
        marginTop: 3,
        width: 45,
        height: 45
    },

    cart:{
        marginTop: 10,
        marginRight: 5,
        width: 35,
        height: 35

    },

    inputSearch:{
        backgroundColor: 'white',
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        width: 350,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },

    searchIcon:{
        marginLeft: 15,
        width: 28,
        height: 28

    },

    inputTextContainer:{
        //backgroundColor: 'yellow',
        marginLeft:10,
        width: 290,
        height: 40,


    },

    inputText:{

        fontSize: 16,
        color: 'black',
        //fontWeight:'bold'
    },

    advertisement:{

        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        width: 350,
        height: 120,

    },

    advertiseImg:{
        width: 350,
        height: 120,
        borderRadius: 10,
    },

    quickLinks:{
        width: 360,
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    link:{
        width: 65,
        height: 75,
        alignItems: 'center',
    },

    linkImg:{
        width: 60,
        height: 60,
    },

    quickLinksText:{

        fontSize: 14,

    }

}
)

export { styles, }