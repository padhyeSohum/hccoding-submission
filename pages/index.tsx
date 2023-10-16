import Page from '@/components/page';
import Link from 'next/link';

export default function Home () {
    return (
        <Page>
            <h1>Welcome</h1>
            <div className="hero">
                <p className="opening-message">
                    As we navigate the current flu season and the new covid variant, health and safety is crucial. 
                    Complete our Covid 19 screening form to keep yourself and others safe, as well as receive 
                    personalised tips based on your response.  Feel free to reach out on our "Contact Us" page 
                    for any questions or comments. Staying informed, as well as practicing preventive measures can help 
                    us stay healthy as a community. Let's prioritise health, promote awareness, and learn how to combat 
                    the symptoms we are feeling in this flu season.
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