package br.molero.api.service;

import br.molero.api.model.Tarefa;
import br.molero.api.repository.TarefaRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.UUID;

@Service
public class TarefaService {

    private TarefaRepository tarefaRepository;

    public TarefaService(TarefaRepository tarefaRepository) {
        this.tarefaRepository = tarefaRepository;
    }

    public List<Tarefa> adicionarTarefa(Tarefa tarefa){
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

    public List<Tarefa> excluirTarefa(UUID id){
        tarefaRepository.deleteById(id);
        return listarTarefas();
    }

}
