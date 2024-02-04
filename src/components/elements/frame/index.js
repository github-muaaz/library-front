import styled from 'styled-components';

const frame = ({
    style,
    overflowY,
    textAlign,
    gridGap,
    padding,
    margin,
    backgroundColor,
    backgroundImg,
    border,
    borderRadius,
    color,
    width,
    className,
    boxShadow,
    overflow,
    borderBottom,
    borderTop,
    maxHeight,
    justifyContent,
    onClick,
    cursor,
    children
               }) => {

    const StyledDiv = styled.div`
      font-family: OrgonPlan-Medium, sans-serif;
      background-repeat: no-repeat;
      background-size: cover;
      padding: ${padding};
      margin: ${margin};
      border-radius: ${borderRadius};
      grid-gap: ${gridGap};
      cursor: ${cursor};
      border-top: ${borderTop};
      border-bottom: ${borderBottom};
      text-align: ${textAlign};
      border: ${border};
      max-height: ${maxHeight};
      overflow: ${overflow};
      overflow-y: ${overflowY};
      justify-content: ${justifyContent};
      width: ${width};
      box-shadow: ${boxShadow};
      background-color: ${backgroundColor};
      color: ${color ? color : '#fff'};
      background-image: ${backgroundImg ? 'url('+ backgroundImg +')' : 'none'};
    `

    return (
        <StyledDiv
            onClick={onClick}
            className={className}
            style={style}
        >
            {children}
        </StyledDiv>
    )
}

export default frame;