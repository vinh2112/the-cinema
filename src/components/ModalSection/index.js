import React from "react";
import {
  CloseButton,
  ModalCloseButton,
  ModalContainer,
  ModalContent,
} from "./ModalSectionElements";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "redux/actions";
import { modalState$ } from "redux/selectors";

export default function ModalSection() {
  const dispatch = useDispatch();
  const { content } = useSelector(modalState$);

  const handleCloseModal = () => {
    dispatch(hideModal());
  };
  return (
    <ModalContainer>
      <ModalCloseButton>
        <CloseButton onClick={handleCloseModal}>
          <Icon icon="eva:arrow-back-outline" />
        </CloseButton>
      </ModalCloseButton>
      <ModalContent>
        {/* <iframe
          src="https://www.2embed.ru/embed/tmdb/movie?id=796499"
          frameborder="0"
          width="100%"
          height="100%"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
          allowfullscreen
          title="The movie modal"
        ></iframe> */}
        {content}
      </ModalContent>
    </ModalContainer>
  );
}
