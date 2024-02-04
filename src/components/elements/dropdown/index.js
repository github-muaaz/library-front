
import './index.css'
import DoubleIconButton from "../button/DoubleIconButton";

const CustomDropDown = ({
    leftImg,
    rightImg,
    text,
    bkgColor,
    links
                        }) => {

    return(
        <div className="dropdown">
            <DoubleIconButton
                borderRadius={'12px 0 0 12px'}
                text={text}
                backgroundColor={bkgColor}
                classname={'drop-btn'}
                rightImg={rightImg}
                leftImg={leftImg}
                color={'rgb(105, 96, 205)'}
                fontSize={'13px'}
            />
            <Frame
                className="dropdown-content"
            >
                {
                    links.map((link, index) => {
                            return <A
                                key={index}
                                href={'/' + getUrl(link)}
                                text={link}
                            />
                        }
                    )
                }
            </Frame>
        </div>
    )
}

export default CustomDropDown;