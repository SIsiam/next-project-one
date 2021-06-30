import Link from 'next/link'
import Image from 'next/image'
import img from "../Images/error.png";



const NotFound = () => {
    return (
        <div>
            <h1>Opps! Sorry </h1>
            <Image
                src={img}
                alt="Picture of the author"
                width={500}
                height={500}
            />
            <p>Go To Back The <Link href="/"><a>Home Page</a></Link> </p>
            
        </div>
    );
}

export default NotFound;