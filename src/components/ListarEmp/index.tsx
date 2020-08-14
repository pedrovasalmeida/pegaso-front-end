import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Preloader, ThreeDots } from 'react-preloader-icon';

import {
  Container,
  Lista,
  Item,
  LinkRRD,
  ArrowIcon,
  DivIcon,
  Avatar,
  Data,
  Nome,
  Descricao,
} from './styles';

interface EmpreendimentoData {
  id: number;
  nome: string;
  descricao_curta: string;
  descricao: string;
  endereco: string;
  banner: string;
  poster: string;
}

const ListarEmp: React.FC = () => {
  const [data, setData] = useState<EmpreendimentoData[] | null>(null);

  const getData = async () => {
    const { data, error } = await api.get('/show-all');

    if (error) return error;

    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Lista>
        {!data ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              height: '100vh',
              width: '100%',
              marginTop: '100px',
            }}
          >
            <Preloader
              use={ThreeDots}
              size={120}
              strokeWidth={8}
              strokeColor="#324286"
              duration={800}
            />
          </div>
        ) : (
          data?.map((item) => (
            <LinkRRD to={`/empreendimentos/detalhes/${item.id}`} key={item.id}>
              <Avatar src={item.banner} alt={item.nome} />
              <Data>
                <Nome>{item.nome}</Nome>
                <Descricao>{item.descricao}...</Descricao>
                <Nome>ID: {item.id}</Nome>
              </Data>

              <DivIcon>
                <ArrowIcon />
              </DivIcon>
            </LinkRRD>
          ))
        )}
      </Lista>
    </Container>
  );
};

export default ListarEmp;
