import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews";
import LeftNavBar from "../components/LayoutComponents/LeftNavBar";
import RightNavBar from "../components/LayoutComponents/RightNavBar";
import NavBar from "../components/NavBar";




const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>

            </header>
            <nav className="w-11/12 mx-auto py-4">
                <NavBar></NavBar>
            </nav>
            <main className="w-11/12 mx-auto py-4 pt-5 grid md:grid-cols-12">
                <aside className="left col-span-3">
                    <LeftNavBar></LeftNavBar>
                </aside>
                <section className="col-span-6">
                    
                </section>
                <aside className="col-span-3">
                    <RightNavBar></RightNavBar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;