import styled from "styled-components";

const StyledImg1 = styled.img`
  //margin: -5px 8px;
`
const StyledImg2 = styled.img`
  margin-top: 2px;
  transform: scale(2);
`

const Button = (
    {
        onClick,
        color,
        text,
        backgroundColor,
        rightImg,
        leftImg,
        classname,
        borderRadius,
        fontSize

    }) => {

    const style = {
        padding: '7.5px 14.5px',
        borderRadius,
        border: 'none',
        lineHeight: '24px',
        textAlign: 'center',
        fontSize,
        color: color ? color : 'white',
        backgroundColor : backgroundColor ? backgroundColor : 'unset',
        display: 'grid',
        gridGap: '6px',
        gridTemplateColumns: '1fr 2fr 1fr'
    }

    return(
        <button
            className={classname}
            onClick={onClick}
            style={style}
        >
            <StyledImg1 src={leftImg} alt={'>'}/>
            {text}
            <StyledImg2 src={rightImg} alt={'>'}/>
        </button>
    )
}

export default Button;