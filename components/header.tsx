import Link from 'next/link';
import Image from 'next/image';
import LogoLight from '../public/logo-light.png';

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
                <Link 
                    href="/"
                    className=""
                >
                        <Image 
                            src={LogoLight}
                            width={65}
                            height={65}
                            alt="Logo"
                        />
                </Link>
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