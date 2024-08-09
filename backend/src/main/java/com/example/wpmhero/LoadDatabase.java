 
package com.example.wpmhero;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.Instant;

@Configuration
class LoadDatabase {

  private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

  @Bean
  CommandLineRunner initDatabase(OutcomeRepository repository) {

    return args -> {
      log.info("Preloading " + repository.save(new Outcome(true, new Challenge(5, 0, 0, 10000), new Attempt(5, 5, 5000, Instant.now()))));
    };
  }
}
