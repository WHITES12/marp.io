import { useRouter } from 'next/router';

export default async function join() {
  // function body

  const router = useRouter();

  return null;
}

export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: 'https://discord.gg/wZ85VkSqN8' });
  res.end();

  return {
    props: {},
  };
}
