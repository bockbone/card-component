function IconCard({ Icon, title }) {
  return (
    <div className="flex flex-col justify-center items-center h-[200px] w-[400px] border border-gray-50 text-gray-400 hover:bg-gray-50">
      <Icon className="h-8 mb-1" />

      <p>{title}</p>
    </div>
  );
}

export default IconCard;
