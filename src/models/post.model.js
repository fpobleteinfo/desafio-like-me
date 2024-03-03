import { v4 as uuidv4 } from "uuid";
import pool from "../../db/conectionDB.js";

const obtenerPosts = async () => {
  try {
    const { rows } = await pool.query("SELECT * FROM posts");
    return rows;
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    throw error;
  }
};

const crearPost = async ({descripcion, titulo, url}) =>{
try {
  const newId = uuidv4();
  const result = await pool.query('INSERT INTO posts (id,titulo,img,descripcion, likes) VALUES ($1,$2,$3,$4,0) RETURNING *',
  [newId, titulo, url, descripcion]);
  console.log(result.rows);
  return result.rows[0];
} catch (error) {
  console.error('Error al insertar', error);
  throw error; 
  
}
}

export { obtenerPosts,crearPost };
