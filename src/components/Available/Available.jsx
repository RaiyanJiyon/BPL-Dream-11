
const Available = () => {
    return (
        <div className="w-11/12 mx-auto mt-16 flex justify-between">
            <h2 className="card-title">Available Players</h2>
            <div className="flex border rounded-full overflow-hidden">
                <button className="btn bg-[#E7FE29] font-bold border-[#e0e0e2] rounded-l-xl rounded-r-none">Available</button>
                <button className="btn bg-white border text-[#13131399] border-[#e0e0e2] rounded-l-none rounded-r-xl">Selected (0)</button>
            </div>
        </div>
    );
};

export default Available;