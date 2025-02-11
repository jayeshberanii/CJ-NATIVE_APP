import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@/src/graphql/queries/getProducts';
import ProductCard from '@/src/components/ProductCard';

const ProductsScreen = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <ActivityIndicator size="large" style={styles.loader} />;
  if (error) return <Text style={styles.error}>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      {/* <Text className=' text-white text-3xl font-bold mx-6 mb-2' style={styles.header}>Products</Text> */}
      <FlatList
        data={data.products.resultList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            image={item.imageLink}
            brand={item.brand}
            advertiserName={item.advertiserName}
            link={item.link}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ProductsScreen;
