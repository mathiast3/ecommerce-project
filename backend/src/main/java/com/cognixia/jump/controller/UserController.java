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

import com.cognixia.jump.exceptions.ResourceAlreadyExistsException;
import com.cognixia.jump.exceptions.ResourceNotFoundException;
import com.cognixia.jump.model.User;
import com.cognixia.jump.service.UserService;

@RequestMapping("/api")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	@Autowired
	UserService service;

	@GetMapping("/allUsers")
	public List<User> getAllUsers() {
		return service.userRepository.findAll();
	}

	@GetMapping("/user/{id}")
	public User getUserById(@PathVariable long id) throws ResourceNotFoundException {
		Optional<User> found = service.userRepository.findById(id);
		if (!found.isPresent()) {
			throw new ResourceNotFoundException("Id = " + id + "does not exist");
		}

		return found.get();
	}

	@PostMapping("/add/user")
	public ResponseEntity<User> addUser(@RequestBody User newUser) throws ResourceAlreadyExistsException {
		if (service.userRepository.existsById(newUser.getUserId())) {
			throw new ResourceAlreadyExistsException("User with id = " + newUser.getUserId() + "already exists");
		} else {
			User added = service.userRepository.save(newUser);
			return ResponseEntity.status(200).body(added);
		}

	}

	@DeleteMapping("/delete/user/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable long id) throws ResourceNotFoundException {
		Optional<User> found = service.userRepository.findById(id);
		if (found.isPresent()) {
			service.userRepository.deleteById(id);
			return ResponseEntity.status(200).body("Deleted user with id = " + id);
		} else {
			throw new ResourceNotFoundException("User with id = " + id + " not found");
		}
	}

	@PutMapping("/update/user")
	public @ResponseBody String updateUser(@RequestBody User updateUser) throws ResourceNotFoundException {
		Optional<User> found = service.userRepository.findById(updateUser.getUserId());
		if (found.isPresent()) {
			service.userRepository.save(updateUser);
			return "Saved: " + updateUser.toString();
		} else {
			throw new ResourceNotFoundException("User with id = " + updateUser.getUserId() + " not found");
		}
	}

}
