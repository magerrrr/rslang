import { Button, Link, withStyles } from '@material-ui/core';
import styled from 'styled-components';

const FormContainer = styled.div`
display: flex;
box-sizing: border-box;
width: 300px;
background-color: #f4f3fa;
padding: 30px;
margin-top: 30px;
border-radius: 20px;
`;

const StyledForm = styled.form`
width: 100%;
`;

const StyledInput = styled.input`
width: 100%;
box-sizing: border-box;
padding: 5px 10px;
border: 1px solid #c1b3f1;
border-radius: 5px;
margin-bottom: 20px;

&:focus {
  outline-color: #a196ca;
}
`;

const StyledButton = withStyles({
root: {
  background: 'linear-gradient(45deg, #9a8fb8 30%, #c1b3f1 90%)',
  borderRadius: 5,
  border: 0,
  color: 'white',
  height: 36,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgb(136 121 148 / 30%)',
  width: '100%',
  marginTop: 10,
},
label: {
  textTransform: 'uppercase',
},
})(Button);


const linkStyles:any = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
    border: 0,
    color: '#c1b3f1',
    height: 36,
    padding: '0 30px',
    width: '100%',
    marginTop: 10,
    textTransform: 'capitalize',
    cursor: 'pointer',
  }
};

const StyledLink = withStyles(linkStyles)((props:any) => {
  const { children, ...other } = props;

  return (
    <Link {...other}>{children}</Link>
  )
});

export {
  FormContainer,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledLink,
}
