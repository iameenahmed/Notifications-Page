/* eslint-disable react/prop-types */

const Notification = ({
  avatar,
  name,
  action,
  actionOn,
  timestamp,
  message,
  picture,
  isRead,
}) => {
  return (
    <div
      className={`mt-2.5 flex gap-3 rounded-md p-4 transition-colors duration-300 md:px-5 md:py-4 ${
        !isRead && "bg-VeryLightGrayishBlue"
      }`}
    >
      <div className="lg:basis-1/12">
        <img src={avatar} alt="avatar" className="w-11" />
      </div>
      <div className="flex basis-11/12">
        <div>
          <p className="text-DarkGrayishBlue ">
            <span className="font-extrabold capitalize text-VeryDarkBlue hover:cursor-pointer hover:text-Blue">
              {name}
            </span>
            {"  "}
            {action}
            {"  "}
            <a
              href="#"
              aria-label="click to go"
              className={`cursor-pointer font-bold hover:text-Blue ${
                action.includes("group") && "text-Blue "
              }`}
            >
              {actionOn}
            </a>
            <span
              className={`ml-2 inline-block h-2 w-2 rounded-full bg-Red transition-all duration-300 ${
                !isRead ? "opacity-100" : "opacity-0"
              }`}
            ></span>
          </p>
          <p className="block text-GrayishBlue">{timestamp}</p>
          {message !== undefined && (
            <div className="mt-3 rounded-lg border border-GrayishBlue px-5 py-3 text-DarkGrayishBlue transition-colors duration-300 hover:cursor-pointer hover:border-LightGrayishBlue1 hover:bg-LightGrayishBlue1">
              <p>{message}</p>
            </div>
          )}
        </div>
        {picture !== undefined && (
          <div className="ml-auto max-w-[2.75rem] hover:cursor-pointer">
            <img src={picture} alt="posted image" />
          </div>
        )}
      </div>
    </div>
  );
};
export default Notification;
