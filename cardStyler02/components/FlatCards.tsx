import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.cardHeading}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.cardHeading}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.cardHeading}>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 4,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#50dbb4',
  },
  cardThree: {
    backgroundColor: '#5da3fa',
  },
  cardHeading: {
    color: '#fff',
  },
});
