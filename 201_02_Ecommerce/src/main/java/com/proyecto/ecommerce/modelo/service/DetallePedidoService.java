package com.proyecto.ecommerce.modelo.service;

import org.springframework.stereotype.Service;

import com.proyecto.ecommerce.model.beans.DetallePedido;

@Service
public interface DetallePedidoService{
	
	DetallePedido save (DetallePedido detallePedido);

}
