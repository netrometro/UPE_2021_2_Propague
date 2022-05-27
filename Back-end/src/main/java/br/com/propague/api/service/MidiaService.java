package br.com.propague.api.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import br.com.propague.api.model.Midia;
import br.com.propague.api.repository.MidiaRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class MidiaService implements IMidiaService {
	private final MidiaRepository midiaRepo;

	@Override
	public Midia save(Midia midia) {
		log.info("Salvando midia: {}", midia);
		return midiaRepo.save(midia);
	}

	@Override
	public List<Midia> findAll() {
		log.info("Retornando todos os anúncios");
		return midiaRepo.findAll();
	}

	@Override
	public Midia findById(Long id) {
		log.info("Buscando anúncio por id: {}", id);
		return midiaRepo.findById(id).orElse(null);
	}

	@Override
	public void delete(Long id) {
		log.info("Deletando anuncio por id: {}", id);
		midiaRepo.deleteById(id);
	}
}
