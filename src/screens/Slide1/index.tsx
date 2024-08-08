import { Image, View, Text } from 'react-native';
import { styles } from './styles';
import {ButtonInterface} from '../../components/ButtonInterface';
import {MenuStackTypes} from '../../navigation/MenuStack.navigation';

export function Slide1({navigation}:MenuStackTypes) {
   const slide = require('../../assets/bemvindoini1.png')
   return (
      <View style={styles.container}>
         <Image style={styles.img} source={slide} />

         <View style={styles.containertext}>
            <Text style={styles.text}>Carreira</Text>
         </View>

         <View style={styles.containertext}>
            <Text style={styles.text}>Álbuns</Text>
         </View>

         <View style={styles.containertext}>
            <Text style={styles.text}>Teorias</Text>
         </View>
         <View style={styles.ball}>
            
                <ButtonInterface onPressI={()=>navigation.push("Slide2")} page={2} />
            </View>
      </View>



   )
}