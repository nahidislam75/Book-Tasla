import React from 'react';
import { View ,Text ,FlatList ,Dimensions } from 'react-native';

import styles from './CarsListStyle';
import CarsData from './CarsData';
import CarItem from '../Cars/Car';

const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList
            data={CarsData}
            renderItem={({item})=><CarItem car={item}></CarItem>}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default CarsList;