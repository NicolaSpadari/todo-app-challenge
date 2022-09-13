import List from "./List";

const HomePage = () => {
    return (
        <div className="crate">
            <p className="text-white text-3xl lg:text-7xl font-bold">
                Todo list
            </p>

            <List />
        </div>
    )
}

export default HomePage;