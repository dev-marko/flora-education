
function PlantCategoryCard ({term, image}) {
    return (
        <div className='col-3 m-3 border border-success rounded shadow' style={{ backgroundColor: "#C9F0B0" }}>
            <a href={`/plants?query=${term}`} style={{textDecoration: "none", color: "black"}}>
            <img className='img-fluid w-50 p-3' src={require(`${image}`)} alt={term} />
            <h4>{term}</h4>
            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit risus a tellus eleifend, in bibendum neque posuere.</p>
            </a>
        </div>
    );
}

export default PlantCategoryCard;