import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>more...</Text>
        </View>
      </ScrollView>
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
  elevatedCard: {
    backgroundColor: '#cad5e2',
    elevation: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: '#333',
  },
});
