import { useSQLiteContext } from 'expo-sqlite';

// CREAR TABLA
async function iniciarTablaRegistro(db){
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS registro (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            apellido TEXT,
            email TEXT,
            usuario TEXT,
            password TEXT
        );
    `);
}

// INSERTAR USUARIO
async function guardarRegistro(db, nombre, apellido, email, usuario, password){
    await db.runAsync(
        `INSERT INTO registro (nombre, apellido, email, usuario, password)
        VALUES (?, ?, ?, ?, ?)`,
        [nombre, apellido, email, usuario, password]
    );
}

// BUSCAR USUARIO
async function verificarLogin(db, usuario, password){
    return await db.getFirstAsync(
        `SELECT * FROM registro WHERE usuario = ? AND password = ?`,
        [usuario, password]
    );
}

// HOOK PERSONALIZADO
export function useRegistroDB(){
    const db = useSQLiteContext();

    return{
        iniciar: () => iniciarTablaRegistro(db),
        crear: (nombre, apellido, email, usuario, password) =>
            guardarRegistro(db, nombre, apellido, email, usuario, password),
        login: (usuario, password) =>
            verificarLogin(db, usuario, password),
    }
}