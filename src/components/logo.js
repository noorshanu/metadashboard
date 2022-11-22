import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';


export const Logo = styled((props) => {
  const { variant, ...other } = props;

  return (
    <>
    <div className='d-flex'>
      <img src="https://ik.imagekit.io/cforcrypto/metaball/Logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668448432198" alt=""/>
      <h1>MetaBall 
Club</h1>
    </div>
    </>
  );
})``;

Logo.defaultProps = {
  variant: 'primary'
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'primary'])
};
