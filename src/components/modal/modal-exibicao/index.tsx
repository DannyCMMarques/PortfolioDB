import { useState } from "react";
import Modal from "..";
import VisualizarData from "../../visualizar-Pauta/Index";

interface ModalVisualizarDataProps {
  id: number;
  children: React.ReactNode;
}

const ModalVisualizarData = ({ id, children }: ModalVisualizarDataProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        onClick={handleOpen}
        className="text-[12px] text-indigo-700 font-bold hover:underline bg-transparent p-0"
      >
        {children}
      </button>

      {open && (
        <Modal onFechar={handleClose} tamanho="lg">
          <VisualizarData id={id} />
        </Modal>
      )}
    </>
  );
};

export default ModalVisualizarData;
