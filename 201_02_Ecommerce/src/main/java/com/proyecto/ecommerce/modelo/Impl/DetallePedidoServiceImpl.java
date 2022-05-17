package com.proyecto.ecommerce.modelo.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.ecommerce.model.beans.DetallePedido;
import com.proyecto.ecommerce.modelo.repository.DetallePedidoRepository;
import com.proyecto.ecommerce.modelo.service.DetallePedidoService;

@Service
public class DetallePedidoServiceImpl implements DetallePedidoService{

	@Autowired
	private DetallePedidoRepository dprepo;
	
	@Override
	public DetallePedido save(DetallePedido detallePedido) {
		return dprepo.save(detallePedido);
	}

}
