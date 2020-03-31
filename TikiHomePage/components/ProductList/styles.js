import { Text, View, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({

    container:{

        height: 280,
        marginTop: 10,
        backgroundColor: 'white',
        alignItems: 'center'
    },

    header:{
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 360,
        height: 45,

    },

    productContainer:{

        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        width: 75,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',

    },

    productImg:{
        width: 100,
        height: 65
    },

    productName:{
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
    }

}
)

export { styles, }