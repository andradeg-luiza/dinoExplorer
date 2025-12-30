import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Tamanho proporcional da logo baseado na largura da tela
const LOGO_SIZE = width * 0.65;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // fundo preto para reforçar o clima cinematográfico
  },

  background: {
    // Garante que a imagem de fundo cubra 100% da tela real
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,

    // Isso evita barras cinzas em aparelhos com proporções diferentes
    minHeight: height,
  },

  overlay: {
    // Camada escura sobre o fundo para aumentar contraste
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  // 🦖 LOGO CIRCULAR COM GLOW SUAVE (sem círculo amarelo atrás)
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    marginBottom: 40,

    // recorta o quadrado e deixa a logo circular
    borderRadius: LOGO_SIZE / 1,
    overflow: 'hidden',

    // glow suave ao redor
    shadowColor: '#d4af37',
    shadowOpacity: 0.6,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 0 },

    elevation: 10, // sombra no Android
  },

  primaryButton: {
    backgroundColor: 'rgba(0,0,0,0.65)',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#d4af37', // dourado suave
    marginBottom: 16,
  },

  primaryButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
  },

  secondaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fff',
  },

  secondaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
