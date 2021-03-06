import React, { useState } from 'react';
import { Preloader, ThreeDots } from 'react-preloader-icon';
import api from '../../services/api';

import {
  Form,
  Input,
  UploadInput,
  TextArea,
  DivDetalhes,
  CreateButton,
  UploadButton,
  DivPreloader,
  PreviewImage,
  PreviewDiv,
  StatusMessageDiv,
  Title,
} from './styles';

interface EmpreendimentoData {
  nome: string;
  descricao_curta: string;
  descricao: string;
  endereco: string;
  banner: string;
  poster: string;
}

const AddEmp2: React.FC = () => {
  // estado para arquivos
  const [file, setFile] = useState<File | null>(null);
  // estado dos inputs
  const [inputName, setInputName] = useState('');
  const [inputDescricao, setInputDescricao] = useState('');
  const [inputDescCurta, setInputDescCurta] = useState('');
  const [inputEndereco, setInputEndereco] = useState('');
  const [linkBanner, setLinkBanner] = useState('');
  // estados informativos
  const [isBannerLoading, setIsBannerLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const token = localStorage.getItem('@ProjPegaso:token');

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const handleInputs = (e: string, type: string) => {
    if (type === 'nome') setInputName(e);
    if (type === 'descricao') setInputDescricao(e);
    if (type === 'descricao_curta') setInputDescCurta(e);
    if (type === 'endereco') setInputEndereco(e);
  };

  const handleSubmitImage = (e: FileList | null) => {
    if (e && e.length > 0) setFile(e[0]);
  };

  const fileUploadBannerHandler = async () => {
    setIsBannerLoading(true);
    const formdata = new FormData();

    if (file === null) return alert('file is empty');

    formdata.append('image', file!);

    await api
      .post('/storage-images', formdata)
      .then(res => {
        setIsBannerLoading(false);
        return setLinkBanner(res.data.link);
      })
      .catch(err => {
        setIsBannerLoading(false);
        return err;
      });
  };

  const verifyAndSendData = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess(false);
    setError(false);
    setStatusMessage('');

    if (!inputName) {
      setError(true);
      setIsLoading(false);
      setStatusMessage('O nome do empreendimento não pode estar vazio!');

      setTimeout(() => {
        setError(false);
        setStatusMessage('');
      }, 3000);

      return;
    }
    if (!inputDescricao) {
      setError(true);
      setIsLoading(false);
      setStatusMessage('A descrição não pode estar vazia!');

      setTimeout(() => {
        setError(false);
        setStatusMessage('');
      }, 3000);

      return;
    }
    if (!inputDescCurta) {
      setError(true);
      setIsLoading(false);
      setStatusMessage('A curta descrição não pode estar vazia!');

      setTimeout(() => {
        setError(false);
        setStatusMessage('');
      }, 3000);

      return;
    }
    if (!inputEndereco) {
      setError(true);
      setIsLoading(false);
      setStatusMessage('O endereço não pode estar vazio!');

      setTimeout(() => {
        setError(false);
        setStatusMessage('');
      }, 3000);

      return;
    }
    if (!linkBanner) {
      setError(true);
      setIsLoading(false);
      setStatusMessage('O banner do empreendimento não pode estar vazio!');

      setTimeout(() => {
        setError(false);
        setStatusMessage('');
      }, 3000);

      return;
    }

    const data = {
      nome: inputName,
      descricao_curta: inputDescCurta,
      descricao: inputDescricao,
      endereco: inputEndereco,
      banner: linkBanner,
      poster: linkBanner,
    };

    await api
      .post('/create', data, config)
      .then(res => {
        setSuccess(true);
        setError(false);
        setIsLoading(false);
        setStatusMessage('Empreendimento criado com sucesso!');

        setTimeout(() => {
          setSuccess(false);
          window.location.reload();
        }, 2000);
        return setIsLoading(false);
      })
      .catch(err => {
        setError(true);
        setSuccess(false);
        setIsLoading(false);
        setStatusMessage(`Erro: ${err}`);

        setTimeout(() => {
          setError(false);
        }, 2000);
      });
  };

  return (
    <>
      <Title>Adicionar empreendimento</Title>
      <Form>
        <DivDetalhes>
          <Input
            type="text"
            id="emp-name"
            placeholder="Nome do empreendimento"
            onChange={e => handleInputs(e.target.value, 'nome')}
          />
          <TextArea
            id="emp-descricao"
            placeholder="Descrição (detalhes)"
            onChange={e => handleInputs(e.target.value, 'descricao')}
          />
          <Input
            id="emp-descricao_curta"
            type="text"
            placeholder="Curta descrição (2 ou 3 palavras)"
            onChange={e => handleInputs(e.target.value, 'descricao_curta')}
          />
          <Input
            id="emp-endereco"
            type="text"
            placeholder="Endereço"
            onChange={e => handleInputs(e.target.value, 'endereco')}
          />

          <label>Selecione um arquivo para ser o Banner do empreendimento:</label>

          <form encType="multipart/form-data">
            <UploadInput
              name="image"
              id="image"
              type="file"
              whatImageType="banner"
              onChange={e => handleSubmitImage(e.target.files)}
            />

            <UploadButton
              disabled={file === null}
              type="button"
              value="Upload Banner"
              onClick={() => fileUploadBannerHandler()}
            />
          </form>

          {linkBanner ? (
            <Input type="text" value={linkBanner} disabled placeholder="Link do banner" />
          ) : (
            <>
              {isBannerLoading && (
                <DivPreloader>
                  <Preloader
                    use={ThreeDots}
                    size={70}
                    strokeColor="#0e6387"
                    strokeWidth={6}
                    duration={1000}
                  />
                </DivPreloader>
              )}
            </>
          )}

          <PreviewDiv>
            {linkBanner && (
              <>
                <span>Banner: </span>
                <a href={linkBanner} target="_blank" rel="noreferrer noopener">
                  <PreviewImage src={linkBanner} alt={linkBanner} />
                </a>
              </>
            )}
          </PreviewDiv>

          {isLoading && (
            <StatusMessageDiv status="loading">
              <Preloader
                use={ThreeDots}
                size={70}
                strokeColor="#0e6387"
                strokeWidth={6}
                duration={1000}
              />
            </StatusMessageDiv>
          )}

          {success && (
            <StatusMessageDiv status="success">
              <span>{statusMessage}</span>
            </StatusMessageDiv>
          )}

          {error && (
            <StatusMessageDiv status="error">
              <span>{statusMessage}</span>
            </StatusMessageDiv>
          )}

          <CreateButton onClick={e => verifyAndSendData(e)}>
            Criar Empreendimento
          </CreateButton>
        </DivDetalhes>
      </Form>
    </>
  );
};

export default AddEmp2;
