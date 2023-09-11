

const Team = ({imageURL,name,profession}) => {
  return (
    <div className="mb-12">
    <img src={imageURL}
      className="mx-auto mb-4 rounded-[100%]" alt="" style={{maxWidth: '100px'}} />

    <p className="mb-2 font-[500]">{name}</p>
    <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#1b3645] via-[#d381cb] to-[#f61c11]">{profession}</p>
    <div className="w-[120px] h-14 relative">
 
</div>
  </div>
  )
}

export default Team