 
package com.example.wpmhero;

import org.springframework.core.style.ToStringCreator;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;


@Entity
class Outcome {

    private @Id @GeneratedValue Long id;
    private Boolean outcome;
    
    @OneToOne(cascade = CascadeType.ALL)
    private Challenge challenge;

    @OneToOne(cascade = CascadeType.ALL)
    private Attempt attempt;

    Outcome() {}

    Outcome(Boolean outcome, Challenge challenge, Attempt attempt) {
        this.outcome = outcome;
        this.challenge = challenge;
        this.attempt = attempt;
    }

    public String getOutcome() {
        return outcome.toString();
    }

    public Challenge getChallenge() {
        return challenge;
    }

    public Attempt getAttempt() {
        return attempt;
    }

    @Override
    public String toString() {
         return new ToStringCreator(this)
            .append("outcome", this.outcome)
            .append("challenge", this.challenge)
            .append("attempt", this.attempt)      
            .toString();
        
    }
}
