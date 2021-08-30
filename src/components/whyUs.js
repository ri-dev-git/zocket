import React from 'react'
import './css/whyUs.css'
import c1 from "./icons/c1.svg"
import c2 from "./icons/c2.svg"
import c3 from "./icons/c3.svg"
const WhyUs = () => {
    return (
        <div className="wU" >
            <div className="whyUs" id="whyus">Why Us?</div>
            <div className="wUContents">
                <div className="content1">
                    <img src={c1} alt="/" className="c1"/>
                    <p className="headline1">Localised Ad Campaigns</p>
                    <p className="description1">With Zocket’s localised ad campaigns, you’re sure to drive customers to your physical 
                    store. Online business listings, geo-tagging, and ads are some of the many things
                    we help businesses get started with. You can rest assured that you’ll leave a positive brand image on your 
                    customers as your business flourishes, making it easier for you to build long-lasting customer relationships locally.</p>
                </div>
                <div className="content2">
                    <img src={c2} alt="/" className="c2"/>
                    <p className="headline2">Get More Calls and Enquiries</p>
                    <p className="description2">When you use Zocket, you can expect calls pouring 
                    in with enquiries about your business. Our exceptional outreach strategies and
                    business profile optimization techniques will catch the eye of prospects. With
                    organic leads taken care of by Zoket, all you’d have to worry about is converting 
                    your leads to customers.</p>
                </div>
                <div className="content3">
                    <img src={c3} alt="/" className="c3"/>
                    <p className="headline3">No Expertise Required</p>
                    <p className="description3">Zocket is completely beginner friendly and doesn’t 
                    require any previous marketing expertise to use. Built with an aim to make 
                    marketing easier for small businesses, Zocket is powered by AI and will provide 
                    done-for-you content while you can take care of other important things in your business. 
                    With easy-to-follow guides, it doesn’t get better than this.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
