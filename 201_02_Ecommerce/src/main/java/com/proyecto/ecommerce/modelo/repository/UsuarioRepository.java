package com.proyecto.ecommerce.modelo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.proyecto.ecommerce.model.beans.Usuario;

@Service
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

	Optional<Usuario> findByUsername(String username);
	boolean existsByNombre(String nombre);
	boolean existsById(int id);
}
