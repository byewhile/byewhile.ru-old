import "./home.css";

import { Link } from "react-router-dom";

const Home = () => {
    const pages = [
        {
            title: "😂 Найди emoji 😭",
            url: "/find-emoji",
        },
    ];

    return (
        <main className="homePage">
            {pages.map(page => (
                <Link key={page.url} to={page.url}>
                    <div>
                        <span>{page.title}</span>
                    </div>
                </Link>
            ))}
        </main>
    )
}

export default Home