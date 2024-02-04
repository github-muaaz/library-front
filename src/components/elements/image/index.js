import styled from "styled-components";

const Image = ({
    src,
    alt,
    width,
    margin,
    height,
    borderRadius,
    style,
               }) => {

    const StyledImg = styled.img`
      width: ${width ? width : '100%'};
      height: ${height ? height : '100%'};
      margin: ${margin};
      border-radius: ${borderRadius};
    `
    return(
        <StyledImg
            style={style}
            src={src}
            alt={alt}
        />
    )
}

export default Image;