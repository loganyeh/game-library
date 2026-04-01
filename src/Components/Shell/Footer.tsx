

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
            <div className="h-auto w-full mt-18">         

                {/* Logo */}
                <div className="h-32 w-full bg-red-600 flex justify-center items-center">
                    <div className="border-5 border-white px-2 text-2xl text-white font-bold tracking-widest rounded-3xl">Nintendo</div>
                </div>

                {/* Links */}
                <div className="border h-auto w-full flex flex-col md:flex-row md:flex-wrap justify-start items-center md:items-start mt-12">
                    {footerData.map((data, index) => {
                        return <div key={index} className="border-l border-gray-300 h-auto w-4/5 md:w-1/4 2xl:w-2/12 mb-8 pl-8 flex flex-col">
                                    <div className="h-10 md:h-auto flex items-center text-lg text-zinc-700 font-semibold tracking-wide">{data.title || "About Nintendo"}</div>
                                    
                                    <div className="h-auto flex flex-col mt-2">
                                        {data.links.map((link, index) => {
                                            return <div key={index} className="h-6 md:h-auto mb-2 flex items-center text-sm md:text-base text-red-600 font-bold tracking-wide">{link || "Careers"}</div>
                                        })}
                                    </div>
                                </div>
                    })}
                </div>

                {/* Social Media Icons */}
                <div className="h-auto w-full flex justify-center items-center">
                    <div className="h-auto w-2/3 md:w-1/3 2xl:w-2/12 flex justify-between items-center">
                        {socialMediaIcons.map((icon, index) => {
                            return <div key={index} className="flex justify-center items-center"><i className={`bx bxl-${icon} text-4xl md:text-[40px] text-zinc-700`} ></i></div>
                        })}
                    </div>
                </div>

                {/* Ad Box */}
                <div className="h-44 w-full flex justify-center items-center">
                    <div className="border h-18 w-auto flex justify-center items-center">Place Advertisement Here</div>
                </div>

                {/* End of Foooter */}
                <div className="h-96 md:h-80 xl:h-30 w-full bg-zinc-800 flex justify-center">
                    <div className="h-full w-8/12 flex flex-col justify-start">
                        <div className="mt-8 flex justify-center items-center text-white text-[10px] tracking-wide">© Nintendo.Games are property of their respective owners.Nintendo of America Inc.Headquarters are in Redmond, Washington, USA</div>
                        <div className="mt-6 flex justify-between items-center text-white text-[10px] font-light">
                            {contactData.map((text, index) => {
                                return <div key={index}>{text}</div>
                            })}
                        </div>
                        <div className="mt-8 flex justify-center items-center text-white text-sm">🇺🇸 English (United States)</div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer;