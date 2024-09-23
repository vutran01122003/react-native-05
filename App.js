import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from './src/screens/ProductScreen';
import ProductColorScreen from './src/screens/ProductColorScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Product'>
                    <Stack.Screen name='Product' component={ProductScreen} />
                    <Stack.Screen name='ProductColor' component={ProductColorScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
