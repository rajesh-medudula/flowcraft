const Node = ({ data }) => {
  const onDragStart = (event) => {
    event.dataTransfer.setData("application/node", JSON.stringify(data.data));
  };

  return (
    <button
      className="bg-gray-700 h-full"
      data-id={data.id}
      draggable="true" 
      onDragStart={(event) => onDragStart(event)}
    >
      {data.title}
    </button>
  );
};

export default Node;
