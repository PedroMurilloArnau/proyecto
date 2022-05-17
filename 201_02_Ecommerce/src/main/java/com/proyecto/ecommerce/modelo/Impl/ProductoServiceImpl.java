package com.proyecto.ecommerce.modelo.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.ecommerce.model.beans.Producto;
import com.proyecto.ecommerce.modelo.repository.ProductoRepository;
import com.proyecto.ecommerce.modelo.service.ProductoService;
@Service
public class ProductoServiceImpl implements ProductoService{

	@Autowired
	private ProductoRepository prepo;
	
	@Override
	public Producto save(Producto producto) {
		return prepo.save(producto);
	}

	@Override
	public Optional<Producto> buscarPorId(int id) {
		return prepo.findById(id);
	}

	@Override
	public void update(Producto producto) {
		prepo.save(producto);
	}

	@Override
	public void delete(int id) {
		prepo.deleteById(id);
	}

	@Override
	public boolean existByNombre(String nombre) {
		return prepo.existsByNombre(nombre);
	}

	@Override
	public boolean existById(int id) {
		return prepo.existsById(id);
	}

	@Override
	public List<Producto> findAll() {
		return prepo.findAll();
	}

	@Override
	public int guardar(Producto producto) {
		int filas = 0;
		try {
			prepo.save(producto);
			filas = 1;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filas;
	}

}
