package br.molero.api.repository;

import br.molero.api.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
}
