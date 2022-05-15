package br.com.propague.api.controller;

import br.com.propague.api.model.Colaborador;
import br.com.propague.api.service.ColaboradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/colaborador")
public class ColaboradorController {

    @Autowired
    private ColaboradorService colaboradorService;

    @GetMapping
    public ResponseEntity<List<Colaborador>> findAll() {
        return ResponseEntity.ok(colaboradorService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Colaborador>> findById(@PathVariable Long id) {
        return ResponseEntity.ok(colaboradorService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Colaborador> create(@RequestBody Colaborador colaborador) {
        return ResponseEntity.ok(colaboradorService.save(colaborador));
    }

    @PutMapping
    public ResponseEntity<Colaborador> update(@RequestBody Colaborador colaborador) {
        return ResponseEntity.ok(colaboradorService.update(colaborador));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        colaboradorService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
