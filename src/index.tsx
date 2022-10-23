import { StyledBackground, StyledDefaultWrapper, StyledQuit } from "./Modal.styles";
import { useEffect, useRef } from 'react';
import { handleFocusTrap } from "./utils";

type ModalProps = {
  open: boolean;
  children: JSX.Element;
  wrapperStyle?: React.CSSProperties;
  withDefaultClose?: boolean;
  onClose: (state: boolean) => void;
}

export const Modal = ({ open, children, wrapperStyle, onClose, withDefaultClose = true }: ModalProps) => {

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleModalKeyboardControl(e: KeyboardEvent) {
      if (!open) {
        return;
      }

      if (e.key === "Escape") {
        e.preventDefault();
        onClose(false);
      }

      handleFocusTrap(e, modalRef);
    }

    window.addEventListener("keydown", handleModalKeyboardControl);
    return () => {
      window.removeEventListener('keydown', handleModalKeyboardControl);
    }
  }, [open, onClose])

  function handleQuitFocus(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      onClose(false);
      return e.preventDefault();
    }
  }

  return (
    <>
      {open && (
        <StyledBackground onClick={() => onClose(false)}>
          <StyledDefaultWrapper ref={modalRef} role='dialog' style={wrapperStyle || {}} onClick={(e) => e.stopPropagation()}>
            {withDefaultClose && <StyledQuit onKeyDown={handleQuitFocus} autoFocus={true} onClick={() => onClose(false)}>&#10006;</StyledQuit>}
            {children}
          </StyledDefaultWrapper>
        </StyledBackground>
      )}
    </>
  )
}
