import {  StyleSheet,  Text,  View,  FlatList,  TouchableOpacity,  Alert,  Vibration,Image} from 'react-native'
import React, { useState, useCallback } from 'react'
import {  obtenerCarrito,  eliminarDelCarrito,  vaciarCarrito,  obtenerTotal, aumentarCantidad,   disminuirCantidad} from '../assets/data/carrito'
import { useFocusEffect } from '@react-navigation/native'


export default function CarritoScreen() {

  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0)
  useFocusEffect( useCallback(() => {  actualizarCarrito()  }, [])  )
  function actualizarCarrito() {
    const datos = obtenerCarrito()
    setCarrito([...datos])
    setTotal(obtenerTotal())
  }
  function aumentar(id) {
    aumentarCantidad(id)
    actualizarCarrito()
  }
  function disminuir(id) {
    disminuirCantidad(id)
    actualizarCarrito()
  }

  function eliminar(id) {
    eliminarDelCarrito(id)
    actualizarCarrito()
  }
  function vaciar() {
    vaciarCarrito()
    actualizarCarrito()
  }
  function comprar() {
    Vibration.vibrate(500)
    if (carrito.length === 0) {
      Alert.alert("Alerta amigo", "El carrito está vacío")
      return
    }
    Alert.alert("Compra realizada", "Gracias por tu compra")
    
    vaciar()
  }


  return (

    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <FlatList
        data={carrito}
        keyExtractor={(item) => item.id.toString()}

        ListEmptyComponent={
          <Text style={styles.vacio}>
            El carrito está vacío
          </Text>
        }

        renderItem={({ item }) => (

          <View style={styles.producto}>
            <View style = {styles.productoContainer}>
              <Image source={{ uri: item.imagen }} style={{ width: 100, height: 100, borderRadius: 10 }} />
              <View style={styles.infoContainer}>
                <Text style={styles.nombre}>
                  {item.nombre}
                </Text>
                <Text>
                  Precio: ${item.precio}
                </Text>
                
                 <View style={styles.cantidadContainer}>

                  <TouchableOpacity
                    style={styles.botonCantidad}
                    onPress={() => disminuir(item.id)}
                  >
                    <Text style={styles.textoCantidad}>
                      −
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.cantidad}>
                    {item.cantidad}
                  </Text>
                  <TouchableOpacity
                    style={styles.botonCantidad}
                    onPress={() => aumentar(item.id)}
                  >
                    <Text style={styles.textoCantidad}>
                      +
                    </Text>
                  </TouchableOpacity>

                </View>
                
                <Text style={styles.subtotal}>
                  Subtotal: ${item.precio * item.cantidad}
                </Text>
                <TouchableOpacity
                  style={styles.botonEliminar}
                  onPress={() => eliminar(item.id)}
                >
                  <Text style={styles.textoBoton}>
                    Eliminar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.footer}>
        <Text style={styles.total}>
          Total: ${total}
        </Text>
        <TouchableOpacity
          style={styles.botonComprar}
          onPress={comprar}
        >
          <Text style={styles.textoBoton}>
            Comprar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonVaciar}
          onPress={vaciar}
        >
          <Text style={styles.textoBoton}>
            Vaciar carrito
          </Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  },

  producto: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10
  },

  nombre: {
    fontSize: 18,
    fontWeight: "bold"
  },

  subtotal: {
    fontWeight: "bold",
    marginTop: 10
  },

  botonEliminar: {
    backgroundColor: "red",
    padding: 8,
    marginTop: 10,
    borderRadius: 5,
    alignSelf: "flex-start"
  },

  footer: {
    marginTop: 10
  },

  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },

  botonComprar: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center"
  },

  botonVaciar: {
    backgroundColor: "gray",
    padding: 12,
    borderRadius: 8,
    alignItems: "center"
  },

  textoBoton: {
    color: "white",
    fontWeight: "bold"
  },

  vacio: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 18
  },
  productoContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
  },
  infoContainer: {
    marginLeft: 15,
    flex: 1
  },

  cantidadContainer: {

    flexDirection: "row",
    alignItems: "center",
    marginTop: 10

  },
  botonCantidad: {

    backgroundColor: "green",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8

  },


  textoCantidad: {

    color: "white",
    fontSize: 20,
    fontWeight: "bold"

  },
  cantidad: {

    marginHorizontal: 15,
    fontSize: 18,
    fontWeight: "bold"

  },

})