package com.proyecto.ecommerce;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Clase de configuracion
 * @author Nagib
 *
 */
@Configuration
public class ResourceWebConfiguration implements WebMvcConfigurer{
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {//configuramos que en la vista de administrador nos muestre las imagenes de los productos
		registry.addResourceHandler("/images/**").addResourceLocations("file:images/");//indicamos que a partir de esta ruta obtendremos todo,
																					  //con adResourceLocation indicamos donde deberia de apuntar
	}

}
