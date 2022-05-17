package com.proyecto.ecommerce.modelo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.proyecto.ecommerce.model.beans.Pedido;
import com.proyecto.ecommerce.model.beans.Usuario;

@Service
public interface PedidoRepository extends JpaRepository<Pedido, Integer>{

	List<Pedido> findByUsuario (Usuario usuario);

	
}
