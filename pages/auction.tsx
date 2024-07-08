import React from "react";
import Layout from "../components/elements/layout/layout";

const Auction = () => {

    React.useEffect(() => {
        window.location.replace('https://www.milbauctions.com/iSynApp/allAuction.action?sid=1103205&selectedCatId=26001&rc=25&pgmode1=teamsearch&pgcust1=riverdogs&queryFieldJoinWithOR=Y&queryFieldList[0].strValue1=panname_team_s&queryFieldList[0].strValue2=riverdogs&queryFieldList[1].strValue1=panname_teamLeagueSeller_s&queryFieldList[1].strValue2=riverdogs&sort=timeleft_asc&layout=listview&&&qMode=open&pgcust4=')
    }, [])
    return (
        <Layout title="Rainbow Jersey Auction" description="Auction is Live" imageUrl="https://vafloc02.s3.amazonaws.com/isyn/images/f515/img-4251515-f.jpg">
            <></>
        </Layout>
    );
};

export default Auction;
