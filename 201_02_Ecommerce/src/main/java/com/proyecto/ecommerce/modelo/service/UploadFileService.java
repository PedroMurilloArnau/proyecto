package com.proyecto.ecommerce.modelo.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class UploadFileService {
	
	private String folder="images//";//esta variable contendrá la hubicacion donde se van a cargar las imagenes, vamos a apuntar a la carpeta images/
	
	public String saveImage(MultipartFile file) throws IOException {//recibe un objeto multipartfile que seria la imagen
		if(!file.isEmpty()) {//si el objeto no esta vacio ejecuta
			//pasamos la imagen a bytes
			byte [] bytes=file.getBytes();
			Path path = Paths.get(folder+file.getOriginalFilename()); //pasamos la uri donde queremos almacenar y guardamos el nombre de la imagen
			Files.write(path, bytes);//le pasamos el path y la imagen en bytes
			return file.getOriginalFilename(); //retornamos el nombre de la imagen
		}//si el usuario no sube la imagen, se guardara una por defecto
		return "default.jpg";
	}
	
	public void deleteImage(String nombre) {
		File file = new File(folder+nombre);
		file.delete();
	}

}
