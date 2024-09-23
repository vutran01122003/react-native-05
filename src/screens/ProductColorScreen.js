import { useRef, useState } from 'react';
import { Image, Text, View } from 'react-native-web';

function ProductColorScreen() {
    const [color, setColor] = useState('vs_blue.png');
    const imgRef = useRef();
    const onUpdateImage = (color) => {
        imgRef.current.source = require(`../../assets/${color}.png`);
    };

    return (
        <View style={{ width: '100%' }}>
            <View style={{ padding: '15px', flexDirection: 'row', gap: '20px' }}>
                <Image ref={imgRef} source={require(`../../assets/vs_blue.png`)} />
                <Text style={{ fontSize: '15px', fontWeight: 600 }}>Điện Thoại Vsmart Joy 3 - Hàng Chính Hãng</Text>
            </View>

            <View style={{ width: '100%' }}>
                <Text>Chọn một màu bên dưới</Text>
                <View style={{ justifyContent: 'center', justifyContent: 'center', gap: '10px' }}>
                    <View style={{ height: '80px', width: '80px', background: 'silver' }}></View>
                    <View style={{ height: '80px', width: '80px', background: 'red' }}></View>
                    <View style={{ height: '80px', width: '80px', background: 'black' }}></View>
                    <View style={{ height: '80px', width: '80px', background: 'blue' }}></View>
                </View>
            </View>
        </View>
    );
}

export default ProductColorScreen;
