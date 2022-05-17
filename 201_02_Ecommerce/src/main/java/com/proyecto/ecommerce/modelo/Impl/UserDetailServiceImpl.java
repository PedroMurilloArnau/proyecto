package com.proyecto.ecommerce.modelo.Impl;

import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.proyecto.ecommerce.model.beans.Usuario;
import com.proyecto.ecommerce.modelo.service.UsuarioService;

@Service
public class UserDetailServiceImpl implements UserDetailsService {

	@Autowired
	private UsuarioService uservice;
	

	
	@Autowired
	public HttpSession session;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Usuario> optionalUser = uservice.buscarPorUsername(username);
		if(optionalUser.isPresent()) {
			session.setAttribute("username", optionalUser.get().getUsername());
			Usuario usuario = optionalUser.get();
			return User.builder().username(usuario.getUsername()).password(usuario.getPassword())
					    .roles(usuario.getTipo()).build();
		}else {
			throw new UsernameNotFoundException("Usuario no encontrado");
		}
		
	}

}
