import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img width="500" src="/img/bck.png" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          MARP
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
      Mallu Adholokam Roleplay is a samp  role-playing server with fivem features. 
	  </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://discord.gg/wZ85VkSqN8"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          <i className="fab fa-discord mr-2" />Discord
              </a>
            </Link>
  <div className="py-10"></div>
  <Link href={"https://youtube.com/@wantedchandranvaat9636"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
<i className="fab fa-youtube mr-2" />Youtube
    </a>
  </Link>
        </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-code text-2xl text-amber-500`} /> Development</p>
                  <p className="text-gray-500 line-clamp-4">our ongoing efforts in refining and expanding the server through regular updates, new content additions, and community-driven features, all aimed at delivering an immersive and enjoyable role-playing experience for our players.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-shield text-2xl text-amber-500`} /> Security</p>
                  <p className="text-gray-500 line-clamp-4">We prioritize the implementation of robust security measures in role-playing to protect players' personal information and prevent unauthorized access, fostering a safe and enjoyable role-playing experience for all.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-ticket text-2xl text-amber-500`} /> Support</p>
                  <p className="text-gray-500 line-clamp-4">24/7 staff support</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img width="500" src="/img/smp.png" />
                  <p className="text-3xl text-white font-semibold">Best Rp Server</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-5">Are you ready to be a part of marp . get a whitelisit and enjoy rp.</p>
                </div>
              </>
      
        </div>

      </>
  )
}
