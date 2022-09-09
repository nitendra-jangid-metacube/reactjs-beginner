import React from "react";
import CommentContent from "./CommentContent";
import "./Comment.module.css";
import Header from "../Common/Header";

class Comment extends React.Component {

    constructor(props) {
        super(props);

        this.commentData = [
            {
                'commentTitle' : 'India`s waterlogged',
                'commentDesc' : 'A poster that has gone viral in the past 24 hours is a graphic parody on the state of affairs in a city famously described as India`s IT capital - Bengaluru (also known as Bangalore).'
            },
            {
                'commentTitle' : 'Listen to your body',
                'commentDesc' : 'There was one in particular that her doctor had noticed the year before. But at this visit, the non-cancerous tumor was 10 centimeters larger. Too large to keep being ignored.'
            },
            {
                'commentTitle' : 'Bumbling as agriculture',
                'commentDesc' : 'Sid Miller appeared genuinely surprised when during floor debate over his 2011 bill requiring a sonogram before an abortion, Rep. Carol Alvarado brandished the foot-long probe a doctor would have to insert inside the patient to meet the law’s requirements.'
            },
            {
                'commentTitle' : 'Fat Leonard',
                'commentDesc' : 'A Malaysian businessman who pleaded guilty in the US navy’s worst corruption scandal has escaped house arrest in San Diego after cutting off his monitoring bracelet, federal authorities have said.'
            }
        ]
        this.state = { };
    }

    render() {
        return (<>
            <Header />
            <section>
                <div className="container">
                    <div className="col-md-6 offset-3">
                    <h1 className="h1 text-center my-3">Comment Box</h1>
                    <CommentContent commentData={this.commentData}/>
                    </div>
                </div>
            </section>
            </>
        );
    }
}
export default Comment;