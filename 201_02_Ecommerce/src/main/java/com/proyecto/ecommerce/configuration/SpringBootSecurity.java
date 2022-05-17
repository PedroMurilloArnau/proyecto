package com.proyecto.ecommerce.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Configuration
@EnableWebSecurity
public class SpringBootSecurity extends WebSecurityConfigurerAdapter{
	
	@Autowired
	private UserDetailsService userDetailService;
	
	
	//Validamos que el usuario sea el correcto
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailService).passwordEncoder(getEncoder());//Busca un objeto del tipo userDEtailsService y ejecuta los metodos, en nuestro caso la busqueda de usuario pr username
	}
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().authorizeRequests()
		.antMatchers("/administrador/**").hasRole("ADMIN")//damos permisos a las vistas de administrador si tiene rol ADMIN
		.antMatchers("/productos/**").hasRole("ADMIN")
		.antMatchers("/cart").hasRole("USER")
		.and().formLogin().loginPage("/usuario/login")//Cambio la direcion del login a usuario/login
		.permitAll().defaultSuccessUrl("/usuario/acceder");
	}
	@Bean
	public BCryptPasswordEncoder getEncoder() {
		return new BCryptPasswordEncoder();
	}

}
