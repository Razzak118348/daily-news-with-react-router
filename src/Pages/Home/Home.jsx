import Header from "../Share/Header/Header";
import LeftSideNav from "../Share/LeftSideNav/LeftSideNav";
import Navbar from "../Share/Navbar/Navbar";
import RightSideNav from "../Share/RightSideNav/RightSideNav";


const Home = () => {
    return (
        <div >

            <Header></Header>
            <Navbar></Navbar>
            <h2 className="font-poppins font-bold text-3xl ">this is home  </h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10">
                <div><LeftSideNav>
                    </LeftSideNav></div>
                    <div className="md:col-span-2 text-4xl font-bold">News comming</div>
                <div><RightSideNav>
                    </RightSideNav></div>     
            </div>

        </div>

    );
};

export default Home;