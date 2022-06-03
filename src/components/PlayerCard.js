import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Module } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const PlayerCard = (props) => {
    
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                {/* <Text style={styles.itemText}>{props.player.index}</Text> */}
                <Text style={styles.itemText}>{props.player}</Text>
            </View>
            <View>
                <Text style={styles.itemRight}>{props.ranking}</Text>
            </View>
            {/* <View style={styles.movable}></View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.medBlue,
        padding: spacing.md,
        borderRadius: spacing.sm,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: spacing.sm,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    itemRight:{
        justifyContent: 'right'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#B8D8D8',
        marginRight: spacing.sm,
        borderRadius: 4,
    },
    itemText: {
        maxWidth: '80%',
        fontSize: fontSizes.md,
    },
    movable: {

    },
});

export default PlayerCard;