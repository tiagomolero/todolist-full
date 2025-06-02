package br.molero.api.controller;

import br.molero.api.model.Status;
import br.molero.api.model.Tarefa;
import br.molero.api.service.TarefaService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Validated
@RestController
@RequestMapping("/tarefas")
public class TarefaController {

    private TarefaService tarefaService;

    public TarefaController(TarefaService tarefaService) {
        this.tarefaService = tarefaService;
    }

    @PostMapping
    public List<Tarefa> adicinarTarefa(@RequestBody @Valid Tarefa tarefa){
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
    public List<Tarefa> excluirTarefa(@PathVariable("id") @NotNull @Positive Long id){
        return tarefaService.excluirTarefa(id);
    }

    @GetMapping("/status/{status}")
    public List<Tarefa> filtrarPorStatus(@PathVariable Status status){
        return tarefaService.listaPorStatus(status);
    }

    @GetMapping("{id}")
    public Optional<Tarefa> listarTarefa(@PathVariable("id") @NotNull @Positive Long id){
        return tarefaService.listarTarefa(id);
    }

}
