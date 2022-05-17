package com.proyecto.ecommerce.modelo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.proyecto.ecommerce.model.beans.DetallePedido;

@Service
public interface DetallePedidoRepository extends JpaRepository<DetallePedido, Integer>{

}
