import useTelegram from "@/hooks/useTelegram";

function Home() {
  const tgApp = useTelegram();

  const userId = tgApp.initDataUnsafe.user.id;
  return (
    <div>
      userId
      {userId}
    </div>
  );
}

export default Home;
