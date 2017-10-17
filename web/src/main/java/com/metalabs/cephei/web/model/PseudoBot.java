package com.metalabs.cephei.web.model;

import javax.persistence.*;

import java.util.List;

@Entity
@Table(name = "pseudo_bot")
public class PseudoBot {

    @Id
    @GeneratedValue
    private int id;

    @Column(name = "description")
    private String description;

    public PseudoBot() {
    }

    public PseudoBot(String description) {
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "PseudoBot{" +
                "id=" + id +
                ", description='" + description + '\'' +
                '}';
    }
}
