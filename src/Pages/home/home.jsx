import React from 'react'
import Chart from '../../Components/Charts/Chart';
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo';
import './home.css'
import {userData} from '../../dummyData'
import WidgetSm from '../../Components/widgetSm/WidgetSm';
import WidgetLg from '../../Components/widgetLg/WidgetLg';
function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title='User Analytics' grid dataKey='ActiveUser'/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    );
}

export default Home;
