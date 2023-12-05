 
package com.example.wpmhero;

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
    public String getWordsWritten() {

        return this.wordsWritten.toString();
    }
    public String getTimeSpent() {

        return this.timeSpent.toString();
    }


    @Override
    public String toString() {
        return "{outcome: " + this.outcome + ", wordsWritten: " + this.wordsWritten + ", timeSpent: " + this.timeSpent + "}";
    }
    // Should be a nice way to print it with jackson
}
