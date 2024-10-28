const Card = ({ icon, heading, text }) => {
  return (
    <div className="text-center p-6 border rounded-xl border-gray-200 py-12 mt-4">
      <div className="w-fit mx-auto rounded bg-brandWhite p-4">
        <img src={icon} alt="" className="w-12 " />
      </div>
      <h4 className="font-bold text-xl">{heading}</h4>
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  );
};

export default Card;
