import { obtenerPosts, crearPost } from "../models/post.model.js";

const getPosts = async(req, res) => {
    try {
        const posts = await obtenerPosts();
        //res.status(200).json({posts: posts}) para el desafio 'like-me' esto tiene que venir vacio
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({error: "No se pudo obtener"});
        console.error("Error al procesar", error);
    }
}

const agregarPost = async(req, res) =>{
    try {
        const post = req.body;
        //const { post } = req.body;
        const nuevoPost = await crearPost(post);
        res.status(201).json(nuevoPost)
        //res.status(201).json({post: nuevoPost})
    } catch (error) {
        res.status(500).json({error: "No se pudo insertar"});
        console.error("Error al procesar", error);        
        
    }
}

export { getPosts, agregarPost };
