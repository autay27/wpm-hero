 
package com.example.restservice;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
class Outcome {

    private @Id @GeneratedValue Long id;
    private Boolean outcome;
    private Integer wordsWritten;
    private Integer timeSpent;

    Outcome() {}

    Outcome(Boolean outcome, Integer wordsWritten, Integer timeSpent) {
        this.outcome = outcome;
        this.wordsWritten = wordsWritten;
        this.timeSpent = timeSpent;
    }

    public String getOutcome() {
        return this.outcome.toString();
    }

    @Override
    public String toString() {
        return "Outcome toString function needs to be written";
    }
}
