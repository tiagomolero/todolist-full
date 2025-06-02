package br.molero.api.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

@Entity
@Table(name = "tarefas")
public class Tarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @NotNull
    @Column(length = 100)
    private String titulo;

    @Column(length = 200)
    private String descricao;

    @Enumerated
    @NotNull
    private Status status;

    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate dataCriacao;

    public Tarefa(){

    }

    public Tarefa(LocalDate dataCriacao, Status status, String descricao, String titulo, Long id) {
        this.dataCriacao = dataCriacao;
        this.status = status;
        this.descricao = descricao;
        this.titulo = titulo;
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public LocalDate getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(LocalDate dataCriacao) {
        this.dataCriacao = dataCriacao;
    }
}
