package com.proyecto.ecommerce.modelo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.proyecto.ecommerce.model.beans.Usuario;

@Service
public interface UsuarioService {
	
	Optional<Usuario> buscarPorId(int id);
	Optional<Usuario> buscarPorUsername(String username);
	Usuario findById(int id);
	Usuario save (Usuario usuario);
	List<Usuario> findAll();

}
