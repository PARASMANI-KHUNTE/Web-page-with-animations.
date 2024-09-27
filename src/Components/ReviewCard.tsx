interface propsCard{
    title : string;
    description : string;
    ratings : number;
    AvtarUrl : string;
    UserName : string;
}
const ReviewCard: React.FC<propsCard> = ({title, description ,ratings,AvtarUrl,UserName}) => {
  return (
    <div className="bg-white shadow-lg p-4 rounded">
      <div>
        <img src={AvtarUrl} alt="userAvtar" />
        <h1>{UserName}</h1>
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <h1>{ratings}</h1>
      </div>
    </div>
  )
}

export default ReviewCard
