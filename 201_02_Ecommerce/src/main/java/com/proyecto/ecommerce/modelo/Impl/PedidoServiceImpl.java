package com.proyecto.ecommerce.modelo.Impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.ecommerce.model.beans.Pedido;
import com.proyecto.ecommerce.model.beans.Usuario;
import com.proyecto.ecommerce.modelo.repository.PedidoRepository;
import com.proyecto.ecommerce.modelo.service.PedidoService;

@Service
public class PedidoServiceImpl implements PedidoService{

	@Autowired
	private PedidoRepository prepo;
	
	@Override
	public Pedido save(Pedido pedido) {
		return prepo.save(pedido);
	}

	@Override
	public List<Pedido> findAll() {
		return prepo.findAll();
	}
	
	//Creo metodo para obtener el numero de pedido de forma secuencial
	@Override
	public String generarNumeroPedido() {
		
		int numero=0; //numero con el que comenzará, para luego convertilo a string
		String numeroConcatenado = "";//devuelve el string con el secuencial del numero de pedido
		List<Pedido> pedidos = findAll(); //obtengo todos los pedido para buscar el ultimo numero, los numeros me llegan en formato de string de la bbdd
		List<Integer> numeros = new ArrayList<>();
		pedidos.stream().forEach(o -> numeros.add(Integer.parseInt(o.getNumero())));//pasamos el numero de orden y vamos añadiendo a mi lista de numeros, los numeros de pedido como entero
		
		if(pedidos.isEmpty()) {//si viene vacia no hay pedidos
			numero=1;
		}else {//busco el mayor de los numeros de pedido
			numero = numeros.stream().max(Integer::compare).get();
			numero ++;
		}
		//Pasamos los numeros a String ya que lo tenemos como Int
		if(numero<10) {//el primer numero de pedido seria 000000001....000000002
			numeroConcatenado="000000000" + String.valueOf(numero);
		}else if (numero<100) {
			numeroConcatenado="00000000" + String.valueOf(numero);
		}else if (numero<1000) {
			numeroConcatenado="0000000" + String.valueOf(numero);
		}else if (numero<10000) {
			numeroConcatenado="000000" + String.valueOf(numero);
		}
		
		return numeroConcatenado;
	}

	@Override
	public List<Pedido> findByUsuarios(Usuario usuario) {
		return prepo.findByUsuario(usuario);
	}

	@Override
	public Optional<Pedido> findById(int id) {
		return prepo.findById(id);
	}
	
	
	

}
