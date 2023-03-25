import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';

import InputTextArea from '../../../common/component/input/input-text-area';
import { AddEditLayout } from '../../../common/component/add-edit-layout/add-edit-layout';
import { Input, ImageSetup, Loading, Loader } from '../../../common/component';
import { Create, Edit, View } from '../../constants';
import { COLORS } from '../../../../theme';
import { validationSchemaCreate } from '../../validation';
import { posts } from '../../../home';
import * as Styled from '../../dashboard.styled';

export const CreatePost = ({ onCloseDrawer, component }) => {
  const isCreate = component === 'create';
  const isView = component === 'view';
  const title =
    (component === Create && 'Create Post ') ||
    (component === Edit && 'Edit Post ') ||
    (component === View && 'View Post ');

  const [isShowLoader, setIsShowLoader] = useState(false);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    if (isShowLoader) {
      setTimeout(() => {
        setIsShowLoader(false);
      }, 5000);
    }

    if (isLoader) {
      setTimeout(() => {
        setIsLoader(false);
      }, 3000);
    }
  }, [isShowLoader, isLoader]);

  const onSubmit = (data) => {
    setIsShowLoader(true);
    // console.log(data);
    //
    // onCloseDrawer();
  };

  const [avatarString, setAvatarString] = useState(isCreate ? null : posts[0].image);
  const [avatarFile, setAvatarFile] = useState(null);

  const deleteAvatar = () => {
    setAvatarString(null);
    setAvatarFile(null);
  };

  const initialValues = {
    direction: '',
    title: '',
    description: '',
    author: ''
  };

  return (
    <AddEditLayout title={title} onCloseButtonClick={onCloseDrawer}>
      <ImageSetup
        label={'Image'}
        avatar={avatarString || (avatarFile ? URL.createObjectURL(avatarFile) : undefined)}
        handleAvatarUpload={setAvatarFile}
        delAvatar={deleteAvatar}
        readOnly={component === 'view'}
      />

      <Formik
        initialValues={isCreate ? initialValues : posts[0]}
        onSubmit={onSubmit}
        enableReinitialize
        validationSchema={validationSchemaCreate}
      >
        {({ errors, isValid }) => (
          <Form>
            <Input
              type={'text'}
              name={'author'}
              label={'Author'}
              required
              mb={'25px'}
              readOnly={isView}
            />

            <Input
              height={'40px'}
              name={'direction'}
              label={'Direction'}
              inputType={'2'}
              required
              type={'text'}
              mb={'25px'}
              readOnly={isView}
            />

            <InputTextArea
              rows={3}
              placeholder={'Title'}
              name="title"
              margin={'0 0 25px 0'}
              readOnly={isView}
            />

            <InputTextArea
              rows={5}
              placeholder={'Description'}
              name="description"
              margin={'0 0 25px 0'}
              readOnly={isView}
            />

            <Styled.SaveButton
              content={
                !isShowLoader ? (
                  'Save'
                ) : (
                  <Loader size="small" color={COLORS.primaryRed} height="auto" />
                )
              }
              disabled={isShowLoader}
              type="submit"
              variant="primary"
              mb={'20px'}
              hasErrors={Object.keys(errors).length > 0}
            />

            <Styled.SaveButton
              content={'Cancel'}
              type="button"
              variant="inverse"
              mb={'20px'}
              onClick={onCloseDrawer}
            />

            {!isCreate && !isView && (
              <Styled.SaveButton
                content={
                  !isShowLoader ? (
                    'Delete'
                  ) : (
                    <Loader size="small" color={COLORS.primaryRed} height="auto" />
                  )
                }
                disabled={isShowLoader}
                type="submit"
                variant="primary"
              />
            )}
          </Form>
        )}
      </Formik>

      {isLoader && !isCreate ? <Loading className="full-screen" /> : null}
    </AddEditLayout>
  );
};
