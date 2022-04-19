/* eslint-disable no-useless-escape */
import { Input } from 'antd';
import React, { useState } from 'react';
import addImg from '../assets/add.png';
import '../sass/style.css';

const CreateFolder = () => {
  const [name, setName] = useState('');
  const [nameValidate, setNameValidate] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionValidate, setDescriptionValidate] = useState('');

  const checkValidation = () => {
    if (name.length > 6 && name.length < 300 && nameValidate === '') {
      return true;
    } else return false;
  };

  const handleCreate = () => {
    // Validation
    setNameValidate('');
    setDescriptionValidate('');
    if (name.length > 6) {
      if (name.length > 300) {
        setNameValidate('Tên Folder có độ dài không quá 300 ký tự.');
        return;
      }
      if (
        name.search(
          /(\b)(on\S+)(\s*)=|javascript|<(|\/|[^\/>][^>]+|\/[^>][^>]+)>/gi
        ) > -1
      ) {
        setNameValidate('Tên Folder sai format');
        return;
      }
    } else {
      setNameValidate('Tên Folder có độ dài ít nhất 6 ký tự.');
      return;
    }
    if (checkValidation) {
      console.log('Creat: ', name + description);
    }
  };

  return (
    <div className="createFolderCpm">
      <h1>Tạo mới một Folder</h1>
      <Input
        placeholder="Tên Folder"
        status={nameValidate !== '' ? 'error' : ''}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setNameValidate('');
          if (name.length > 6) {
            if (name.length > 300) {
              setNameValidate('Tên Folder có độ dài không quá 300 ký tự.');
              return;
            }
            if (
              name.search(
                /(\b)(on\S+)(\s*)=|javascript|<(|\/|[^\/>][^>]+|\/[^>][^>]+)>/gi
              ) > -1
            ) {
              setNameValidate('Tên Folder sai format');
              return;
            }
          } else {
            setNameValidate('Tên Folder có độ dài ít nhất 6 ký tự.');
            return;
          }
        }}
      />
      {nameValidate !== '' && <span>{nameValidate}</span>}

      <Input.TextArea
        placeholder="Mô tả"
        status={descriptionValidate !== '' ? 'error' : ''}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      {descriptionValidate !== '' && <span>{descriptionValidate}</span>}

      {checkValidation() && (
        <div className="createFolderCpm-create" onClick={handleCreate}>
          <img src={addImg} alt="Create Folder" />
          <div>Tạo Folder</div>
          <img src={addImg} alt="Create Folder" />{' '}
        </div>
      )}
    </div>
  );
};

export default CreateFolder;
