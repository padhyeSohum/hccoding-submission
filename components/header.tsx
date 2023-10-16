import Link from 'next/link';
import Image from 'next/image';
import LogoLight from '../public/logo-light.png';

export default function Header () {

    const links = [
        {
            link: "/",
            navbarTitle: "Home",
            key: "home",
        },
        {
            link: "/team",
            navbarTitle: "Team",
            key: "team",
        },
        {
            link: "/contact",
            navbarTitle: "Contact",
            key: "contact",
        },
        {
            link: "/screener",
            navbarTitle: "Screener",
            key: "screener",
        },
    ]

    return (
        <header>
            <title>SAAS</title>
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

                {links.map(({link, navbarTitle, key}) => 
                    <Link 
                        href={link}
                        key={key}
                        className="header-item"
                    >
                        {navbarTitle}
                    </Link>
                )}
            </div>
        </header>
    );
}