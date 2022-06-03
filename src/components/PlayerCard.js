import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Module } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const PlayerCard = (props) => {
    
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text>{props.player}</Text>
            </View>
            <View style={styles.movable}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.medBlue,
        padding: spacing.md,
        borderRadius: spacing.sm,
        flex: 1,
    },
    itemLeft: {

    },
    square: {
        width: 24,
        height: 24,
    },
    movable: {

    },
});

export default PlayerCard;