import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoLarge from '../assets/images/logo-large.svg';
import iconOverview from '../assets/images/icon-nav-overview.svg';
import iconBudgets from '../assets/images/icon-nav-budgets.svg';
import iconPots from '../assets/images/icon-nav-pots.svg';
import iconBills from '../assets/images/icon-nav-recurring-bills.svg';
import IconReceipt from '../components/Icon/IconReceipt';
import IconMinimize from '../components/Icon/IconMinimize';

export default function SideBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const pages = [
    {
      id: 1,
      name: 'Overview',
      icon: <img src={iconOverview} alt="" />,
      to: '/',
    },
    {
      id: 2,
      name: 'Transactions',
      icon: <IconReceipt color="#B3B3B3" size={24} />,
      to: '/transactions',
    },
    {
      id: 3,
      name: 'Budgets',
      icon: <img src={iconBudgets} alt="" />,
      to: '/budgets',
    },
    { id: 4, name: 'Pots', icon: <img src={iconPots} alt="" />, to: '/pots' },
    {
      id: 5,
      name: 'Recurring Bills',
      icon: <img src={iconBills} alt="" />,
      to: '/recurring-bills',
    },
  ];

  return (
    <div className="hidden lg:block ">
      {isSideBarOpen && (
        <div className="bg-grey-900 w-75 h-screen flex flex-col justify-between py-10 px-8 rounded-r-2xl">
          <div className="flex flex-col gap-16">
            <img src={logoLarge} alt="logo Finance app" className="w-30.5" />
            <ul className="flex flex-col gap-8 text-grey-300">
              {pages.map((p) => (
                <li key={p.id} className="">
                  <NavLink to={p.to} className="flex gap-4 items-center">
                    {p.icon}
                    <span>{p.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="flex gap-4 cursor-pointer"
            onClick={() => setIsSideBarOpen(false)}
          >
            <IconMinimize />
            <p className="text-grey-300">Minimize Menu</p>
          </button>
        </div>
      )}
    </div>
  );
}
