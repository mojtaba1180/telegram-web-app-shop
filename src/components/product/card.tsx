import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

interface Props {
  url: string;
}

function Card({ url }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };

  return (
    <Link
      to={url}
      className=" flex h-[220px] w-full flex-col overflow-hidden  rounded-lg border-2 border-[var(--tg-theme-secondary-bg-color)]">
      <div className=" ml-auto h-20 w-full  bg-[var(--tg-theme-secondary-bg-color)]" />
      <div className="flex w-full flex-col items-start justify-between p-2">
        <div className="mb-1 ml-auto h-5 w-full select-none text-right ">
          title
        </div>
        <p className="mb-1 ml-auto h-5 w-full select-none text-right text-gray-500 ">
          description
        </p>
        <div className="flex w-full  flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-[var(--tg-theme-secondary-bg-color)] px-1 pt-1 text-sm ">
              ⭐4.3
            </div>
            <div className="select-none text-sm">غذا</div>
          </div>
          <div className="self-end  text-right">124,000 تومان</div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
