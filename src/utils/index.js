import favourite from '../assets/icons/favorite2.svg'
import favourite2 from '../assets/icons/favorite3.svg'
import Image from "../components/elements/image";

export const ACCESS_TOKEN = "AccessToken";
// export const REFRESH_TOKEN = "RefreshToken";
// export const USERNAME = "username";
export const BASE_PATH = 'http://localhost:8090/api';
export const IMAGE_PATH = BASE_PATH + '/file/image/';
export const DOWNLOAD_PATH = BASE_PATH + '/file/download/';

// export const IMG = '../../assets/img/students-reading-book-together-6024654-4989651.png';
// export const ArrowRight = '../../assets/icons/arrow-right.svg';

export const Color = 'rgb(105, 96, 205)';
export const Color1 = 'rgb(121, 112, 221)';
// export const Color2 = 'rgb(180,172,234)';
export const Color3 = 'rgb(240, 238, 253)';
export const ColorGrey = 'rgb(131,131,131)';
export const ColorGrey2 = 'rgb(208,207,207)';
export const ColorGrey3 = 'rgb(227,226,226)';
export const ColorWhite = 'rgb(255,255,255)';
export const ColorBlack = 'rgb(16, 20, 43)';
export const ColorOrange = 'rgb(238, 125, 87)';


export const mapList = function (list) {
    return list.map(item => item).join(', ')
}

export const getPoints = function (point) {

    point = Math.floor(point)

    if(point > 5 || point < 0)
        return 'wrong point count';

    let arr = [];
    for (let i = 0; i < point; i++) {
        arr.push(
            <Image
                height={'20px'}
                width={'20px'}
                key={i}
                src={favourite}
                alt={'star'}
            />
        );
    }

    for (let i = point; i < 5; i++) {
        arr.push(
            <Image
                height={'20px'}
                width={'20px'}
                key={i}
                src={favourite2}
                alt={'star'}
            />
        );
    }

    return arr
}

export const getUrl = function (str) {

    let url = ""
    let c;

    str = str.toLowerCase()

    for (let i = 0; i < str.length; i++) {
        c = str.charAt(i)

        if(c === " ")
            url += ('-')
        else
            url += (c)

    }


    return url
}

export const getNumber = function (num) {

    let res = ''
    let count = 0;

    num = num.toString()

    for (let i = num.length-1; i >= 0; i--) {
        if (count === 3){
            count = 0;
            res += ','
        }

        count++
        res += num.charAt(i)
    }

    num = ''

    for (let i = res.length-1; i >= 0; i--) {
        num += res.charAt(i)
    }

    return num
}

export const getLimitedText = function (text, limit) {
    text = text + ' '
    let index = text.lastIndexOf(' ', limit)

    if (index >= limit)
        return text
    else
        return text.slice(0, index).trim().concat('...')
}

export const getDiscountPrice = function (price, percent) {
    price = price - (price * percent / 100) + ''

    let index = price.indexOf('.')

    return price.substring(0, index + 3)

}

export function getCount(count) {
    if (count > 999) return count / 1000 + 'K+'
    if (count > 999999) return count / 1000000 + 'M+'
    return count
}

export function getReviewPercent(reviews, value) {

    let count = 0;

    reviews.forEach(review =>
        {
            if(value === review.point)
                count++;
        }
    )

    value = ((100 / reviews.length) * count) + ''

    let index = value.indexOf('.')

    if(index === -1)
        return value

    return value.substring(0, index + 3)
}

// export const StyleButton = styled.button`
//     cursor: pointer;
//   outline: none;
//   background-color: #b78103;
//   border: none;
//   padding: 0;
//
// `

export const Lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';


