import Image from "next/image"
import cinna from "../images/cinna.png";

function FooterComponent() {    
	return (        
		<footer className="roadrage text-center">
			<p>All Rights Reserved MythicXGN 2019-2023 ® <Image src={cinna} alt="cinna" className="cinna left"></Image></p>
	  </footer>
	)
}
export default FooterComponent