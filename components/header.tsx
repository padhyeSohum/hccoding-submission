import Link from 'next/link';

export default function Header () {
    const links = [
        {
            link: "/",
            name: "Home",
            key: "home",
        },
        {
            link: "/team",
            name: "Team",
            key: "team",
        },
        {
            link: "/contact",
            name: "Contact",
            key: "contact",
        },
        {
            link: "/screener",
            name: "Screener",
            key: "screener",
        },
    ]

    return (
        <header>
            <div className="logo">
                <Link href="/">logologo</Link>
            </div>
            <div className="header-items">

                {links.map(({link, name, key}) => 
                    <Link 
                        href={link}
                        key={key}
                        className="header-item"
                    >
                        {name}
                    </Link>
                )}
            </div>
        </header>
    );
}