import styled from "styled-components";

export const ButtonWrapper = styled.button`
  outline: none;
  border: 1px solid grey;
  background-color: #fff;
  width: 100%;
  max-width: 100%;
  padding: 2rem 5rem;
  cursor: pointer;
  opacity: 0.7;

  :focus {
    border: 1px solid purple;
  }
`;

export const RentOptionWrapper = styled.div`
  .rent-option {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

export const InputWrapper = styled.div`
  /* input.tsx */
  .input {
    width: 100%;
    height: 100%;
  }

  .input {
    width: 100%;
    height: 3rem;
    padding: 0.5rem;
    border: 1px solid #333333;
    border-radius: 0.25rem;
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
    border: 2px solid purple;
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
