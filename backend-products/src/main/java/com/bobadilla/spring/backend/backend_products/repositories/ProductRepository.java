package com.bobadilla.spring.backend.backend_products.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.bobadilla.spring.backend.backend_products.entities.Product;

@CrossOrigin(origins = "http://localhost:5173/")
// no se utiliza el / 
@RepositoryRestResource( path = "products" )
public interface ProductRepository extends CrudRepository<Product,Long> {


    
}
