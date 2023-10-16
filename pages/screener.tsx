import Page from '@/components/page';
import Link from 'next/link';

export default function Screener () {
    return (
        <Page>
            <h1>Screener</h1>
            <div className="screener-container">
                <p className="screener-message">Complete <a className="screener-message-link" href="https://miro.com/app/board/uXjVNaOQ1_U=/?share_link_id=368735057978">this self-assessment</a> to see your next best course of actions given how you answer the questions.</p>
            </div>
        </Page>
    )
}