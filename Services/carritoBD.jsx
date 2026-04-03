import { useSQLiteContext } from 'expo-sqlite';

// TABLA HISTORIAL DE COMPRAS
async function iniciarTablaRegistro(db) {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS historial_compras (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      producto TEXT NOT NULL,
      cantidad INTEGER NOT NULL,
      valor_unitario REAL NOT NULL,
      nombre_usuario TEXT NOT NULL,
      fecha_compra TEXT NOT NULL
    );
  `);
}

// GUARDAR PRODUCTO COMPRADO EN HISTORIAL
async function guardarRegistro(db, producto, cantidad, valor_unitario, nombre_usuario, fecha_compra) {
  await db.runAsync(
    `INSERT INTO historial_compras (producto, cantidad, valor_unitario, nombre_usuario, fecha_compra)
     VALUES (?, ?, ?, ?, ?)`,
    [producto, cantidad, valor_unitario, nombre_usuario, fecha_compra]
  );
}

// GUARDAR TODA LA COMPRA
async function guardarCompraCompleta(db, carrito, nombre_usuario) {
  const fecha_compra = new Date().toISOString();

  for (const item of carrito) {
    await db.runAsync(
      `INSERT INTO historial_compras (producto, cantidad, valor_unitario, nombre_usuario, fecha_compra)
       VALUES (?, ?, ?, ?, ?)`,
      [
        item.nombre,
        item.cantidad,
        item.precio,
        nombre_usuario,
        fecha_compra
      ]
    );
  }
}

// VER HISTORIAL DEL USUARIO
async function verHistorial(db, nombre_usuario) {
  return await db.getAllAsync(
    `SELECT * FROM historial_compras
     WHERE nombre_usuario = ?
     ORDER BY id DESC`,
    [nombre_usuario]
  );
}

export function useCarritoDB() {
  const db = useSQLiteContext();

  return {
    iniciar: () => iniciarTablaRegistro(db),
    crear: (producto, cantidad, valor_unitario, nombre_usuario, fecha_compra) =>
      guardarRegistro(db, producto, cantidad, valor_unitario, nombre_usuario, fecha_compra),
    guardarCompra: (carrito, nombre_usuario) =>
      guardarCompraCompleta(db, carrito, nombre_usuario),
    verHistorial: (nombre_usuario) => verHistorial(db, nombre_usuario),
  };
}