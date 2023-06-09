import styled from 'styled-components';
import { COLORS, SPACES, FONTS, MEDIA } from '../../../../theme';

export const Container = styled.div`
  width: 100%;
  background: ${COLORS.bodyText};
`;

export const Content = styled.div`
  width: 1320px;
  margin: 0 auto;
  padding: 4rem 0 2.75rem 0;
  
    @media screen and (max-width: ${MEDIA.laptop_m}) {
    width: 80%;
  }
`;

export const BlocContainer = styled.div`
  width: 100%;

  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 24%);
  grid-gap: 5px;

  @media screen and (max-width: ${MEDIA.tablet_s}) {
    grid-template-columns: repeat(auto-fill, 150px);
  }
  @media screen and (max-width: ${MEDIA.tablet}) {
    grid-template-columns: repeat(auto-fill, 295px);
  }
`;

export const Bloc = styled.div`
  min-width: 25%;
  display: flex;
  flex-direction: column;
`;

export const BlocTitle = styled.span`
  font-family: ${FONTS.FAMILIES.poppins};
  font-weight: ${FONTS.WEIGHTS.medium};
  font-size: ${FONTS.SIZES.xxxl};
  line-height: ${FONTS.SIZES.lxxs};

  color: ${COLORS.white};

  margin-bottom: ${SPACES.xxxxl};
`;

export const BlocText = styled.span`
  font-family: ${FONTS.FAMILIES.poppins};
  font-weight: ${FONTS.WEIGHTS.medium};
  font-size: : ${FONTS.SIZES.m};
  line-height: : ${FONTS.SIZES.xxxxl};
  
  color: ${COLORS.white};
  
  margin-bottom: ${SPACES.xxs} ;
  
  
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Text = styled.span`
  font-family: ${FONTS.FAMILIES.poppins};
  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: : ${FONTS.SIZES.m};
  line-height: : ${FONTS.SIZES.lx};
  
  color: ${COLORS.white};
   
`;

export const Logo = styled.img`
  width: 278px;
  height: 112px;

  margin-bottom: ${SPACES.xl};
`;

export const Icon = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${COLORS.white};
  margin-right: 10px;
`;
