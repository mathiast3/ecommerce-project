package com.cognixia.jump.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognixia.jump.model.Product;
import com.cognixia.jump.repository.ProductRepository;

@RequestMapping("/api")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

	@Autowired
	ProductRepository repository;

	@GetMapping("/products")
	public List<Product> getAllProducts() {
		return repository.findAll();
	}

	@GetMapping("/product/{id}")
	public Product getProduct(@PathVariable int id) {

		Product enrollee = repository.getOne(id);
		return enrollee;
	}

	@PostMapping("/add/product")
	public Product addProduct(@RequestBody Product product) {

		Product newProduct = repository.save(product);

		return newProduct;
	}

	@PutMapping("/update/product")
	public @ResponseBody String updateProduct(@RequestBody Product product) {

		Optional<Product> found = repository.findById(product.getId());

		if (found.isPresent()) {
			repository.save(product);
			return "Saved: " + product.toString();
		} else {
			return "Could not update product";
		}

	}

	@DeleteMapping("/delete/product/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable int id) {

		Optional<Product> found = repository.findById(id);

		if (found.isPresent()) {
			repository.deleteById(id);

			return ResponseEntity.status(200).body("Product has been deleted");

		} else {
			return ResponseEntity.status(400).header("Product id", id + "").body("Product not found");
		}
	}

}
