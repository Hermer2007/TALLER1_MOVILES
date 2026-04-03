import { useSQLiteContext } from 'expo-sqlite';

// CREAR TABLA
async function iniciarTablaRegistro(db){
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS carrito (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            producto TEXT,
            cantidad TEXT,
            valor_unitario DECIMAL(10, 2) ,
            nombre_usuario TEXT,
        );
    `);
}

// INSERTAR producto
async function guardarRegistro(db, producto, cantidad, valor_unitario, nombre_usuario){
    await db.runAsync(
        `INSERT INTO carrito (producto, cantidad, valor_unitario, nombre_usuario)
        VALUES (?, ?, ?, ?)`,
        [producto, cantidad, valor_unitario, nombre_usuario]
    );
}

// BUSCAR producto
async function verCarrito(db, nombre_usuario){
    return await db.getFirstAsync(
        `SELECT * FROM carrito WHERE nombre_usuario = ?`,
        [nombre_usuario]
    );
}

// HOOK PERSONALIZADO
export function useCarritoDB(){
    const db = useSQLiteContext();

    return{
        iniciar: () => iniciarTablaRegistro(db),
        crear: (producto, cantidad, valor_unitario, nombre_usuario) => guardarRegistro(db, producto, cantidad, valor_unitario, nombre_usuario),
        ver: (nombre_usuario) => verCarrito(db, nombre_usuario),
    }
}