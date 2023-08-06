import '../App.css';


export const DhButton = (props) => {
    return (
      <div
        id={props.id}
        className={`relative ${props.className ?? ''}`}
      >
        <h2
          className="hover:text-[#081111] border border-[#081111] hover:border-[#081111]  inline-block px-4 py-3 text-center text-black bg-white rounded cursor-pointer hover:scale-95 transition-all"
        >
          {props.children ?? ''}
        </h2>
      </div>
    );
  };