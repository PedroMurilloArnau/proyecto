package com.proyecto.ecommerce.controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.proyecto.ecommerce.model.beans.Pedido;
import com.proyecto.ecommerce.model.beans.Usuario;
import com.proyecto.ecommerce.modelo.service.PedidoService;
import com.proyecto.ecommerce.modelo.service.UsuarioService;

import ch.qos.logback.classic.Logger;

@Controller
@RequestMapping("/usuario")
public class UsuarioController {

	private final Logger LOGGER = (Logger) LoggerFactory.getLogger(UsuarioController.class);
	
	@Autowired
	private UsuarioService uservice;
	@Autowired
	private PedidoService pservice;
	
	BCryptPasswordEncoder passEncode = new BCryptPasswordEncoder();
	
	//Registrar Usuario
	@GetMapping("/registro")
	public String create() {
		return"usuario/registro";
	}
	
	@PostMapping("/save")
	public String save (Usuario usuario) {
		LOGGER.info("Usuario registro: {}", usuario);
		usuario.setTipo("USER");
		usuario.setPassword(passEncode.encode(usuario.getPassword()));//encriptacion de clave
		uservice.save(usuario);	
		return "redirect:/";
	}
	
	@GetMapping("/login")
	public String login() {
		return"usuario/login";
	}
	
	@GetMapping("/acceder")
	public String acceder(Usuario usuario, HttpSession session) {
		LOGGER.info("Acessos: {}", usuario);
		Optional<Usuario> user = uservice.buscarPorUsername(session.getAttribute("username").toString());
		
		if(user.isPresent()) {
			session.setAttribute("username", user.get().getUsername());
			if(user.get().getTipo().equals("ADMIN")) {
				return "redirect:/administrador";
			}else {
				return "redirect:/";
			}
		}else {
			LOGGER.info("El usuario no existe");
		}
		return "redirect:/";
	}
	
	@GetMapping("/compras")
	public String obtenerCompra(HttpSession session, Model model) {
		model.addAttribute("sesion", session).getAttribute("username");
		
		Usuario usuario = uservice.buscarPorUsername(session.getAttribute("username").toString()).get();
		List<Pedido> pedidos = pservice.findByUsuarios(usuario);
		model.addAttribute("pedidos", pedidos);
		return"/usuario/compras";
	}
	
	@GetMapping("/detalle/{id}")
	public String detaleCompra(@PathVariable("id") int id, HttpSession session, Model model) {
		LOGGER.info("Id del producto: {}", id);
		//Optional<Pedido> pedido = pservice.findById(id);
		Pedido pedido = pservice.findById(id).get();
		//model.addAttribute("detalles", pedido.get().getDetalle());
		model.addAttribute("detalles", pedido.getDetalle());
		//session
		model.addAttribute("sesion", session.getAttribute("username"));
		return"/usuario/detallecompra";
	}
	
	@GetMapping("/logout")
	public String cerrarSesion(HttpSession session) {
		session.removeAttribute("username");
		return"redirect:/";
	}
}
