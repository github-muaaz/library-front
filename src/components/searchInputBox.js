import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {toast} from "react-toastify";
import axios from "axios";
import MenuSvg from "../../../assets/icons/grid.svg";
import ArrowBottomSvg from "../../../assets/icons/bottomArrow.svg";
import SearchSVG from "../../../assets/icons/search.svg";
import {BASE_PATH} from "../utils";
import {useOutsideAlerter} from "../utils/useOutsideAlerter";
import CustomDropDown from "./elements/dropdown";

const StyledDivSearch = styled.div`
  margin: 10px 0;
  border-radius: 13px;
  border: solid 1px rgb(226, 226, 226);
  display: grid;
  grid-template-columns: 1fr 5fr 0.4fr;
`

const Styled = styled.div`
  position: absolute;
  top: 100%;
  background-color: #ffffff;
  padding: 15px;
  z-index: 999;
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
  border-radius: 5px;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);
`

const Styled1 = styled.div`
  position: relative;
`
const SearchInputBox = () => {

    const [search, setSearch] = useState();

    const [blur, setBlur] = useState(false);

    const [searchBooks, setSearchBooks] = useState({});

    const onBlur = () => {
        setBlur(false)
    }

    const onFocus = () => {

        if(searchBooks?.books?.length > 0)
            setBlur(true)
    }

    const getSearch = () => {

        if(search !== '' && search)
            axios.get(
                BASE_PATH + '/book/search',
                {
                    params: {
                        search: search
                    }
                }
            ).then(res =>
                {
                    setSearchBooks(res.data.data)

                    if(res.data.data.books?.length === 0)
                        setBlur(false)
                }
            ).catch(err =>
                toast.error(err.response.data.errors[0].msg)
            )
    }

    const doSearchAgain = () => {

        if (searchBooks?.books?.length === 0)
            toast.info('No Book Found')
        else{
            getSearch()
            onFocus()
        }

    }

    const doSearch = (e) => {

        if (e.target.value === '') {
            setSearchBooks({})
            setSearch(e.target.value)
            setBlur(false)
        } else {
            setSearch(e.target.value)
            setBlur(true)
        }

    }



    useEffect(() =>
            getSearch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        ,[search]
    )

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, onBlur);

    return(

        <StyledDivSearch>
            <CustomDropDown
                links={menu}
                leftImg={MenuSvg}
                rightImg={ArrowBottomSvg}
                text={'Menu'}
            />

            <Styled1>
                <Input
                        height={'100%'}
                        width={'100%'}
                        onChange={(e) => doSearch(e)}
                        onFocus={onFocus}
                        value={search}
                        placeholder={'Search over 30 million book title'}
                        color={Color}
                        border={'1px rgb(226, 226, 226) solid'}
                    />

                    {blur ?
                        <Styled
                            ref={wrapperRef}
                        >
                            {searchBooks?.books?.slice(0, 10)?.map((book, index) =>
                                <A
                                    fontSize={'15px'}
                                    key={index}
                                    href={'book/' + getUrl(book.id)}
                                    text={book.title}
                                />
                            )}
                        </Styled>
                        :''
                    }

            </Styled1>

            <IconyButton
                onClick={doSearchAgain}
                borderRadius={'0 12px 12px 0'}
                src={SearchSVG}
            />
        </StyledDivSearch>
    )
}

export default SearchInputBox