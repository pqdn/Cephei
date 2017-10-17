package com.metalabs.cephei.web.service;

import com.metalabs.cephei.web.model.PseudoBot;
import com.metalabs.cephei.web.repository.PseudoBotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class PseudoBotServiceImpl implements PseudoBotService {

    @Autowired
    private PseudoBotRepository pseudoBotRepository;

    @Override
    public List<PseudoBot> findAll() {
        return pseudoBotRepository.findAll();
    }

    @Override
    public Optional<PseudoBot> findById(Integer id) {
        return pseudoBotRepository.findById(id);
    }

    @Override
    public PseudoBot save(PseudoBot pseudoBot) {
        return pseudoBotRepository.save(pseudoBot);
    }

    @Override
    public void delete(PseudoBot pseudoBot) {
        pseudoBotRepository.delete(pseudoBot);
    }
}
