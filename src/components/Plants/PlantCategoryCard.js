function PlantCategoryCard ({term, image}) {
    return (
        <div className='col-3 m-3' style={{ backgroundColor: "#C9F0B0" }}>
            <img className='img-fluid w-50 p-2' src={require(`${image}`)} alt={term} />
            <h4>{term}</h4>
            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit risus a tellus eleifend, in bibendum neque posuere.</p>
        </div>
    );
}

export default PlantCategoryCard;