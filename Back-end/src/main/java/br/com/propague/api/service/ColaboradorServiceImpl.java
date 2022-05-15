package br.com.propague.api.service;

import br.com.propague.api.model.Colaborador;
import br.com.propague.api.repository.ColaboradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ColaboradorServiceImpl implements ColaboradorService {

    @Autowired
    private ColaboradorRepository colaboradorRepository;

    @Override
    public Colaborador save(Colaborador colaborador) {
        return colaboradorRepository.save(colaborador);
    }

    @Override
    public List<Colaborador> findAll() {
        return colaboradorRepository.findAll();
    }

    @Override
    public Optional<Colaborador> findById(Long id) {
        return colaboradorRepository.findById(id);
    }

    @Override
    public Colaborador update(Colaborador colaborador) {
        return colaboradorRepository.save(colaborador);
    }

    @Override
    public void deleteById(Long id) {
        colaboradorRepository.deleteById(id);
    }
}
