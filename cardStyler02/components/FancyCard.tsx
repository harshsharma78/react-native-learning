import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2023/02/Butterfly-Beach.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Anjuna Beach</Text>
          <Text style={styles.cardLabel}>Goa, India</Text>
          <Text style={styles.cardDesc}>
            Surround yourself with Goa’s pristine beaches and lush greenery for
            a once-in-a-lifetime experience.
          </Text>
          <Text style={styles.cardFooter}>30 mins away!</Text>
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
  card: {
    width: 380,
    height: 360,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
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
  cardImage: {
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000b32',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#000b32',
    fontSize: 16,
    fontWeight: 'semibold',
    marginBottom: 8,
  },
  cardDesc: {
    color: '#000b32',
    fontSize: 14,
    fontWeight: 'normal',
    marginBottom: 8,
  },
  cardFooter: {
    color: '#000b32',
    textAlign: 'right',
  },
});
