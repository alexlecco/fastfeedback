import React, { useRef } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const AddSiteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();

  const createSite = data => console.log(data);
  const initialRef = useRef();

  return (
    <>
      <Button onClick={onOpen} fontWeight="medium" maxW="200px">
        Add your first Site
      </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(createSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="My site"
                name="site"
                ref={register({ required: true })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://website.com"
                name="url"
                ref={register({ required: true })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>

            <Button type="submit" colorScheme="teal" fontWeight="medium">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddSiteModal;