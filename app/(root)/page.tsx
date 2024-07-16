import React from "react";
import HeaderBox from "../../components/ui/HeaderBox";
import TotalBalanceBox from "../../components/ui/TotalBalanceBox";
import RightSideBar from "../../components/ui/RightSideBar";

const Home = () => {
  const loggedIn = {
    firstName: "Gabriel",
    lastName: "Heyo",
    email: "gabbygabs@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account transaction efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSATIONCS
      </div>

      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 920 }]}
      />
    </section>
  );
};

export default Home;
