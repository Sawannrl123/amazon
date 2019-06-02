import styled from "styled-components";
import { WHITE_COLOR, SHADOW, TEXT_COLOR, GRAY_COLOR, PRIMARY_COLOR } from '../../utils/globalConstants';

export const TierOneContainer = styled.div`
  box-shadow: ${SHADOW};
  background-color: ${WHITE_COLOR};
  border-radius: 3px;
`;

export const TierOneVideoContainer = styled.div`
  position: relative;
  min-height: 200px;
  background-color: rgba(219, 112, 147, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-height: 250px;
  overflow: hidden;
  cursor: pointer;
`;

export const TierOneVideo = styled.div`
  font-size: 0;
  line-height: 0;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .5);
  }
`;

export const TierOneVideoContent = styled.div`
  padding: 1rem;
  text-align: center;
  position: absolute;
`;

export const TierOneContentContainer = styled.div`
  padding: 1rem;
`;

export const TierOneContent = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: ${TEXT_COLOR};
  margin-bottom: 1rem;
`;

export const TierOneVideoTitle = styled.h4`
  color: ${WHITE_COLOR};
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 1.5;
`;

export const SectionContainer = styled.div`
  border-bottom: 1px solid ${GRAY_COLOR};
`;

export const TierTwoContentContainer = styled.div`
  display: flex;
  padding: 10px;
`;

export const TierTwoContent = styled.div`
  flex: 1;
`;

export const TierTwoImage = styled.div`
  flex: 0 0 75px;
  width: 75px;
  font-size: 0;
  line-height: 1;
  padding-right: 10px;
`;

export const TierTwoTitle = styled.h4`
  color: ${TEXT_COLOR};
  margin-bottom: 5px;
  font-size: 15px;
  line-height: 1.5;
`;

export const TierTwoText = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: ${TEXT_COLOR};
`;

export const TierTwoButton = styled.div`
  padding: 10px;
`;

export const MobileSection = styled.div`
`;

export const ContactForm = styled.form`

`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 15px;
  color: ${TEXT_COLOR};
  border: 1px solid ${PRIMARY_COLOR};
  border-radius: 3px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 15px;
  color: ${TEXT_COLOR};
  border: 1px solid ${PRIMARY_COLOR};
  border-radius: 3px;
  resize: none;
`;