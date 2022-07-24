import styled from "styled-components";

export const UtilityButtonWrapper = styled.button`
  width: 100%;
  height:1.5rem ;
  max-width: 100%;
  padding: 2rem 5rem;
  cursor: pointer;
  display:flex ;
  align-items:center ;
  justify-content:center ;
  border-radius:0.5rem ;
  border:none ;
  text-transform: uppercase;
  color: #F9FEFC;
  margin-bottom: 5rem;


`
export const ProgressCircleWrapper = styled.div`

    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: var(--kwaba-white);
  
  .percentage {
    position: relative;
    width: 100%;
    height: 100%;
    transform: rotate(270deg);
    
  }
  
  .percentage svg {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .percentage svg circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 10;
    transform: translate(1rem, 1rem);
    stroke:  #000000;
    stroke-dasharray: 126;
    stroke-dashoffset: 126;
  }
  
  .percentage svg circle:nth-child(1) {
      stroke-dashoffset: 0;
      stroke: #D6D6D6;
  }
  
  
  .percentage svg circle:nth-child(2) {
      stroke: #25DC98;
      transition: all .3s ease;
  }
  `