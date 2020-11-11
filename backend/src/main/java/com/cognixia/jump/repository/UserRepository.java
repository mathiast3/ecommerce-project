package com.cognixia.jump.repository;

import com.cognixia.jump.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
