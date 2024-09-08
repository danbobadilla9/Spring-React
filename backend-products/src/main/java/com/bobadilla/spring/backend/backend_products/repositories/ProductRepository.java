package com.bobadilla.spring.backend.backend_products.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.bobadilla.spring.backend.backend_products.entities.Product;

// no se utiliza el / 
@RepositoryRestResource( path = "products" )
public interface ProductRepository extends CrudRepository<Product,Long> {


    
}
