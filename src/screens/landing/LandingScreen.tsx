import React, { useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import styles from './styles';

export default function LandingScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>

      {/* Imagem de fundo cobrindo 100% da tela */}
      <Image
        source={require('../../../assets/backgrounds/forest_cinematic.png')}
        style={styles.background}
        resizeMode="cover"
      />

      {/* Camada escura para aumentar contraste */}
      <View style={styles.overlay} />

      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>

        {/* Logo circular com glow suave */}
        <Image
          source={require('../../../assets/logo/dino_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <TouchableOpacity style={styles.primaryButton} onPress={() => {}}>
          <Text style={styles.primaryButtonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => {}}>
          <Text style={styles.secondaryButtonText}>Saiba mais</Text>
        </TouchableOpacity>

      </Animated.View>
    </View>
  );
}
