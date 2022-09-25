import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import React from "react";
import Details from "./Details";


import Nav from "./Nav";
import PS from "./PS";
import Steps from "./Steps";
import Table from "./Table";
import TimeLine from "./Timeline";

import Title from "./Title";
import Footer from "./Footer";
import FAQ from "./FAQ";
import Pages from "./Pages";
import Members from "./Members";
import Stats from "./Stats";
import Domains from "./Domains";
import Guidelines from "./Guidelines";



const Home = () => {
    return (
        <div class="py-0 bg-black">
            <Nav />


            <Title />
            <Steps />
            <Domains/>
            <Footer />

        </div>
    )
}
export default Home;