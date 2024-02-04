import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import AccountSvg from '../../../assets/icons/UserImg.svg';
import LogoBtn from "../../components/elements/button/LogoBtn";

const StyledDiv = styled.div`
  padding: 1% 8%;
  border-bottom: 1px solid rgb(240, 240, 240);
  display: grid;
  grid-template-columns: 1fr 3.5fr 1fr;
  grid-gap: 30px;
  position: relative;
`

const StyledDivSignBtn = styled.div`
  margin: 10px 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1.8fr;
`

const Navbar = ({
                    website
                }) => {

    const data = {
        title: website.name,
        subtitle: website.subtitle,
        img: website.logo
    }

    // const [open, setOpen] = useState(false)

    const ref = useRef()

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isMenuOpen && ref.current && !ref.current?.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])


    return (
        <StyledDiv>
            <LogoBtn
                apiImg
                data={data}
                width={'180px'}
            />

            <SearchInputBox/>

            <StyledDivSignBtn>
                <Button
                    borderRadius={'8px'}
                    text={'Sign In'}
                    backgroundColor={'rgb(240, 238, 253)'}
                    color={Color}
                    onClick={() => setIsMenuOpen(true)}
                />
                <IconyTextButton
                    text={'Sign Up'}
                    backgroundColor={Color}
                    src={AccountSvg}
                />
            </StyledDivSignBtn>

            {isMenuOpen ?
            <SignInBox/>
                :
                ''
            }
        </StyledDiv>
    )
}

export default Navbar;