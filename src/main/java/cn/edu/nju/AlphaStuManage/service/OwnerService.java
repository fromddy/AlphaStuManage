package cn.edu.nju.AlphaStuManage.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import cn.edu.nju.AlphaStuManage.model.Owner;
import cn.edu.nju.AlphaStuManage.repository.OwnerRepository;

@Service
public class OwnerService {

	private OwnerRepository ownerRepository;

	@Autowired
	public OwnerService(OwnerRepository ownerRepository) {
		this.ownerRepository = ownerRepository;
	}

	@Cacheable(value = "findowner", key = "#id")
	public Owner findById(int id) {
		return ownerRepository.findById(id);
	}

	// name gender birthday address department number
	@Cacheable(value = "find_owners", key = "#name+'-'+#gender+'-'+#address+'-'+#department")
	public Collection<Owner> findOwner(String name, String gender, String address, String department) {
		return ownerRepository.findOwner(name, gender, address, department);

	}

	@CacheEvict(value = "all_owner", allEntries = true)
	public void saveOwner(Owner owner) {
		ownerRepository.save(owner);
	}

	@CacheEvict(value = "all_owner", allEntries = true)
	public void deleteOwner(Owner owner) {
		ownerRepository.delete(owner);
	}

}
