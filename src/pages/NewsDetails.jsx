import { useLoaderData, Link } from "react-router-dom"; // ✅ added Link import
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0]; // assuming it's an array with one news item
    console.log(data);

    return (
        <div>
            <header>
                <Header />
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 mt-5">
                <section className="col-span-9">
                    <h2 className="text-2xl font-semibold mb-3">Dragon News</h2>

                    <div className="bg-white shadow-md rounded-lg p-6">
                        <img className="rounded mb-4" src={news?.image_url} alt={news?.title} />
                        <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                        <p className="text-gray-700 mb-4">{news.details}</p>
                        <div className="text-sm text-gray-500 mb-4">
                            <p>Author: {news.author?.name || "Unknown"}</p>
                            <p>Published: {news.author?.published_date || "N/A"}</p>
                        </div>

                        {/* ✅ Back Button */}
                        <Link
                            to="/"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </section>

                <aside className="col-span-3">
                    <RightNav />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;
