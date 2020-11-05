package com.cognixia.jump.repository;

import com.cognixia.jump.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<User, Long> {
}
