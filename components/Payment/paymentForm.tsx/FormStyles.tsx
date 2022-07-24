import styled from "styled-components";

export const ButtonWrapper = styled.button`
  outline: none;
  border: 2px solid #f2f2f2;
  background-color: #fff;
  width: 100%;
  height:1.5rem ;
  max-width: 100%;
  padding: 2rem 5rem;
  cursor: pointer;
  display:flex ;
  align-items:center ;
  justify-content:center ;
  border-radius:0.5rem ;

  &:focus {
    border: 2px solid #9792EB;
    color:#9792EB;
    opacity:1;
    font-weight:500 ;
  }
`;

export const RentOptionWrapper = styled.div`
  .rent-option {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    opacity:0.6 ;
  }
`;

export const InputWrapper = styled.div`
  /* input.tsx */
  .input {
    width: 100%;
    height: 2rem;
    padding:1.5rem 0 1.5rem 1rem;
    display:flex ;
    align-items:center ;
    border: 2px solid #f2f2f2;
    border-radius: 0.5rem;
    /* border: none; */
  }

  .requirements {
    padding: 0 30px 0 50px;
    /* color: #999; */
    max-height: 0;
    transition: 0.28s;
    overflow: hidden;
    color: red;
    font-style: italic;
  }
  .valid {
    display: none;
  }

  .input:valid:not(:placeholder-shown) ~ .valid {
    color: green;
    font-weight:800;
    display:block ;
  }

  .input:focus {
    outline: none;
    border: 2px solid #9792EB;
  }

  .input:valid:not(:focus):not(:placeholder-shown) {
    border: 1px solid #333333;
  }
  .input:invalid:not(:placeholder-shown) ~ .requirements {
    max-height: 200px;
    padding: 0 30px 20px 50px;
  }

  .input:invalid:not(:focus):not(:placeholder-shown) {
    background: pink;
  }

  .input:invalid:not(:placeholder-shown) {
    border: 2px solid #900;
  }
`;
