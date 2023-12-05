 

package com.example.wpmhero;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.ArrayList;

@CrossOrigin
@RestController
public class OutcomeController {

    private static final Logger log = 	LoggerFactory.getLogger(LoadDatabase.class);

    private final OutcomeRepository repository;

	OutcomeController(OutcomeRepository repository) {
		this.repository = repository;
	}

	@PostMapping("/outcome")
	public Outcome outcome(@RequestBody Outcome o) {

		return repository.save(o);

	}

	@GetMapping("/alloutcomes")
	public List<Outcome> alloutcomes() {
		return repository.findAll();
    }

}
