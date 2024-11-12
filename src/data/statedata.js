import { BsBarChartFill } from "react-icons/bs";
import { TbCurrencyDollar } from "react-icons/tb";
import { IoDocuments } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export const stateData=[
  {
    name: 'Earnings',
    value: '$350.4',
    bgColor: 'bg-secondary',
    startContent: <BsBarChartFill className='w-1/2 h-1/2 text-primary-60'/>,
  },
  {
    name: 'Spend this month',
    value: '$642.39',
    bgColor: 'bg-secondary',
    startContent: <TbCurrencyDollar className='w-1/2 h-1/2 text-primary-60'/>,
  },
  {
    name: 'Sales',
    value: '$574.34',
    percent: '+24.5%',
    since: 'Since last month',
  },
  {
    name: 'Your balacne',
    value: '$1,000',
    endContent: "/images/usa.png"
  },
  {
    name: 'New Tasks',
    value: '154',
    bgColor: 'bg-gradient-to-r from-primary-40 to-secondary-40',
    startContent: <IoMdCheckmarkCircleOutline className='w-1/2 h-1/2 text-white'/>,
  },
  {
    name: 'Total Projects',
    value: '2935',
    bgColor: 'bg-secondary',
    startContent: <IoDocuments className='w-1/2 h-1/2 text-primary-60'/>,
  },]

