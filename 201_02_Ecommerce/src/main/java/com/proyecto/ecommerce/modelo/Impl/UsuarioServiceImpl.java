package com.proyecto.ecommerce.modelo.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.ecommerce.model.beans.Usuario;
import com.proyecto.ecommerce.modelo.repository.UsuarioRepository;
import com.proyecto.ecommerce.modelo.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService{

	@Autowired
	private UsuarioRepository urepo;
	
	@Override
	public Usuario findById(int id) {		
		return urepo.findById(id).orElse(null);
	}

	//Otra forma de buscar usuario por Id, para utilizar este metodo fuera se recupera el usuario añadiendo .get()
	@Override
	public Optional<Usuario> buscarPorId(int id) {
		return urepo.findById(id);
	}

	@Override
	public Usuario save(Usuario usuario) {
		
		return urepo.save(usuario);
	}

	@Override
	public Optional<Usuario> buscarPorUsername(String username) {
		return urepo.findByUsername(username);
	}

	@Override
	public List<Usuario> findAll() {
		return urepo.findAll();
	}	
	

}
