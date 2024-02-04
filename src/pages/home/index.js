import React from "react";
import Navbar from "../components/navbar";
// import TopDisplay from "../page-components/other/top-display";
// import ServiceInfo from "../page-components/other/service-info";
// import {Offer} from "../page-components/other/offer";
// import {Flash} from "../page-components/other/flash";
// import {OnSale} from "../page-components/other/on-sale";
// import {Featured} from "../page-components/other/featured";
// import {Testimonial} from "../page-components/other/testimonial";
// import {News} from "../page-components/other/news";
// import {Info} from "../page-components/other/info";
// import {Subscribe} from "../page-components/other/subscribe";
// import {Footer} from "../page-components/other/footer";
// import {Recommendation} from "../page-components/other/recommendation";

const Home = ({website}) => {
    //
    // const style = {
    //     backgroundColor: '#909090',
    //     padding: '0'
    // }

    // const addFeedback = () => {
    //
    //     axios.post(
    //         BASE_PATH + "/feedback",
    //         {
    //             message: 'sdsdsa',
    //             point: 3
    //         },
    //         {
    //             headers:{
    //                 Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdXBlckFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY4NjkyNjc4OCwiZXhwIjoxNjg2OTk4Nzg4fQ.vP4Rh-Ky_q178I0fHkoqVJlJ3GNGv3je8or6j5oWBGGmmRQ4ZvCvOfpUF_WwA-HzwLTplvgI5imNJTZfQ3P5xA'
    //             }
    //         }
    //     ).then(res =>
    //         console.log(res)
    //         // setBooks(res.data.data)
    //     ).catch(err =>
    //         toast.error(err.response.data.errors[0].msg)
    //     )
    // }

    return(
        <React.Fragment>
            <Navbar website={website}/>

            {/*<TopDisplay/>*/}

            {/*<ServiceInfo/>*/}

            {/*<Recommendation/>*/}

            {/*<Offer/>*/}

            {/*<Flash/>*/}

            {/*<OnSale/>*/}

            {/*<Featured/>*/}

            {/*<Testimonial/>*/}

            {/*<News/>*/}

            {/*<Info/>*/}

            {/*<Subscribe/>*/}

            {/*<Footer website={website}/>*/}

        </React.Fragment>
    )
}

export default Home;