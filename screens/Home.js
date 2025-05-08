import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';

const Home = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const carouselImages = [
    require('../assets/images/Home/3.webp'),
    require('../assets/images/Home/2.webp'),
    require('../assets/images/Home/1.webp'),
  ];

  const games = [
    { id: 1, name: 'Fortnite', image: require('../assets/images/Home/Fortnite.jpg'), route: 'Fortnite' },
    { id: 2, name: 'Split Fiction', image: require('../assets/images/Home/Split fiction.avif') },
    { id: 3, name: 'Apex Legends', image: require('../assets/images/Home/apex.jpeg') },
    { id: 4, name: 'GTA V', image: require('../assets/images/Home/GTA.jpg') },
    { id: 5, name: 'Genshin Impact', image: require('../assets/images/Home/Genshin.jpeg') },
    { id: 6, name: 'League of Legends', image: require('../assets/images/Home/LOL.jpeg') },
  ];

  const handleCarousel = (direction) => {
    let newIndex = currentIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % carouselImages.length;
    } else {
      newIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />
      
      {/* Hero Section */}
      <View style={styles.heroContent}>
        <Image 
          source={require('../assets/images/Home/Header.jpg')}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.slogan}>
            LEVELUP Your Style{'\n'}
            Gear Up Like a Gamer
          </Text>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Product Carousel */}
      <View style={styles.carouselContainer}>
        <Image source={carouselImages[currentIndex]} style={styles.carouselImage} />
        <View style={styles.carouselControls}>
          <TouchableOpacity 
            style={styles.carouselButton}
            onPress={() => handleCarousel('prev')}
          >
            <Text style={styles.carouselButtonText}>‹</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.carouselButton}
            onPress={() => handleCarousel('next')}
          >
            <Text style={styles.carouselButtonText}>›</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Games Grid */}
      <View style={styles.gamesSection}>
        <Text style={styles.sectionTitle}>Browse by Games</Text>
        <View style={styles.gamesGrid}>
          {games.map((game) => (
            <TouchableOpacity 
              key={game.id}
              style={styles.gameCard}
              onPress={() => game.route && navigation.navigate(game.route)}
            >
              <Image source={game.image} style={styles.gameImage} />
              <View style={styles.gameTitleContainer}>
                <Text style={styles.gameTitle}>{game.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  heroContent: {
    height: 400,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  slogan: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 34,
  },
  buyButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  carouselContainer: {
    height: 300,
    marginVertical: 20,
    position: 'relative',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  carouselControls: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    top: '50%',
    paddingHorizontal: 20,
  },
  carouselButton: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  gamesSection: {
    padding: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  gamesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gameCard: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gameImage: {
    width: '100%',
    height: 150,
  },
  gameTitleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
  },
  gameTitle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Home;