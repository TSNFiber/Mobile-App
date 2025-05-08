import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';

const Fortnite = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    { id: 1, category: 'funko', image: require('../assets/images/Fortnite/funko 1.jpeg'), name: 'Fortnite Funko #1' },
    { id: 2, category: 'funko', image: require('../assets/images/Fortnite/funko 2.webp'), name: 'Fortnite Funko #2' },
    { id: 3, category: 'hoodie', image: require('../assets/images/Fortnite/hoodie 1.jpeg'), name: 'Fortnite Hoodie #1' },
    { id: 4, category: 'hoodie', image: require('../assets/images/Fortnite/hoodie 2.jpeg'), name: 'Fortnite Hoodie #2' },
    { id: 5, category: 'mousepad', image: require('../assets/images/Fortnite/mousepad 1.jpeg'), name: 'Fortnite Mousepad #1' },
    { id: 6, category: 't-shirt', image: require('../assets/images/Fortnite/T-shirt 1.webp'), name: 'Fortnite T-Shirt #1' },
    { id: 7, category: 't-shirt', image: require('../assets/images/Fortnite/Tshirt 2.jpeg'), name: 'Fortnite T-Shirt #2' },
    { id: 8, category: 't-shirt', image: require('../assets/images/Fortnite/Tshirt 3.jpeg'), name: 'Fortnite T-Shirt #3' },
  ];

  const categories = ['all', 't-shirt', 'funko', 'hoodie', 'mousepad'];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />
      
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image
          source={require('../assets/images/Fortnite/Fortnite.jpg')}
          style={styles.heroImage}
        />
        <View style={styles.heroTextContainer}>
          
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Category Filters */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.filterButton,
              selectedCategory === category && styles.activeFilter
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.filterText}>
              {category.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Product Grid */}
      <View style={styles.productGrid}>
        {filteredProducts.map((product) => (
          <TouchableOpacity 
            key={product.id}
            style={styles.productCard}
            onPress={() => {/* Add product detail navigation */}
        }>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productTitle}>{product.name}</Text>
            <View style={styles.productInfo}>
              <Text style={styles.rating}>⭐ 98%</Text>
              <Text style={styles.price}>$29.99</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  heroSection: {
    height: 300,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  heroTextContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  heroText: {
    color: '#e3d910',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    lineHeight: 30,
  },
  buyButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: 'center',
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#1a1a1a',
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 15,
    backgroundColor: '#333',
  },
  activeFilter: {
    backgroundColor: 'red',
  },
  filterText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  productCard: {
    width: '48%',
    marginBottom: 15,
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  productTitle: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    color: 'white',
    fontSize: 12,
  },
  price: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Fortnite;