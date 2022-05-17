package com.proyecto.ecommerce.controller;

import java.io.IOException;
import java.util.Optional;

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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import com.proyecto.ecommerce.model.beans.Producto;
import com.proyecto.ecommerce.model.beans.Usuario;
import com.proyecto.ecommerce.modelo.service.ProductoService;
import com.proyecto.ecommerce.modelo.service.UploadFileService;
import com.proyecto.ecommerce.modelo.service.UsuarioService;

import ch.qos.logback.classic.Logger;

@Controller
@RequestMapping("/productos")
public class ProductoController {	

	@Autowired
	private ProductoService pservi;
	
	@Autowired
	private UploadFileService upload;
	
	@Autowired
	private UsuarioService uservice;
	
	//Creo una variable de tipo logger para las pruebas en el back
	private final Logger LOGGER = (Logger) LoggerFactory.getLogger(ProductoController.class);//Con Logger da más detalle que yb syso
	
	@GetMapping("")
	public String show(Model model) {//Model lleva info desde el back a la vista
		model.addAttribute("productos", pservi.findAll());
		LOGGER.info("kajshdfkjhdsaf {}", pservi.findAll());
		return "productos/show";
	}
	
	@GetMapping("/create")
	public String create() {
		return "productos/create";
	}
	
	@SuppressWarnings("unused")
	@PostMapping("/save")
	public String save(Producto producto, RedirectAttributes redirectAttrs,@RequestParam("img") MultipartFile file, HttpSession session) throws IOException {//le indicamos que tiene que recuperar la imagen del campo img del formulario
		LOGGER.info("Este es el objeto producto {}", producto);
		
		Usuario usuario = uservice.buscarPorUsername(session.getAttribute("username").toString()).get();
		//Usuario usuario = new Usuario(1,"","","","","","","" );//Creo un primer usuario
		producto.setUsuario(usuario);
		
		//imagen
		if((Integer)producto.getId()!=null) {//la primera vez que se crea un producto, el id viene a null, como int es un dato primitivo, me obliga a castearlo, ya que un int no puede ser null
			String nombreImagen = upload.saveImage(file); //Retorna el nombre de la imagen
			producto.setImagen(nombreImagen);//añado a producto el nombre de la imagen
		}else {
			
		}
		//pservi.save(producto);
		
		pservi.guardar(producto);
		if (pservi.guardar(producto)==1)
			redirectAttrs.addFlashAttribute("mensaje", "Producto añadido").addFlashAttribute("clase", "success");
		else 
			redirectAttrs.addFlashAttribute("mensaje", "[ERROR]").addFlashAttribute("clase", "danger");
		return "redirect:/productos";
	}
	
	@GetMapping("/edit/{id}")
	public String edit(@PathVariable("id") int id, Model model) {
		Producto producto = new Producto();
		Optional<Producto> optionalProducto = pservi.buscarPorId(id);//porque nos devuelve un optional al realizar la busqueda
		producto = optionalProducto.get();
		
		LOGGER.info("Producto buscado: {}", producto);
		model.addAttribute("producto", producto);
		
		return "productos/edit";
	}
	
	@PostMapping("/update")
	public String update(Producto producto, @RequestParam("img") MultipartFile file) throws IOException {		
		
		Producto p = new Producto();
		p=pservi.buscarPorId(producto.getId()).get();//obtengo la imagen que tenia
		
		if(file.isEmpty()) {//cuando se modifique un producto se cargue la misma imagen, al modificar el producto la imagen debereia de venir vacia
			producto.setImagen(p.getImagen());//se la pasamos al producto que estamos editando 
		}else {
			//cuando se edita tambien la imagen
			/*Producto p = new Producto();  BORRAR?
			p=pservi.buscarPorId(producto.getId()).get();*/
			if(!p.getImagen().equals("default.jpg")) {//eliminamos solo si la imagen no es por defecto
				upload.deleteImage(p.getNombre());//le pasamos el nombre de la imagen que hemos obtenido
			}
			String nombreImagen = upload.saveImage(file); //Retorna el nombre de la imagen nueva
			producto.setImagen(nombreImagen);//se la pasamos al producto
		}
		producto.setUsuario(p.getUsuario());
		pservi.update(producto);
		return"redirect:/productos";
	}
	
	@GetMapping("/delete/{id}")
	public String delete(@PathVariable("id") int id) {
		Producto p = new Producto();
		p=pservi.buscarPorId(id).get();
		if(!p.getImagen().equals("default.jpg")) {//eliminamos solo si la imagen no es por defecto
			upload.deleteImage(p.getImagen());//le pasamos el nombre de la imagen que hemos obtenido
		}
		pservi.delete(id);
		return "redirect:/productos";
	}
}
