import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState } from 'react'

export default function ContactoScreen() {

  const [personaSeleccionada, setPersonaSeleccionada] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const contactos = [
    {
      id: 1,
      nombre: "Alejandro Duque",
      telefono: "096 413 7151",
      correo: "alejandoD@gmail.com",
      imagen: require('../assets/images/Contacto_Alejo.jpg')
    },
    {
      id: 2,
      nombre: "Marcelo Heredia",
      telefono: "098 770 1688",
      correo: "marceloH@gmail.com",
      imagen: require('../assets/images/Contacto_Marcelo.jpg')
    }
  ]

  const abrirModal = (persona) => {
    setPersonaSeleccionada(persona)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Contáctanos</Text>

      {contactos.map((item) => (
        <TouchableOpacity 
          key={item.id}
          style={styles.card}
          onPress={() => abrirModal(item)}
        >
          <Image source={item.imagen} style={styles.avatar} />
          <Text style={styles.nombre}>{item.nombre}</Text>
        </TouchableOpacity>
      ))}

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            {personaSeleccionada && (
              <>
                <Image 
                  source={personaSeleccionada.imagen}
                  style={styles.modalAvatar}
                />
                <Text style={styles.modalNombre}>
                  {personaSeleccionada.nombre}
                </Text>
                <Text>📞 {personaSeleccionada.telefono}</Text>
                <Text>📧 {personaSeleccionada.correo}</Text>

                <TouchableOpacity
                  style={[styles.card, { marginTop: 20 }]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={{ textAlign: 'center' }}>Cerrar</Text>
                </TouchableOpacity>
              </>
            )}

          </View>
        </View>
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#79bed1',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    width: '85%',
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center'
  },
  modalAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15
  },
  modalNombre: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  }
})