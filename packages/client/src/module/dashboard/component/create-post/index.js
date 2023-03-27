import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import toast from 'react-hot-toast';

import InputTextArea from '../../../common/component/input/input-text-area';
import { AddEditLayout } from '../../../common/component/add-edit-layout/add-edit-layout';
import { Input, ImageSetup, Loading, Loader } from '../../../common/component';
import { Create, Edit, View } from '../../constants';
import { COLORS } from '../../../../theme';
import { validationSchemaCreate } from '../../validation';
import * as Styled from '../../dashboard.styled';
import { cretePost, deletePost, findPost, updatePost } from '../../../../services/postServise';
import { QUERY_KEYS } from '../../../common/constants';

export const CreatePost = ({ onCloseDrawer, component, id }) => {
  const formData = new FormData();
  const client = useQueryClient();

  const isCreate = component === Create;
  const isView = component === View;
  const title =
    (component === Create && 'Create Post ') ||
    (component === Edit && 'Edit Post ') ||
    (component === View && 'View Post ');

  const [isShowLoader, setIsShowLoader] = useState(false);
  const [avatarString, setAvatarString] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);

  const initialValues = {
    direction: '',
    title: '',
    description: '',
    author: ''
  };

  const onError = (res) => {
    onCloseDrawer();
    toast.error(res.response.data.message);
  };

  const onSuccess = async () => {
    await client.invalidateQueries(QUERY_KEYS.ALL_POST);
  };

  const { mutate: deleteMutate, isLoading: isDeleteLoading } = useMutation(
    (req) => deletePost(req),
    { onSuccess, onError }
  );

  const {
    data,
    refetch,
    isLoading: isFindLoading
  } = useQuery(QUERY_KEYS.FIND_POST, () => findPost(id), { onError, enabled: !isCreate  });

  const isLoading = isFindLoading || isDeleteLoading;

  const deleteAvatar = () => {
    setAvatarString(null);
    setAvatarFile(null);
  };

  const onSubmit = async (data) => {
    setIsShowLoader(true);

    formData.append('image', avatarFile || avatarString);
    formData.append('direction', data.direction);
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('author', data.author);

    component === Create ? await cretePost(formData) : await updatePost(id, formData);

    await client.invalidateQueries(QUERY_KEYS.ALL_POST);

    setIsShowLoader(false);
    onCloseDrawer();
  };

  const onDelete = async () => {
    await deleteMutate(id);
    onCloseDrawer();
  };

  useEffect(() => {
    if (component !== isCreate) {
      refetch();
    }
  }, [component, id]);

  useEffect(() => {
    if (!isCreate) setAvatarString(data?.post?.image);
  }, [data]);

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
        initialValues={isCreate ? initialValues : data?.post}
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

            {!isView && (
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
            )}

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
                onClick={onDelete}
              />
            )}
          </Form>
        )}
      </Formik>

      {isLoading && !isCreate ? <Loading className="full-screen" /> : null}
    </AddEditLayout>
  );
};
