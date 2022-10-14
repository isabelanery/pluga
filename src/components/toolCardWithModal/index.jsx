import React, { useContext } from 'react';
import ToolCard from '../ToolCard';
import { AppContext } from '../../context/Provider';

export default function ToolCardWithModal(props) {
  const { data, shouldShowName, small } = props;
  const { setIsModalOpen, setModalTool } = useContext(AppContext);

  const openModal = () => {
    setModalTool(data);
    setIsModalOpen(true);
  };

  return (
    <ToolCard data={data} shouldShowName={shouldShowName} small={small} onClick={openModal} />
  );
}
