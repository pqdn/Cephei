package com.metalabs.cephei.web.service;

import com.metalabs.cephei.web.model.PseudoBot;

import java.util.List;
import java.util.Optional;

public interface PseudoBotService {

    List<PseudoBot> findAll();

    Optional<PseudoBot> findById(Integer id);

    PseudoBot save(PseudoBot pseudoBot);

    void delete(PseudoBot pseudoBot);
}
