

const SectionTitle = ({subHeader ,Header}) => {
    return (
        <div className="text-center md:w-3/12 mx-auto">
      <p className="text-yellow-400 tex-xl py-2">--- {subHeader} ----</p>
      <h1 className="text-4xl uppercase border-y-4 py-4">{Header}</h1>
            
        </div>
    );
};

export default SectionTitle;