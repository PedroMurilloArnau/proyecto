package com.proyecto.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.proyecto.ecommerce.model.beans.Pedido;
import com.proyecto.ecommerce.model.beans.Producto;
import com.proyecto.ecommerce.modelo.service.PedidoService;
import com.proyecto.ecommerce.modelo.service.ProductoService;
import com.proyecto.ecommerce.modelo.service.UsuarioService;

@Controller
@RequestMapping("/administrador")
public class AdministradorController {

	@Autowired
	private ProductoService pservice;
	
	@Autowired
	private UsuarioService uservice;
	
	@Autowired
	private PedidoService pedidoservice;
	
	@GetMapping("")
	public String home(Model model) {//redireccionamos a home
		
		List<Producto> productos = pservice.findAll();
		model.addAttribute("productos", productos);//eviamos la lista de productos
		
		return "administrador/home";
	}
	
	@GetMapping("/usuarios")
	public String usuarios(Model model) {
		model.addAttribute("usuarios", uservice.findAll());
		return "administrador/usuarios";
	}
	
	@GetMapping("/pedidos")
	public String pedidos (Model model) {
		model.addAttribute("pedidos", pedidoservice.findAll());
		return "administrador/pedidos";
	}
	@GetMapping("/detalle/{id}")
	public String detalle(@PathVariable("id") int id, Model model) {
		Pedido pedido = pedidoservice.findById(id).get();
		model.addAttribute("detalles", pedido.getDetalle());
		return "administrador/detallepedido";
	}
	
}
