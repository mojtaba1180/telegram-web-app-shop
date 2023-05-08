import Container from "@components/container";

function StatusBox({ title, total }: { title: string; total: number }) {
  return (
    <div className="flex h-full w-full  flex-col items-center justify-evenly rounded-lg border-2  ">
      <div className="text-[var(--tg-theme-button-color)]">{total}</div>
      <div>{title}</div>
    </div>
  );
}

function UserProfileHome() {
  const BoxItem = [
    {
      title: "سفارش در حال انجام",
      total: 1
    },
    {
      title: "سفارش تکمیل شده",
      total: 5
    },
    {
      title: "سفارش در انتظار بررسی",
      total: 2
    },
    {
      title: "سفارش لغو شده",
      total: 8
    }
  ];
  return (
    <Container title="حساب کاربری" backwardUrl="/">
      <div className="grid h-52 w-full grid-cols-2 gap-2">
        {BoxItem.map((item) => (
          <StatusBox title={item.title} total={item.total} />
        ))}
      </div>
    </Container>
  );
}

export default UserProfileHome;
