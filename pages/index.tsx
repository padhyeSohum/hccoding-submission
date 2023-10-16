import Page from '@/components/page';
import Link from 'next/link';

export default function Home () {
    return (
        <Page>
            <h1>Welcome</h1>
            <div className="hero">
                <p className="opening-message">
                    We are a team that would like to raise awareness about COVID-19 in the public. Although the world 
                    can be seen as winning in its fight against COVID-19, it is still important to keep safe and
                    isolate if you have any symptoms.
                </p>
                <div className="link-to-screener-container">
                    <div className="link-to-screener">
                        <Link href="/screener" className="">
                            <p>
                                Screen yourself for COVID-19.
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </Page>
    )
}