import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCarritoDB } from '../Services/carritoBD';

export default function HistoriaScreen() {
  const [historial, setHistorial] = useState([]);
  const { iniciar, verHistorial } = useCarritoDB();

  const nombre_usuario = 'alejandro';

  useEffect(() => {
    async function init() {
      await iniciar();
      await cargarHistorial();
    }

    init();
  }, []);

  useFocusEffect(
    useCallback(() => {
      cargarHistorial();
    }, [])
  );

  async function cargarHistorial() {
    try {
      const data = await verHistorial(nombre_usuario);
      setHistorial(data || []);
      console.log('historial => ', data);
    } catch (error) {
      console.log('error historial => ', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Historial de compras</Text>

      <FlatList
        data={historial}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.vacio}>No hay compras realizadas</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nombre}>{item.producto}</Text>
            <Text>Cantidad: {item.cantidad}</Text>
            <Text>Valor unitario: ${Number(item.valor_unitario).toFixed(2)}</Text>
            <Text>Total: ${(Number(item.valor_unitario) * Number(item.cantidad)).toFixed(2)}</Text>
            <Text>Fecha: {item.fecha_compra}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15
  },
  card: {
    backgroundColor: '#9ddbe9c8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  vacio: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 18
  }
});