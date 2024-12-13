import RightSideBar from '@/components/RightSideBar';
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
    const loggedIn = await getLoggedInUser();
    console.log(loggedIn);

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="welcome"
                        user={loggedIn?.name || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently" />


                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSideBar user={loggedIn} transcactions={[]} banks={[{ currentBalance: 123.50 }, { currentBalance: 500.43 }]} />
        </section>
    )
}

export default Home
