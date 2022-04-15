/* eslint-disable no-useless-escape */
import { Input } from 'antd';
import { DivHover } from 'components/Hover';
import React, { useState } from 'react';
import addImg from '../assets/add.png';

function CreateFolder() {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    title: {
      display: 'flex',
      fontSize: '1.3rem',
      justifyContent: 'center',
    },
    input: {
      marginTop: '10px',
    },
    create: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      img: {
        width: '50px',
      },
      title: {
        fontSize: '1.3rem',
      },
    },
  };

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
    <div style={styles}>
      <div style={styles.title}>Tạo mới một Folder</div>
      <Input
        style={styles.input}
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
      {nameValidate !== '' && (
        <div style={{ padding: '1px 0 1px 0', color: 'rgba(231, 76, 60,1.0)' }}>
          {nameValidate}
        </div>
      )}

      <Input.TextArea
        style={styles.input}
        placeholder="Mô tả"
        status={descriptionValidate !== '' ? 'error' : ''}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      {descriptionValidate !== '' && (
        <div style={{ padding: '1px 0 1px 0', color: 'rgba(231, 76, 60,1.0)' }}>
          {descriptionValidate}
        </div>
      )}

      {checkValidation() && (
        <DivHover
          hoverStyles={{ transform: 'scale(0.98)' }}
          defaultStyles={{ backgroundColor: 'rgba(46, 204, 113,0.3)' }}
          onClick={handleCreate}
        >
          <div style={styles.create}>
            <img style={styles.create.img} src={addImg} alt="Create Folder" />
            <div style={styles.create.title}>Tạo Folder</div>
            <img style={styles.create.img} src={addImg} alt="Create Folder" />{' '}
          </div>
        </DivHover>
      )}
    </div>
  );
}

export default CreateFolder;
