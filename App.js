import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [mood, setMood] = useState(5);
  const [emotionText, setEmotionText] = useState('Нейтрально 😐');
  const [emotionColor, setEmotionColor] = useState('#FF9500'); 

  const updateMood = (newMood) => {
    if (newMood < 1 || newMood > 10) return;

    setMood(newMood);

    if (newMood <= 3) {
      setEmotionText('Сумно 😔');
      setEmotionColor('#FF3B30'); 
    } else if (newMood >= 4 && newMood <= 7) {
      setEmotionText('Нейтрально 😐');
      setEmotionColor('#FF9500');
    } else if (newMood >= 8) {
      setEmotionText('Весело 😄');
      setEmotionColor('#34C759');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Мій настрій</Text>
        
        <View style={[styles.moodCircle, { borderColor: emotionColor }]}>
          <Text style={[styles.moodValue, { color: emotionColor }]}>{mood}</Text>
        </View>
        
        <Text style={[styles.emotion, { color: emotionColor }]}>
          {emotionText}
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.buttonMinus, mood <= 1 && styles.buttonDisabled]} 
            onPress={() => updateMood(mood - 1)}
            disabled={mood <= 1}
          >
            <Text style={styles.buttonText}>➖ Менше</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.buttonPlus, mood >= 10 && styles.buttonDisabled]} 
            onPress={() => updateMood(mood + 1)}
            disabled={mood >= 10}
          >
            <Text style={styles.buttonText}>Більше ➕</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 40,
    borderRadius: 24,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1A202C',
    marginBottom: 30,
    letterSpacing: 0.5,
  },
  moodCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#FAFAFA',
  },
  moodValue: {
    fontSize: 56,
    fontWeight: '900',
  },
  emotion: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 15, 
  },
  button: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonMinus: {
    backgroundColor: '#FF4757',
  },
  buttonPlus: {
    backgroundColor: '#2ED573', 
  },
  buttonDisabled: {
    backgroundColor: '#DFE4EA', 
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase', 
    letterSpacing: 1,
  },
});