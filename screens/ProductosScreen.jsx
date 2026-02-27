import { Image, StyleSheet, Text, View, FlatList, Modal, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'

import productos from '../assets/data/productos.json';
import { agregarAlCarrito } from '../assets/data/carrito';

export default function ProductosScreen() {

  const [productoSeleccionado, setproductoSeleccionado] = useState(null)
  const [modal, setmodal] = useState(false)

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.targeta}
      onPress={() => {
        setproductoSeleccionado(item);
        setmodal(true);
      }}
    >
      <Image source={{ uri: item.imagen }} style={styles.img} />
      <Text style={styles.titulo}>{item.nombre}</Text>
      <Text style={styles.precio}>${item.precio}</Text>
    </TouchableOpacity>
  );

  const agregarProducto = () => {
    agregarAlCarrito(productoSeleccionado);
    alert("Producto agregado al carrito");
    setmodal(false);
  };

  return (
    <View style={styles.container}>
  
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
      />

      <Modal
        visible={modal}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            {productoSeleccionado && (
              <>
                <Image
                  source={{ uri: productoSeleccionado.imagen }}
                  style={styles.modalImg}
                />

                <Text style={styles.modalTitulo}>
                  {productoSeleccionado.nombre}
                </Text>

                <Text style={styles.modalDescripcion}>
                  {productoSeleccionado.descripcion}
                </Text>

                <Text style={styles.modalPrecio}>
                  ${productoSeleccionado.precio}
                </Text>

                <Button
                  title="Agregar al carrito"
                  onPress={agregarProducto}
                />

                <Button
                  title="Cerrar"
                  color="red"
                  onPress={() => setmodal(false)}
                />
              </>
            )}

          </View>
        </View>
      </Modal>

    </View>
  )
}


// ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20
  },

  targeta: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    margin: 8,
    padding: 10,
    borderRadius: 12,
    elevation: 3
  },

  img: {
    width: '100%',
    height: 120,
    resizeMode: 'contain'
  },

  titulo: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5
  },

  precio: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
    marginTop: 5
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15
  },

  modalImg: {
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  },

  modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },

  modalDescripcion: {
    marginTop: 10
  },

  modalPrecio: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
    marginVertical: 10
  }

})