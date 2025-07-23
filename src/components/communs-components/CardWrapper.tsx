type ChildrenProps = {children: React.ReactNode}

const CardWrapper = ({children}:ChildrenProps) => {
  return (
    <div className='card my-[7rem] nt:relative nt:top-0  p-4.5 
    bg-base-100 w-[330px] tabletS:w-[400px] xl:w-[600px] xl:top-[4em]  nt:right-3 rounded-[5px] shadow-sm nt:bg-transparent nt:shadow-none nt:w-[500px]'>
      <div className='body'>
        {children}
      </div>
    </div>
  )
}

export default CardWrapper