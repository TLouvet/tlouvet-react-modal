export function handleFocusTrap(e: KeyboardEvent, modalRef: React.MutableRefObject<HTMLDivElement | null>) {
  const focusableElements = modalRef.current?.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select'
  )

  if (!focusableElements) {
    return;
  }

  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  if (e.key === "Tab") {
    if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus()
      return e.preventDefault()
    }

    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus()
      e.preventDefault()
    }
  }
}
