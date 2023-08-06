import '../App.css';
import logo from './Img/Logo.png'

function Footer  ()  {
    const footerLinks = [
        {title:"Account",to:"https://datahex.in"},
        {title:"Media one",to:"https://datahex.in"},
        {title:"maktoob",to:"https://datahex.in"},
        {title:"otoman",to:"https://datahex.in"},
        {title:"keynode",to:"https://datahex.in"},
        {title:"madhatters",to:"https://datahex.in"},
        {title:"teksedo",to:"https://datahex.in"},
        {title:"DoRein",to:"https://datahex.in"},
        {title:"Al jamia Al ihsan",to:"https://datahex.in"},
        {title:"Book plus",to:"https://datahex.in"},
        {title:"juris vox",to:"https://datahex.in"},
        {title:"techno corp",to:"https://datahex.in"},
        {title:"ace gold",to:"https://datahex.in"},
        {title:"mint & chilli",to:"https://datahex.in"},
        {title:"Privacy Policy",to:"https://datahex.in"},

    ]
    return (
        <footer className="flex justify-center w-full py-12 text-white bg-black ">
            <div className="text-center">
                <div className="mx-10">
                {
                    footerLinks.map(
                        (link,index)=>(
                            <a href={link.to} key={index}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block capitalize px-4 my-2 text-gray-400 duration-300 hover:text-[#41b6ad]  link"
                            >{link.title}</a>
                        )
                    )
                }
                </div>
                <br /> <br />
         <section className="flex justify-center"> <img src={logo} className="w-16 md:w-28 xl:w-36 opacity-40" alt="" /></section>
            </div>
        </footer>
    );
}
 
export default Footer;