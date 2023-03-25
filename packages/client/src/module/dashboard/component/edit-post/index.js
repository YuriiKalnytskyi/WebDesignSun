import React, { useEffect, useState } from 'react';
import { AddEditLayout } from '../../../common/component/add-edit-layout/add-edit-layout';
import { Formik } from 'formik';
import InputTextArea from '../../../common/component/input/input-text-area';
import * as Styled from '../../dashboard.styled';
import { Loader } from '../../../common/component/loading/loader';
import { COLORS } from '../../../../theme';
import { Loading } from '../../../common/component/loading/loading';

export const EditPost = ({ onCloseDrawer }) => {
  const [isShowLoader, setIsShowLoader] = useState(false);
  const [isLoader, setIsLoader] = useState(true);

  const onSaveButton = () => {
    setIsShowLoader(true);
  };

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

  return (
    <AddEditLayout title={'EditPost'} onCloseButtonClick={onCloseDrawer}>
      <Formik initialValues={{ script: '' }} onSubmit={() => {}} enableReinitialize>
        <InputTextArea rows={3} placeholder={'tets'} name="script" maxLength={300} />
      </Formik>

      <Styled.SaveButton
        content={
          !isShowLoader ? 'Save' : <Loader size="small" color={COLORS.primaryRed} height="auto" />
        }
        disabled={isShowLoader}
        type="button"
        variant="primary"
        onClick={onSaveButton}
        mb={'10px'}
      />

      <Styled.SaveButton
        content={'Cancel'}
        type="button"
        variant="inverse"
        onClick={onCloseDrawer}
      />

      {isLoader ? <Loading className="full-screen" /> : null}
    </AddEditLayout>
  );
};
