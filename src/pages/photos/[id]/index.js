import Image from "next/image";
import Link from "next/link";
const index = ({ photo }) => {
  const { title, url } = photo;
  return (
    <div>
      <h2>{title}</h2>
      <Image src={url} width={500} height={500} alt={photo.title} />
      <Link href="/photos">
        <a>go back</a>
      </Link>
    </div>
  );
};

export const getStaticProps = async()=>{
    const res = await fetch
}
export default index;
