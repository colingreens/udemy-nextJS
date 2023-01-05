import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  //send a request to some backend server
  //fetch the data with the id of router.query.projectid

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}
