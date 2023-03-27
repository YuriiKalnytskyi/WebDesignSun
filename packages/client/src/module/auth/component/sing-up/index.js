import React from 'react';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';

import { Input, Loader } from '../../../common/component';
import { COLORS } from '../../../../theme';
import { ROUTER_KEYS } from '../../../common/constants';
import { singUpValidation } from '../../validation/sing-up.validation';

import * as Styled from '../login/login.styled';
import { inputsSingIn } from '../../constants';
import { singIn } from '../../../../services/authServise';

const SingUp = () => {
  const history = useHistory();

  const onError = (res) => {
    toast.error(res.response.data.message);
  };

  const onSuccess = () => {
    history.push(ROUTER_KEYS.LOGIN);
  };

  const { mutate, isLoading } = useMutation((req) => singIn(req), { onSuccess, onError });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.HeaderTitle>Sing In</Styled.HeaderTitle>

        <Formik
          initialValues={{ email: '', password: '', fullName: '' }}
          onSubmit={onSubmit}
          enableReinitialize
          validationSchema={singUpValidation}
        >
          {({ errors }) => (
            <Form>
              {inputsSingIn.map(({ name, label, type, inputType }, index) => (
                <Input
                  key={index}
                  type={type}
                  name={name}
                  label={label}
                  required
                  mb={'25px'}
                  inputType={inputType}
                />
              ))}

              <Styled.SaveButton
                content={
                  !isLoading ? (
                    'Save'
                  ) : (
                    <Loader size="small" color={COLORS.primaryRed} height="auto" />
                  )
                }
                disabled={isLoading}
                type="submit"
                variant="primary"
                mb={'20px'}
                hasErrors={Object.keys(errors).length > 0}
              />

              <Styled.SaveButton
                content={'Login'}
                type="button"
                variant="inverse"
                mb={'20px'}
                onClick={() => {
                  history.push(ROUTER_KEYS.LOGIN);
                }}
              />
            </Form>
          )}
        </Formik>
      </Styled.Content>
    </Styled.Container>
  );
};
export default SingUp;
