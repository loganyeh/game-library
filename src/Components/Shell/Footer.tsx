

// type aliases
type FooterData = {
    title: string;
    links: string[];
}
type SocialMediaIcon = "facebook-circle" | "instagram" | "twitter"  | "youtube";

function Footer(){
    const footerData: FooterData[] = [
        {title: "About Nintendo", links: ["Careers", "Corporate Responsibility"]},
        {title: "Shop", links: ["Games", "Hardware", "Merchandise", "Sales and deals", "Exclusives", "Nintendo Switch Online", "Nintendo Store US"]},
        {title: "Orders", links: ["Order details", "Shipping info", "Refunds and returns", "FAQ"]},
        {title: "Support", links: ["Nintendo Switch 2", "Nintendo Switch", "Nintendo Account", "Apps and other products", "Other systems", "Service Center", "Nintendo product recycling", "Warranty", "Licensed product information"]},
        {title: "Parents", links: ["Info for parents", "Parental controls"]},
        {title: "Privacy", links: ["Privacy policy", "Parental controls"]},
        {title: "Community guidelines", links: ["Community guidelines", "Online safety"]},
        {title: "Documents and policies", links: ["Health and safety precautions", "Wireless regulatory info", "Supply chain transparency"]},
    ];
    const socialMediaIcons: SocialMediaIcon[] = ["facebook-circle", "instagram", "twitter" ,"youtube"];
    const contactData: string[] = ["Contact us", "Website feedback", "Terms of use"];

    return(
        <>
            <div className="flex flex-col items-center">         

                {/* Logo */}
                <div className="w-full bg-red-600 mt-18 py-10 flex justify-center">
                    <div className="border-5 border-white px-2 text-2xl text-white font-bold tracking-widest rounded-3xl">Nintendo</div>
                </div>

                {/* Links */}
                <div className="w-full max-w-7xl p-12 flex gap-10 flex-col md:grid md:grid-cols-3 xl:grid-cols-6">
                    {footerData.map((data, index) => {
                        return <div key={index} className="border-l border-gray-300 w-full pl-8 flex gap-3 flex-col">
                                    <div className="py-1.5 text-lg text-zinc-700 font-semibold tracking-wide">{data.title}</div>
                                    
                                    <div className="flex gap-2 flex-col">
                                        {data.links.map((link, index) => {
                                            return <div key={index} className="text-sm text-red-600 font-bold tracking-wide">{link}</div>
                                        })}
                                    </div>
                                </div>
                    })}
                </div>
                
                {/* Social & Ads */}
                <div className="w-full max-w-7xl xl:px-10 flex flex-col items-center xl:flex-row xl:justify-between">
                    {/* Social Media Icons */}
                    <div className="flex gap-10">
                        {socialMediaIcons.map((icon, index) => {
                            return <i key={index} className={`bx bxl-${icon} text-4xl md:text-[40px] text-zinc-700`} ></i>
                        })}
                    </div>

                    {/* Ad Box */}
                    <div className="w-fit my-14 xl:my-10 py-6 bg-blue-300">Place Advertisement Here</div>
                    {/* <div className="w-full max-w-[150px] my-14 xl:my-10 py-5 text-center bg-blue-300">Place Advertisement Here</div> */}
                </div>

                {/* End of Foooter */}
                <div className="w-full pt-10 pb-40 xl:py-10 flex gap-6 flex-col xl:flex-row items-center xl:justify-center bg-zinc-800">
                    <div className="text-white text-center text-[10px] tracking-wide">
                        © Nintendo. <br />
                        Games are property of their respective owners. <br />
                        Nintendo of America Inc. <br />
                        Headquarters are in Redmond, Washington, USA
                    </div>

                    <div className="flex gap-5 text-white text-[10px] font-light">
                        {contactData.map((text, index) => {
                            return <div key={index}>{text}</div>
                        })}
                    </div>

                    <div className="text-white text-sm">🇺🇸 English (United States)</div>

                </div>

            </div>

        </>
    )
}

export default Footer;