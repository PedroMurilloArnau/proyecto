package com.proyecto.ecommerce.modelo.service;


import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.proyecto.ecommerce.model.beans.Pedido;
import com.proyecto.ecommerce.model.beans.Usuario;

@Service
public interface PedidoService {
	
	Pedido save (Pedido pedido);
	List<Pedido> findAll();//metodo para obtener una lista de pedidos
	String generarNumeroPedido();
	List<Pedido> findByUsuarios (Usuario usuario);
	Optional<Pedido> findById(int id);

}
