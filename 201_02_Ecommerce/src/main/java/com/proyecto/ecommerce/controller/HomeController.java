package com.proyecto.ecommerce.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.servlet.http.HttpSession;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.proyecto.ecommerce.model.beans.DetallePedido;
import com.proyecto.ecommerce.model.beans.Pedido;
import com.proyecto.ecommerce.model.beans.Producto;
import com.proyecto.ecommerce.model.beans.Usuario;
import com.proyecto.ecommerce.modelo.service.DetallePedidoService;
import com.proyecto.ecommerce.modelo.service.PedidoService;
import com.proyecto.ecommerce.modelo.service.ProductoService;
import com.proyecto.ecommerce.modelo.service.UsuarioService;

import ch.qos.logback.classic.Logger;

@Controller
@RequestMapping("/")
public class HomeController {
	
	private final Logger LOGGER = (Logger) LoggerFactory.getLogger(HomeController.class);
	
	@Autowired
	private ProductoService proservice;
	
	@Autowired
	private UsuarioService uservice;
	
	@Autowired
	private PedidoService pedservice;
	
	@Autowired
	private DetallePedidoService detpedservice;

	//para almacenar los detalles del pedido, añadimos todos los productos para comprar
	List<DetallePedido> detalles = new ArrayList<DetallePedido>();
	
	//Almacenamos el pedido
	Pedido pedido = new Pedido();
	
	@GetMapping("")
	public String home(Model model, HttpSession session) {
		LOGGER.info("Sesion del usuario: {}", session.getAttribute("username"));
		model.addAttribute("productos", proservice.findAll());
		model.addAttribute("sesion", session.getAttribute("username"));
		
		return "usuario/home";
	}
	
	//de momento nos lleva del boton ver producto a la vista
	@GetMapping("/productohome/{id}")
	public String productoHome(@PathVariable("id") int id, Model model) {
		LOGGER.info("Id enviado como parametro {}", id);
		Producto producto = new Producto();
		Optional<Producto> productoOptional = proservice.buscarPorId(id);
		producto = productoOptional.get();//obtenemos el producto de la bbdd
		model.addAttribute("producto", producto);
		return "usuario/productohome";
	}
	
	@PostMapping("/cart")
	public String addCart (@RequestParam("id") Integer id, @RequestParam("cantidad") Integer cantidad, Model model) {
		DetallePedido detallePedido = new DetallePedido();
		Producto producto = new Producto();
		double sumaTotal = 0;
		
		Optional<Producto> optionalProducto = proservice.buscarPorId(id);//busco el producto
		LOGGER.info("Producto añadido: {}", optionalProducto.get());
		LOGGER.info("Cantidad: {}", cantidad);
		producto = optionalProducto.get();//añado el producto obtenido desde la bbdd
		
		detallePedido.setCantidad(cantidad);
		detallePedido.setPrecio(producto.getPrecio());
		detallePedido.setNombre(producto.getNombre());
		detallePedido.setTotal(producto.getPrecio()*cantidad);
		detallePedido.setProducto(producto);
		
		//Validar que el producto no se añada 2 veces
		Integer idProducto = producto.getId();
		boolean ingresado = detalles.stream().anyMatch(p -> p.getProducto().getId() == idProducto) ;//funcion lambda para verificar si el id se encuentra en la lista
		if(!ingresado) {
			detalles.add(detallePedido);//añadimos cada producto a la lista si no existe
		}/*DARLE UNA VUELTAelse {
			detallePedido.setCantidad(detallePedido.getCantidad()+producto.getCantidad());
			detalles.add(detallePedido);
		}DARLE UNA VUELTA*/
		
		sumaTotal = detalles.stream().mapToDouble(dt->dt.getTotal()).sum();//nos va sumando el total de todos los productos de la lista
		pedido.setTotal(sumaTotal);//añadimos el total al pedido
		
		//pasamos la informacion a la vista
		model.addAttribute("cart", detalles);//le pasamos todos los productos que el usuario ha ido añadiendo
		model.addAttribute("pedido", pedido);//pasamos el pedido entero
		
		return"/usuario/carrito";
	}
	
	//Quitar producto del carrito
	@GetMapping("/delete/cart/{id}")
	public String deleteProductCart(@PathVariable("id") int id, Model model) {
		//Lista nueva de productos
		List<DetallePedido> pedidosNuevos = new ArrayList<DetallePedido>(); 
		//Como mi lista es global elimino el producto
		for(DetallePedido detallePedido: detalles) {
			if(detallePedido.getProducto().getId() != id) {
				pedidosNuevos.add(detallePedido);
			}
		}
		//ponemos la lista actualizada
		detalles=pedidosNuevos;
		double sumaTotal=0;
		sumaTotal = sumaTotal = detalles.stream().mapToDouble(dt->dt.getTotal()).sum();//Recalculo el Total
		pedido.setTotal(sumaTotal);//Añado el total al pedido
		model.addAttribute("cart", detalles);	
		model.addAttribute("pedido", pedido);
		
		return "usuario/carrito";
	}
	
	// para llevar el carrito desde cualquier lugar de la app
	@GetMapping("/getCart")
	public String getCart(Model model, HttpSession session) {
		model.addAttribute("cart", detalles);	
		model.addAttribute("pedido", pedido);
		model.addAttribute("sesion", session).getAttribute("username");
		return "/usuario/carrito";
	}
	
	@GetMapping("/pedido")
	public String pedido(Model model, HttpSession session) {
		
		//Usuario usuario = uservice.buscarPorId(1).get();
		//EL usuario se registra con usrename y pass
		Usuario usuario = uservice.buscarPorUsername(session.getAttribute("username").toString()).get();
		
		model.addAttribute("cart", detalles);	
		model.addAttribute("pedido", pedido);
		model.addAttribute("usuario", usuario);
		return "usuario/resumenpedido";
	}
	
	@GetMapping("/savePedido")
	public String savePedido (HttpSession session) {
		Date fechaCreacion = new Date();
		pedido.setFechaCreacion(fechaCreacion);
		pedido.setNumero(pedservice.generarNumeroPedido());
		//Temporal hasta hacer el usuario
		Usuario usuario = uservice.buscarPorUsername(session.getAttribute("username").toString()).get();
		//Usuario usuario = uservice.buscarPorId(1).get();
		pedido.setUsuario(usuario);
		
		pedservice.save(pedido);
		
		//guardar detalles
		for(DetallePedido dp: detalles) {
			dp.setPedido(pedido);
			detpedservice.save(dp);
		}
		
		//limpiar datos del carrito
		pedido = new Pedido();
		detalles.clear();
		
		return"redirect:/";
	}
	
	@PostMapping("/search")
	public String searchProduct (@RequestParam String nombre, Model model) {
		LOGGER.info("Nombre del producto: {}", nombre);
		//Obtengo todos los productos, hago un stream y con una funcion lambdale pasamos lo que queremos hacer y a 
		//traves de una funcion anonima traemos el nombre de producto y comparamos. Para finalizar transformamos a 
		//lista con collect
		List<Producto> productos = proservice.findAll().stream().filter(
								   p -> p.getNombre().contains(nombre)).collect(Collectors.toList());
		model.addAttribute("productos", productos);
		return"usuario/home";
	}
}
