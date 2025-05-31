package br.molero.api.controller;

import br.molero.api.model.Tarefa;
import br.molero.api.service.TarefaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/tarefas")
public class TarefaController {

    private TarefaService tarefaService;

    public TarefaController(TarefaService tarefaService) {
        this.tarefaService = tarefaService;
    }

    @PostMapping
    public List<Tarefa> adicinarTarefa(@RequestBody Tarefa tarefa){
        return tarefaService.adicionarTarefa(tarefa);
    }

    @GetMapping
    public List<Tarefa> listarTarefas(){
        return tarefaService.listarTarefas();
    }


    @PutMapping
    public List<Tarefa> atualizarTarefa(@RequestBody Tarefa tarefa){
        return tarefaService.atualizarTarefa(tarefa);
    }

    @DeleteMapping("{id}")
    public List<Tarefa> excluirTarefa(@PathVariable("id") UUID id){
        return excluirTarefa(id);
    }

}
