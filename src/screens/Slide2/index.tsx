import { Image, View, Text, TextInput } from 'react-native'
import { styles } from './styles'
import { ButtonInterface } from '../../components/ButtonInterface'
import {MenuStackTypes} from '../../navigation/MenuStack.navigation'


export function Slide2({ navigation }: MenuStackTypes) {
    const slide = require('../../assets/vetortaylor.png')
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={slide} />
            <View style={styles.caixinha}>
                <View style={styles.box1} >
                    <Text style={styles.texto}>Login</Text>
                    <View style={styles.email}>
                        <Text style={styles.email}>E-mail:</Text>
                        <TextInput style={styles.input}></TextInput>
                        <Text style={styles.senha}>Senha:</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>

                </View>
            </View>
            <View style={styles.ball}>
               <ButtonSlide setPageI={()=>navigation.push("Slide1")}page={1} />
            </View>

        </View>
    )
}