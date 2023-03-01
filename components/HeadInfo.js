import Head from "next/head";

const HeadInfo = ({title, name, content}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={name}/>
      <meta content={content} />
    </Head>
  );
};

HeadInfo.defaultProps={
    title: 'My Blog',
    name: 'Blog powered by Next js',
    content: 'practice next js'
}

export default HeadInfo;
