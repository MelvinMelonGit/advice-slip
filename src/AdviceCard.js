import React, { useState, useEffect } from 'react'
import { AdviceCardStyles, AdviceCardID, AdviceCardQuote, AdviceCardButton, AdviceCardDividerImg, AdviceCardButtonImg } from './AdviceCardStyles'
import DiceIcon from './images/icon-dice.svg'
import DividerDesktop from './images/pattern-divider-desktop.svg'
import DividerMobile from './images/pattern-divider-mobile.svg'

function AdviceCard() {

    const [click, setClick] = useState(false)
    const [content, setContent] = useState({ id: 0, advice: '' })
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                setContent({ id: data.slip.id, advice: data.slip.advice })
            })
    }, [click])

    useEffect(() => {
        window.addEventListener('resize', () => {
            window.innerWidth <= 960 ? setMobile(true) : setMobile(false)
        })
    }, [])

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <AdviceCardStyles>
            <AdviceCardID>Advice &#x23;{content.id}</AdviceCardID>
            <AdviceCardQuote>&ldquo;{content.advice}&rdquo;</AdviceCardQuote>
            {mobile ? <AdviceCardDividerImg src={DividerMobile} /> : <AdviceCardDividerImg src={DividerDesktop} />}
            <AdviceCardButton onClick={handleClick}>
                <AdviceCardButtonImg src={DiceIcon} />
            </AdviceCardButton>
        </AdviceCardStyles>
    )
}

export default AdviceCard
