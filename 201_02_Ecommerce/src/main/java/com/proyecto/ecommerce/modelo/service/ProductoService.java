package com.proyecto.ecommerce.modelo.service;

import java.util.List;
import java.util.Optional;
import com.proyecto.ecommerce.model.beans.Producto;


public interface ProductoService {

	public Producto save(Producto producto);
	public Optional<Producto> buscarPorId(int id);//nos da la opcion de poder validar el objeto, similar a buscar uno
	public void update(Producto producto);//mas adelante cambiar para añadir mensaje en caso de exito o error
	public void delete(int id);
	public List<Producto> findAll();
	//metodos para probar distintas cosas
	boolean existByNombre (String nombre);
	boolean existById (int id);
	public int guardar (Producto producto);
}
