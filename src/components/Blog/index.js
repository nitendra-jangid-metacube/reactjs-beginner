import React from "react";
import BlogCard from "./BlogCard";
import Header from "../Common/Header";

class Blog extends React.Component {

    constructor(props) {
        super(props);

        this.postData = [
            {
                'imgUrl' : 'assets/images/photo-1.png',
                'userName' : 'User 1',
                'postTitle' : 'Price point',
                'postDesc' : 'Belgium’s Stella Artois—whose beer had been synonymous with a higher price point since the early 1300s—introduced the slogan “Reassuringly Expensive” to the UK market in 1982, reframing the beer’s high price point to stand for premium quality and class'
            },
            {
                'imgUrl' : 'assets/images/photo-2.png',
                'userName' : 'User 2',
                'postTitle' : 'AI-powered',
                'postDesc' : 'Start with an AI-powered slogan maker like Copy.ai’s Motto Generator tool. Use it to brainstorm various ideas and angles until you find a timeless, catchy slogan that captures your business’s identity and mission.'
            },
            {
                'imgUrl' : 'assets/images/photo-3.png',
                'userName' : 'User 3',
                'postTitle' : 'Tone of voice',
                'postDesc' : 'Pick a tone of voice (professional, luxury, persuasive, relaxed, witty, etc.) that best describes your brand identity.'
            },
            {
                'imgUrl' : 'assets/images/photo-4.png',
                'userName' : 'User 4',
                'postTitle' : 'Slogan ideas',
                'postDesc' : 'Save these slogan ideas elsewhere (like Google Drive or Microsoft Word), click the “Copy All Results” button located under the “Make More” button (see above) to copy them to your clipboard and paste them wherever you want.'
            }
        ]
        this.state = { };
    }

    render() {
        return (<>
            <Header/>
            <section>
                <div className="container">
                    <div className="col-md-8 offset-2">
                    <h1 className="h1 text-center my-3">Blog Posts</h1>
                        {this.postData.map((value) => <BlogCard post={value}/>)}
                    </div>
                </div>
            </section>
            </>
        );
    }
}
export default Blog;