/*
 * Copyright 2012-2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package cn.edu.nju.AlphaStuManage.controller;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import java.util.Optional;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.hateoas.Link;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import cn.edu.nju.AlphaStuManage.model.Owner;
import cn.edu.nju.AlphaStuManage.repository.OwnerRepository;

/**
 * Spring Web {@link RestController} used to generate a REST API.
 *
 * @author Greg Turnquist
 */
@RestController
class OwnerController {

	private final OwnerRepository repository;

	OwnerController(OwnerRepository repository) {
		this.repository = repository;
	}

	/**
	 * Look up all owners, and transform them into a REST collection resource. Then return
	 * them through Spring Web's {@link ResponseEntity} fluent API.
	 */
	@GetMapping("/students")
	ResponseEntity<CollectionModel<EntityModel<Owner>>> findAll() {

		List<EntityModel<Owner>> owners = StreamSupport.stream(repository.findAll().spliterator(), false)
				.map(owner -> EntityModel.of(owner, //
						linkTo(methodOn(OwnerController.class).findOne(owner.getId())).withSelfRel(), //
						linkTo(methodOn(OwnerController.class).findAll()).withRel("owners"))) //
				.collect(Collectors.toList());

		return ResponseEntity.ok( //
				CollectionModel.of(owners, //
						linkTo(methodOn(OwnerController.class).findAll()).withSelfRel()));
	}

	@PostMapping("/students")
	ResponseEntity<?> newOwner(@RequestBody Owner owner) {

		try {
			Owner savedOwner = repository.save(owner);

			EntityModel<Owner> ownerResource = EntityModel.of(savedOwner, //
					linkTo(methodOn(OwnerController.class).findOne(savedOwner.getId())).withSelfRel());

			return ResponseEntity //
					.created(new URI(ownerResource.getRequiredLink(IanaLinkRelations.SELF).getHref())) //
					.body(ownerResource);
		}
		catch (URISyntaxException e) {
			return ResponseEntity.badRequest().body("Unable to create " + owner);
		}
	}

	/**
	 * Look up a single {@link Owner} and transform it into a REST resource. Then return
	 * it through Spring Web's {@link ResponseEntity} fluent API.
	 * @param id
	 */
	@GetMapping("/students/{id}")
	ResponseEntity<EntityModel<Owner>> findOne(@PathVariable Integer id) {

		return repository.findById(id) //
				.map(owner -> EntityModel.of(owner, //
						linkTo(methodOn(OwnerController.class).findOne(owner.getId())).withSelfRel(), //
						linkTo(methodOn(OwnerController.class).findAll()).withRel("owners"))) //
				.map(ResponseEntity::ok) //
				.orElse(ResponseEntity.notFound().build());
	}

	/**
	 * Update existing owner then return a Location header.
	 * @param owner
	 * @param id
	 * @return
	 */
	@PutMapping("/students/{id}")
	ResponseEntity<?> updateOwner(@RequestBody Owner owner, @PathVariable Integer id) {

		Owner ownerToUpdate = owner;
		ownerToUpdate.setId(id);
		repository.save(ownerToUpdate);

		Link newlyCreatedLink = linkTo(methodOn(OwnerController.class).findOne(id)).withSelfRel();

		try {

			return ResponseEntity.ok().location(new URI(newlyCreatedLink.getHref())).body("update sucessful");
		}
		catch (URISyntaxException e) {
			return ResponseEntity.badRequest().body("Unable to update " + ownerToUpdate);
		}
	}

	@DeleteMapping("students/{id}")
	ResponseEntity<?> deleteStudent(@PathVariable Integer id) {
		Optional<Owner> res = repository.findById(id);
		if (!res.isPresent()) {
			return ResponseEntity.badRequest().body("Not found student with id :" + id);

		}
		else {
			repository.deleteById(id);
			return ResponseEntity.ok().body("delete the student with id:" + id);
		}
	}

}
