package com.metalabs.cephei.web.repository;

import com.metalabs.cephei.web.model.PseudoBot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PseudoBotRepository extends JpaRepository<PseudoBot, Integer> {
    List<PseudoBot> findAll();
    Optional<PseudoBot> findById(Integer id);
    PseudoBot save(PseudoBot pseudoBot);
    void delete(PseudoBot pseudoBot);
}
