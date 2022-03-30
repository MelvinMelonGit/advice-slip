import styled from 'styled-components'

export const AdviceCardStyles = styled.div`
    background-color: hsl(217, 19%, 24%);
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    border-radius: 0.5rem;
    max-width: 35vw;

    @media only screen and (max-width: 60rem) {
        max-width: 50vw;
    }

    @media only screen and (max-width: 48rem) {
        max-width: 70vw;
    }
    
`

export const AdviceCardID = styled.small`
    color: hsl(150, 100%, 66%);
    text-transform: uppercase;
    font-weight: light;
    letter-spacing: 0.2rem;
    margin-top: 1rem;
    font-size: 0.7rem;
`

export const AdviceCardQuote = styled.blockquote`
    font-weight: bold;
    color: hsl(193, 38%, 86%);
    margin-top: 1rem;
    font-size: 1.1rem;
`

export const AdviceCardButton = styled.button`
    background-color: hsl(150, 100%, 66%);
    cursor: pointer;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -2.5rem;

    &:hover {
        box-shadow: 0 0 1rem 0.2rem hsl(150, 100%, 66%);
    }
`

export const AdviceCardDividerImg = styled.img`
    margin: 1.5rem 0;
    max-width: 90%;
`

export const AdviceCardButtonImg = styled(AdviceCardDividerImg)`
    max-width: 50%;
`