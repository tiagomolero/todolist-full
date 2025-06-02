package br.molero.api.service;

import br.molero.api.model.Status;
import br.molero.api.model.Tarefa;
import br.molero.api.repository.TarefaRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class TarefaService {

    private TarefaRepository tarefaRepository;

    public TarefaService(TarefaRepository tarefaRepository) {
        this.tarefaRepository = tarefaRepository;
    }

    public List<Tarefa> adicionarTarefa(Tarefa tarefa){
        LocalDate dataAtual = LocalDate.now();
        tarefa.setDataCriacao(dataAtual);
        tarefaRepository.save(tarefa);
        return listarTarefas();
    }

    public List<Tarefa> listarTarefas(){
        return tarefaRepository.findAll();
    }

    public List<Tarefa> atualizarTarefa(Tarefa tarefa){
        tarefaRepository.save(tarefa);
        return listarTarefas();
    }

    public List<Tarefa> excluirTarefa(Long id){
        tarefaRepository.deleteById(id);
        return listarTarefas();
    }

    public List<Tarefa> listaPorStatus(Status status) {
        return tarefaRepository.findByStatus(status);
    }

    public Optional<Tarefa> listarTarefa(Long id){
        return tarefaRepository.findById(id);
    }
}
