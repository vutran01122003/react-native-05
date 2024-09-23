import { Button, Image, SafeAreaView, Text, View } from 'react-native-web';

function ProductScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
            <View>
                <Image source={require('../../assets/vs_blue.png')} />
            </View>

            <View
                style={{
                    width: '100%'
                }}
            >
                <View style={{ marginTop: '15px' }}>
                    <Text style={{ fontSize: '15px', fontWeight: 600 }}>Điện Thoại Vsmart Joy 3 - Hàng Chính Hãng</Text>

                    <View style={{ marginTop: '15px', flexDirection: 'row', gap: '40px' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../assets/star.png')} />
                            <Image source={require('../../assets/star.png')} />
                            <Image source={require('../../assets/star.png')} />
                            <Image source={require('../../assets/star.png')} />
                            <Image source={require('../../assets/star.png')} />
                        </View>

                        <View>(Xem 828 đánh giá)</View>
                    </View>
                </View>

                <View style={{ marginTop: '15px', flexDirection: 'row', gap: '50px' }}>
                    <Text style={{ fontSize: '18px', fontWeight: 700, whiteSpace: 'nowrap' }}>1.790.000 đ</Text>
                    <Text style={{ textDecoration: 'line-through', whiteSpace: 'nowrap' }}>1.790.000 đ</Text>
                </View>

                <View style={{ marginTop: '15px', flexDirection: 'row', gap: '10px' }}>
                    <Text style={{ fontSize: '16px', fontWeight: 700, color: 'red', whiteSpace: 'nowrap' }}>
                        Ở ĐÂU RẺ HƠN HOÀN TIỀN
                    </Text>
                    <Image source={require('../../assets/Group 1.png')} />
                </View>

                <View
                    style={{
                        marginTop: '15px',
                        border: '1px solid gray',
                        borderRadius: '5px',
                        padding: '8px',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                        cursor: 'pointer',
                        userSelect: 'none'
                    }}
                    onTouchEnd={() => navigation.navigate('ProductColor')}
                >
                    <Text style={{ color: '#333', fontWeight: 600, flex: 1, textAlign: 'center' }}>4 MÀU-CHỌN MÀU</Text>
                    <Image source={require('../../assets/Vector.png')} />
                </View>
            </View>

            <View
                style={{
                    marginTop: 'auto',
                    boxShadow: '0 0 3px #333',
                    borderRadius: '5px',
                    padding: '15px',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    background: 'red',
                    width: '100%'
                }}
            >
                <Text style={{ color: '#fff', fontWeight: 700 }}>CHỌN MUA</Text>
            </View>
        </SafeAreaView>
    );
}

export default ProductScreen;
