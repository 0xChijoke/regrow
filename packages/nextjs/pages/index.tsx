import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

import ProfilesList from "~~/components/registry/ProfilesList";
import { getIPFSClient } from "~~/services/ipfs";


const Home: NextPage = () => {
  
  return (
    <>
      <MetaHeader />
      <div className="flex items-center justify-center flex-col flex-grow pt-10">
       <ProfilesList />
      </div>
    </>
  );
};

export default Home;
