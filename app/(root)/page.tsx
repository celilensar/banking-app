import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
const loggedIn= {firstName: 'Ensar', lastName: 'AVCI', email: 'ensar_avc@outlook.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title= "Welcome"
          user= {loggedIn?.firstName || 'Guest'}
          subtext= "Access and manage your account and transactions efficiently."
          /> 
          <TotalBalanceBox
          accounts={[]}
          totalBanks= {1}
          totalCurrentBalance= {1250.38}
          />    
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSideBar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 125.50},{currentBalance: 302.50}]}
      />

        
    </section>
  )
}

export default Home