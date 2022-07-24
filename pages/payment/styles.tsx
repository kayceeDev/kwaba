import styled from "styled-components";



export const Form = styled.form<{approve?:string}>`
margin:0 auto ;
width: 80%;
display: flex ;
flex-direction: column ;
padding-top:  ${props=> props.approve && "4rem"};
gap:2rem ;

.form-header{
h2{
    font-size:1rem ;
    @media screen and (min-width: 40rem) {
        font-size:1.5rem ;
}

}
span{
    display:none ; 
    @media screen and (min-width: 40rem) {
        display:block;
}
}
width:100% ;
    display:flex ;
    justify-content: space-between ;
    align-items:center ;
}
.progress{
    display:flex ;
    align-items: center;
 
}


`

export const FormContainer = styled.main<{approve?: string}>`
margin:0 auto ;

width: 50%;
margin-bottom:1rem ;
border-left:  ${props=> props.approve? "3px solid  #EDECFC" : "2px solid  #F2F2F2"};
border-right:  ${props=> props.approve? "3px solid  #EDECFC" : "2px solid  #F2F2F2"};
border-bottom:   ${props=> props.approve? "3px solid  #EDECFC" : "2px solid  #F2F2F2"};
box-shadow: 2px 5px 2px #EDECFC ;
border-bottom-left-radius:1rem ;
border-bottom-right-radius:1rem ;


`

