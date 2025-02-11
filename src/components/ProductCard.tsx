import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

interface ProductProps {
  title: string;
  image: string;
  brand: string;
  advertiserName: string;
  link: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, image, brand, advertiserName, link }) => {
  return (
    <TouchableOpacity className=' bg-zinc-800' onPress={() => Linking.openURL(link)} style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.brand}>{brand}</Text>
        <Text style={styles.advertiser}>{advertiserName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  details: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  brand: {
    fontSize: 14,
    color: '#fff',
  },
  advertiser: {
    fontSize: 12,
    color: '#999',
  },
});

export default ProductCard;
