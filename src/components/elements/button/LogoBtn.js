import styled from "styled-components";
import './index.css';
import {GridBox2} from "../../pages/page-components/other/grid-box2";


const Button = (
    {
        width,
        margin,
        data,
        apiImg,
    }) => {


    const Styled = styled.a`
      border: none;
      cursor: pointer;
      width: ${width};
      margin: ${margin};
      background-color: unset;
      text-decoration: none;
    `

    return(
        <Styled
            href={'/'}
        >
            <GridBox2
                apiImp={apiImg}
                textAlign={'left'}
                titleFontSize={'32px'}
                data={data}
                imgWidth={'55px'}
                imgHeight={'55px'}
            />
        </Styled>
    )
}

export default Button;