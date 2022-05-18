package br.com.propague.api.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

//    @Autowired
//    private IUsuarioService iUsuarioService;
//
//    @GetMapping
//    public ResponseEntity<List<Usuario>> findAll() {
//        return ResponseEntity.ok(iUsuarioService.findAll());
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Optional<Usuario>> findById(@PathVariable Long id) {
//        return ResponseEntity.ok(iUsuarioService.findById(id));
//    }
//
//    @PostMapping
//    public ResponseEntity<Usuario> create(@RequestBody Usuario usuario) {
//        return ResponseEntity.ok(iUsuarioService.save(usuario));
//    }
//
//    @PutMapping
//    public ResponseEntity<Usuario> update(@RequestBody Usuario usuario) {
//        return ResponseEntity.ok(iUsuarioService.update(usuario));
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<?> delete(@PathVariable Long id) {
//        iUsuarioService.deleteById(id);
//        return ResponseEntity.noContent().build();
//    }
}
