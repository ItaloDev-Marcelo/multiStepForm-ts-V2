type ChildrenProps = {children: React.ReactNode}

const CardWrapper = ({children}:ChildrenProps) => {
  return (
    <div className='card my-[7rem] nt:relative nt:top-0  bg-base-100 w-[330px] tabletS:w-[400px] rounded-[5px] shadow-sm nt:bg-transparent nt:shadow-none nt:w-[500px]'>
      <div className="body">
        {children}
      </div>
    </div>
  )
}

export default CardWrapper